import React, { useEffect, useState } from "react";
import { notesHomeIcons } from "../data/notesHomeIcons";
import "../Style/NotesOutline.css";
import { FaArchive } from "react-icons/fa";
import { FaCopy, FaPalette, FaTrash, FaUserPlus } from "react-icons/fa6";
import axios from "axios";

export default function NotesOutline(props) {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    //fetch data from notes for a particular username
  });

  const _id = "65cda20925b96ddfda3c356d";

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleNoteClick = () => {};

  const handleArchiveClick = async () => {
    const response = await axios.patch(
      `http://[::1]:8000/notes/modify/${_id}`,
      {
        location: "archive",
      }
    );
    console.log(response.data);
    alert(`Note with title ${response.data.title} moved to archive`);
  };

  const handleCollaboratorClick = () => {};

  const handleCopyClick = () => {};

  const handleTrashClick = async () => {
    const response = await axios.patch(
      `http://[::1]:8000/notes/modify/${_id}`,
      {
        location: "trash",
      }
    );
    console.log(response.data);
    alert(`Note with title ${response.data.title} moved to trash`);
  };

  return (
    <div
      className="text-light note-dimensions p-2 border border-1 position-relative notes-box"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleNoteClick}
    >
      <div className="row notes-title p-2">{props.title}</div>
      <div className="row p-2">{props.content}</div>
      {isHovering && (
        <div className="row dp-sec position-absolute placement-icons">
          {/* {notesHomeIcons.map((icons) => (
              <div className="col-2" key={icons.title} onClick={`handle${icons.method}Click`}>
                {icons.icon}
              </div>
            ))} */}
          <div className="col-3 text-center">
            <FaArchive size={20} onClick={handleArchiveClick} role="button" />
          </div>
          <div className="col-3 text-center">
            <FaUserPlus
              size={20}
              onClick={handleCollaboratorClick}
              role="button"
            />
          </div>
          <div className="col-3 text-center">
            <FaCopy size={20} onClick={handleCopyClick} role="button" />
          </div>
          <div className="col-3 text-center">
            <FaTrash size={20} onClick={handleTrashClick} role="button" />
          </div>
        </div>
      )}
    </div>
  );
}
