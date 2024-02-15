import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Labels() {
  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: "yellow",
  };
  return (
    <>
      <div>Labels</div>
      <Link to="/userid/newnote">
        <IoAddCircleOutline
          style={plusStyle}
          size={50}
          className="add-button"
        />
      </Link>
    </>
  );
}
