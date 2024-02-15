import React from "react";
import NotesHomeNavbar from "./NotesHomeNavbar";
import SettingsBar from "./SettingsBar";
import NotesHomeSidebar from "./NotesHomeSidebar";
import "../Style/InsertNote.css";

export default function InsertNote() {
  return (
    <>
      <div className="row m-0 p-0">
        <SettingsBar />
      </div>
      <div className="row m-0 p-0">
        <form>
          <div className="row m-0 p-0 mt-5">
            <input
              type="text"
              className="bg-transparent text-light fs-3 title-input"
              placeholder="Enter Title"
            />
          </div>
          <div className="row m-0 p-0 mt-5 mh-100">
            <textarea
              className="bg-transparent text-light"
              cols={20}
              rows={30}
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
