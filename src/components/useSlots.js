import React from "react";

const clone = (component, props = {}) => {
  return React.cloneElement(component, { ...props });
};

function getSlotComponent(Component, children) {
  let resultComponent;
  React.Children.forEach(children, (child) => {
    if (resultComponent) return;
    if (child.type === Component) {
      resultComponent = child;
    }
  });

  return [
    resultComponent?.props?.data,
    resultComponent,
    (props = {}) => clone(resultComponent, props),
  ];
}

export function useSlots(children) {
  return {
    getSlot: (Component) => {
      return getSlotComponent(Component, children);
    },
    clone,
  };
}

export default useSlots;
