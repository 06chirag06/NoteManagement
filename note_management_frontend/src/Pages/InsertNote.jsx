import React from "react";
import NotesHomeNavbar from "../Components/NotesHomeNavbar";
import SettingsBar from "../Components/SettingsBar";
import NotesHomeSidebar from "../Components/NotesHomeSidebar";

export default function InsertNote() {
  return (
    <>
      <div className="container-fluid main-wrapper m-0 p-0">
        <div className="row m-0 p-0">
          <NotesHomeNavbar />
        </div>
        <div className="row m-0 p-0 h-100">
          <div className="col-2 p-0 border-end border-1">
            <NotesHomeSidebar />
          </div>
          <div className="col-10 m-0 p-0">
            <SettingsBar />
          </div>
        </div>
      </div>
    </>
  );
}
