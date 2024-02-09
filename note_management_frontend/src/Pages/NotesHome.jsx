import React from "react";
import NotesHomeNavbar from "../Components/NotesHomeNavbar";
import NotesHomeSidebar from "../Components/NotesHomeSidebar";
import NotesOutline from "../Components/NotesOutline";
import { IoAddCircleOutline } from "react-icons/io5";
import "../Style/NotesHome.css";

export default function Users() {

  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: "yellow",
  };

  return (
    <>
      <div className="container-fluid main-wrapper bg-dark">
        <div className="row">
          <NotesHomeNavbar />
        </div>
        <div className="row sidebar">
          <div className="col-2 m-0 p-0 border-end border-1">
            <NotesHomeSidebar />
          </div>
          <div className="col-10 m-0 p-0 bg-viridian-green">
            <div className="row m-0 p-5">
              <NotesOutline />
              <NotesOutline />
            </div>
            <div>
              <IoAddCircleOutline style={plusStyle} size={50} />
            </div>
            <div>
              <span id="background-text-notes">INLINE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
