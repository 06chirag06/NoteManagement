import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaBars,
  FaNoteSticky,
  FaTags,
  FaBoxArchive,
  FaTrashCan,
} from "react-icons/fa6";
import { Navbar, Nav, NavbarToggle } from "react-bootstrap";
import "../Style/NotesHomeSidebar.css";

export default function NotesHomeSidebar() {
  const iconStyles = {
    color: "yellow",
    fontSize: "1.25rem",
  };
  const iconStyles1={
    color:"yellow",
    fontSize:"1.75rem",
  }
  return (
    <>
      {/* <div className="sidebar"> */}
      <div className="container-fluid">
        <div className="row">
          <button
            className="navbar-toggler text-light border-0 text-light zoom mt-3 p-2 fs-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars style={iconStyles1}/>
          </button>
        </div>
        <div className="row text-light mt-2">
          <Navbar bg="dark" expand="lg" className="mb-4 sidebar p-0 m-0">
            <NavbarToggle className="border-0 p-0 m-0"></NavbarToggle>
            <Navbar.Collapse id="basic-navbar-nav" className="border-0">
              <Nav className="flex-column">
                <Nav.Link>
                  <Link
                    className="nav-link text-light fw-semibold fs-5"
                    to="/userId/home"
                  >
                    <FaNoteSticky style={iconStyles}/>
                    {"  "}
                    <span className="font-yellow">Notes</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="nav-link text-light fw-semibold fs-5"
                    to="/userId/labels"
                  >
                    <FaTags style={iconStyles}/>
                    {"  "}
                    <span className="font-yellow">Labels</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="nav-link text-light fw-semibold fs-5"
                    to="/userId/archive"
                  >
                    <FaBoxArchive style={iconStyles}/>
                    {"  "}
                    <span className="font-yellow">Archive</span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="nav-link text-light fw-semibold fs-5"
                    to="/userId/trash"
                  >
                    <FaTrashCan style={iconStyles}/>
                    {"  "}
                    <span className="font-yellow">Trash</span>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
