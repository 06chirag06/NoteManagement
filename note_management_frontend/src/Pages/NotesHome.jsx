import React from "react";
import NotesHomeNavbar from "../Components/NotesHomeNavbar";
import NotesHomeSidebar from "../Components/NotesHomeSidebar";
import Notes from "../Components/Notes";
import { FaPlusCircle } from "react-icons/fa";
import "../Style/NotesHome.css";

export default function Users() {
  const plusStyle = {
    position:"fixed",
    bottom:"4%",
    right:"2%",
  }
  return (
    <>
      <div className="container-fluid main-wrapper bg-dark">
        <div className="row sidebar">
          <div className="col-2 m-0 p-0">
            <NotesHomeSidebar />
          </div>
          <div className="col-10 m-0 p-0 bg-viridian-green">
            <div className="row m-0 p-0">
              <NotesHomeNavbar />
            </div>
            <div className="row m-0 p-0">
              <Notes />
            </div>
            <div>
              <FaPlusCircle style={plusStyle} size={50}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
