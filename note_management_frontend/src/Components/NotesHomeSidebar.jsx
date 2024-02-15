import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaNoteSticky,
  FaTags,
  FaBoxArchive,
  FaTrashCan,
} from "react-icons/fa6";
import "../Style/NotesHomeSidebar.css";

export default function NotesHomeSidebar() {
  const navigate = useNavigate();

  const iconStyles = {
    color: "#EEE5E9",
    fontSize: "1.25rem",
  };

  const handleHomeClick = () => {
    navigate("/userid/home", { replace: true });
  };
  const handleLabelClick = () => {
    navigate("/userid/labels", { replace: true });
  };
  const handleArchiveClick = () => {
    navigate("/userid/archive", { replace: true });
  };
  const handleTrashClick = () => {
    navigate("/userid/trash", { replace: true });
  };

  return (
    <>
      <div className="container-fluid bg-dark h-100 m-0 p-0">
        <div className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector" role="button" onClick={handleHomeClick}>
          <Link
            className="nav-link text-light fw-semibold fs-5"
          >
            <span>
              <FaNoteSticky style={iconStyles} />
            </span>
            &emsp;
            <span className="font-yellow">Notes</span>
          </Link>
        </div>
        <div
          className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector"
          role="button"
          onClick={handleLabelClick}
        >
          <Link className="nav-link text-light fw-semibold fs-5">
            <FaTags style={iconStyles} />
            &emsp;
            <span className="font-yellow">Labels</span>
          </Link>
        </div>
        <div
          className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector"
          onClick={handleArchiveClick}
          role="button"
        >
          <Link className="nav-link text-light fw-semibold fs-5">
            <FaBoxArchive style={iconStyles} />
            &emsp;
            <span className="font-yellow">Archive</span>
          </Link>
        </div>
        <div
          className="row m-0 p-0 ps-3 pt-3 pb-3 focus-selector"
          onClick={handleTrashClick}
          role="button"
        >
          <Link className="nav-link text-light fw-semibold fs-5">
            <FaTrashCan style={iconStyles} />
            &emsp;
            <span className="font-yellow">Trash</span>
          </Link>
        </div>
      </div>
    </>
  );
}
