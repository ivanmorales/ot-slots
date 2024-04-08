import React from "react";

const OTHER_CHILDREN_SLOT_NAME = "__other_children__";

const clone = (component, props = {}) => {
  return React.cloneElement(component, { ...props });
};

export const ChildrenSlot = (props) => {
  console.log(props);

  return <>{React.Fragment({ ...props, slot: OTHER_CHILDREN_SLOT_NAME })}</>;
};

export function useSlots(children) {
  const slots = {};

  React.Children.forEach(children, (child) => {
    slots[child.props.slot] = child;
  });

  return {
    getSlot: (slotName) => {
      if (!slots[slotName]) {
        console.warn(
          `Slot name "${slotName}" has not been declared. Make sure you add the props \`slot="${slotName}"\` to the child component.`
        );
        return [];
      }
      const component = slots[slotName];
      return [component.props.data, (props = {}) => clone(component, props)];
    },
    clone,
    Children: slots[OTHER_CHILDREN_SLOT_NAME] || (() => null),
  };
}

export default useSlots;
