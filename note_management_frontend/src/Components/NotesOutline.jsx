import React, { useEffect, useState } from "react";
import "../Style/NotesOutline.css";
import { notesHomeIcons } from "../data/notesHomeIcons";

export default function NotesOutline(props) {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    //fetch data from notes for a particular username
  });

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleArchiveClick = () => {};

  const handleCollaboratorClick = () => {};

  const handleThemeClick = () => {};

  const handleCopyClick = () => {};

  const handleTrashClick = () => {};

  return (
    <div
      className="text-light note-dimensions p-2 border border-1 position-relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="row notes-title p-2">{props.title}</div>
      <div className="row p-2">{props.content}</div>
      {isHovering && (
        <div>
          <div className="row dp-sec position-absolute placement-icons">
            {notesHomeIcons.map((icons) => (
              <div className="col-2" key={icons.icon}>
                {icons.icon}
              </div>
            ))}
            {/* <div className="col-2 note-icon-hover">
              <FaPalette className="p-1" size={30} onClick={handleThemeClick} />
            </div>
            <div className="col-2">
              <FaUserPlus
                className="p-1 note-icon-hover"
                size={30}
                onClick={handleCollaboratorClick}
              />
            </div>
            <div className="col-2">
              <FaCopy
                className="p-1 note-icon-hover"
                size={30}
                onClick={handleCopyClick}
              />
            </div>
            <div className="col-2">
              <FaTrash
                className="p-0 pt-1 pb-1 note-icon-hover"
                size={30}
                onClick={handleTrashClick}
              />
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
