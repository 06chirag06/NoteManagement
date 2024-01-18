import React from "react";
import "../Style/NotesOutline.css";

export default function Notes() {
  return (
    <div className="text-light note-dimensions p-2 border border-1 me-5">
      <div className="notes-title">Notes Title</div>
      <div>Notes Content</div>
    </div>
  );
}
