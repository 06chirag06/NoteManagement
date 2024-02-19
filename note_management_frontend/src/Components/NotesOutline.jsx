import React, { useEffect, useState } from "react";
import { notesHomeIcons } from "../data/notesHomeIcons";
import { FaArchive } from "react-icons/fa";
import { FaCopy, FaPalette, FaTrash, FaUserPlus } from "react-icons/fa6";
import axios from "axios";
import "../Style/NotesHome.css";
import { endpoints } from "../utils/Constants";

export default function NotesOutline(props) {
  const url = window.location.pathname;
  const [isHovering, setIsHovering] = useState(false);
  const [id, setId] = useState(props.id);
  // const [data, setData] = useState(props.);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleArchiveClick = async () => {
    const response = await axios.patch(`${endpoints.updateNotes}/${id}`, {
      location: "archive",
    });
    console.log(response.data);
    alert(`Note with title ${response.data.title} archived.`);
    // props.fetchData();
    // window.location.reload();
  };

  const handleNonArchiveClick = async () => {
    console.log(url);
    const response = await axios.patch(`http://[::1]:8000/notes/modify/${id}`, {
      location: "main",
    });
    console.log(response.data);
    alert(`Note with title ${response.data.title} moved to notes`);
  };

  const handleCollaboratorClick = () => {};

  const handleTrashClick = async () => {
    const response = await axios.patch(`http://[::1]:8000/notes/modify/${id}`, {
      location: "trash",
    });
    console.log(response.data);
    alert(`Note with title ${response.data.title} moved to trash`);
  };

  // useEffect(() => {

  // }, [handleArchiveClick]);

  return (
    <div
      className={
        "p-2 border border-1 position-relative " +
        (props.isDark
          ? "text-light note-dimensions"
          : "text-dark note-dimensions-light")
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      // onClick={props.handleNoteClick(id)}
    >
      <div className="row notes-title">
        <div className="col-12">{props.title}</div>
      </div>
      <div className="row">
        <div className="col-12">{props.content}</div>
      </div>
      {isHovering && (
        <div className="row position-absolute placement-icons">
          {/* {notesHomeIcons.map((icons) => (
              <div className="col-2" key={icons.title} onClick={`handle${icons.method}Click`}>
                {icons.icon}
              </div>
            ))} */}
          <div className="col-4 text-center">
            <FaArchive
              size={20}
              onClick={
                url.includes("home")
                  ? handleArchiveClick
                  : handleNonArchiveClick
              }
              role="button"
            />
          </div>
          <div className="col-4 text-center">
            <FaUserPlus
              size={20}
              onClick={handleCollaboratorClick}
              role="button"
            />
          </div>
          <div className="col-4 text-center">
            <FaTrash size={20} onClick={handleTrashClick} role="button" />
          </div>
        </div>
      )}
    </div>
  );
}
