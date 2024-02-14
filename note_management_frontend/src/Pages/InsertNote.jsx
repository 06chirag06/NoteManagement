import React from "react";
import NotesHomeNavbar from "../Components/NotesHomeNavbar";
import SettingsBar from "../Components/SettingsBar";
import NotesHomeSidebar from "../Components/NotesHomeSidebar";
import "../Style/InsertNote.css";

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
            <div className="row m-0 p-0">
              <SettingsBar />
            </div>
            <div className="row m-0 p-0">
              <form>
                <div className="row m-0 p-0 mt-5">
                  <input type="text" className="bg-transparent text-light fs-3 title-input" placeholder="Enter Title"/>
                </div>
                <div className="row m-0 p-0 mt-5 mh-100">
                  <textarea className="bg-transparent text-light" cols={20} rows={30}></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
