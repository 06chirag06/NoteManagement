import React, { useEffect, useState } from "react";
import { notesHomeIcons } from "../data/notesHomeIcons";
import "../Style/NotesOutline.css";

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

  const handleNoteClick = () => {};

  const handleArchiveClick = () => {};

  const handleCollaboratorClick = () => {};

  const handleThemeClick = () => {};

  const handleCopyClick = () => {};

  const handleTrashClick = () => {};

  return (
    <div
      className="text-light note-dimensions p-2 border border-1 position-relative notes-box"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleNoteClick}
      role="button"
    >
      <div className="row notes-title p-2">{props.title}</div>
      <div className="row p-2">{props.content}</div>
      {isHovering && (
        <div>
          <div className="row dp-sec position-absolute placement-icons">
            {notesHomeIcons.map((icons) => (
              <div className="col-2" key={icons.title}>
                {icons.icon}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
