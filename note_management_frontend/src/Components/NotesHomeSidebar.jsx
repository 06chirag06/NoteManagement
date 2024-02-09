import React from "react";
import { Link } from "react-router-dom";
import {
  FaNoteSticky,
  FaTags,
  FaBoxArchive,
  FaTrashCan,
} from "react-icons/fa6";
import "../Style/NotesHomeSidebar.css";

export default function NotesHomeSidebar() {
  const iconStyles = {
    color: "#EEE5E9",
    fontSize: "1.25rem",
  };
  return (
    <>
      <div className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector">
        <Link
          className="nav-link text-light fw-semibold fs-5"
          to="/userId/home"
        >
          <span>
            <FaNoteSticky style={iconStyles} />
          </span>
          &emsp;
          <span className="font-yellow">Notes</span>
        </Link>
      </div>
      <div className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector">
        <Link
          className="nav-link text-light fw-semibold fs-5"
          to="/userId/labels"
        >
          <FaTags style={iconStyles} />
          &emsp;
          <span className="font-yellow">Labels</span>
        </Link>
      </div>
      <div className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector">
        <Link
          className="nav-link text-light fw-semibold fs-5"
          to="/userId/archive"
        >
          <FaBoxArchive style={iconStyles} />
          &emsp;
          <span className="font-yellow">Archive</span>
        </Link>
      </div>
      <div className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector">
        <Link
          className="nav-link text-light fw-semibold fs-5"
          to="/userId/trash"
        >
          <FaTrashCan style={iconStyles} />
          &emsp;
          <span className="font-yellow">Trash</span>
        </Link>
      </div>
    </>
  );
}
