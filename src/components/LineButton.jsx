import React from "react";
import Line from "./Line";
import Book from "./Book";
import useSlots from "./useSlots";
import { useState } from "react";
import { useEffect } from "react";

const data = {};
const withSlots = (WrappedComponent, slotNames) => (props) => {
  const slots = {};

  const shareData = (name) => (data) => {
    console.log("blha");
    data[name] = data;
  };

  React.Children.forEach(props?.children, (child) => {
    const slotName = child.props?.slot;
    if (!slotName) {
      console.warn(`The prop "slot" was not declared.`);
      return;
    }

    // console.log(child.props.slot, child);

    slots[slotName] = {
      component: (props) =>
        React.cloneElement(child, { shareData: shareData(slotName), ...props }),
      // data: child.getSlotData && child.getSlotData(child.props),
      data: data[slotName] || {},
    };
  });

  function getSlot(name) {
    if (!slotNames.includes(name)) {
      console.warn(`Slot ${name} was not available.`);
      return [];
    }
    return [slots[name].component, slots[name].data];
  }

  return <WrappedComponent {...props} getSlot={getSlot} />;
};

const LineButton = withSlots(
  ({ getSlot }) => {
    const [lastUpdate, setLastUpdate] = useState(0);
    const [updated, setUpdated] = useState(false);

    const [LineComponent, lineData] = getSlot("line");
    const [BookComponent, bookData] = getSlot("book");

    // useEffect(() => {
    //   // No update, don't do anything
    //   if (lastUpdate > lineData.lastUpdate) return;

    //   setLastUpdate(lineData.lastUpdate);
    //   setUpdated(true);

    //   const to = setTimeout(() => {
    //     setUpdated(false);
    //   }, 2000);

    //   return () => {
    //     clearTimeout(to);
    //   };
    // }, [lineData.lastUpdate]);

    return (
      <button
        style={{
          display: "flex",
          gap: "1rem",
          transition: "all 300ms ease-in-out",
          background: updated ? "blue" : undefined,
        }}
      >
        <BookComponent withFire />
        <LineComponent />
        <small>Last Update: {bookData.name}</small>
      </button>
    );
  },
  ["line", "book"]
);

export default LineButton;
