import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const AddNoteButton = (props) => {
  const navigate = useNavigate();

  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: props.isDark ? "yellow" : "#3B60E4",
  };

  return (
    <Link to="/userid/newnote">
      <IoAddCircleOutline
        style={plusStyle}
        size={50}
        className="add-button"
        role="button"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Add A Note"
      />
    </Link>
  );
};

export default AddNoteButton;
