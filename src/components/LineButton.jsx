import React from "react";
import Line from "./Line";
import Book from "./Book";
import useSlots from "./useSlots";
import { useState } from "react";
import { useEffect } from "react";

const LineButton = ({ children }) => {
  const { getSlot } = useSlots(children);
  const [lastUpdate, setLastUpdate] = useState(0);
  const [updated, setUpdated] = useState(false);

  const [lineData, lineComponent] = getSlot(Line);
  const [, , bookComponent] = getSlot(Book);

  useEffect(() => {
    // No update, don't do anything
    if (lastUpdate > lineData.lastUpdate) return;

    setLastUpdate(lineData.lastUpdate);
    setUpdated(true);

    const to = setTimeout(() => {
      setUpdated(false);
    }, 2000);

    return () => {
      clearTimeout(to);
    };
  }, [lineData.lastUpdate]);

  return (
    <button
      style={{
        display: "flex",
        gap: "1rem",
        transition: "all 300ms ease-in-out",
        background: updated ? "blue" : undefined,
      }}
    >
      {bookComponent({ withFire: true })}
      {lineComponent}
      <small>Last Update: {lastUpdate}</small>
    </button>
  );
};

export default LineButton;
