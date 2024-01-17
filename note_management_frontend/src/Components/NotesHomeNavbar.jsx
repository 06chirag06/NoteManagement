// import { Link } from "react-router-dom";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
// import { FaRegCircleUser } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Navbar, NavbarToggle, Nav } from "react-bootstrap";
import "../Style/NotesHomeNavbar.css";
import logo from "../images/navLogo.jpg";
import { IconContext } from "react-icons";

export default function NotesHomeNavbar() {
  const iconStyles = {
    color: "yellow",
    fontSize: "2rem",
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="mb-4">
        <div className="container-fluid navbar-notes">
          <Navbar.Brand href="/">
            <img src={logo} height="30%" width="20%" alt="" />
          </Navbar.Brand>
          <NavbarToggle className="border-0">
            <button
              className="navbar-toggler text-light border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </NavbarToggle>
          <Navbar.Collapse id="basic-navbar-nav" className="border-0">
            <Nav className="ms-auto">
              <Nav.Link className="fs-3 text-warning">
                <IconContext.Provider value={{className:"zoom"}}>
                  <FiUser style={iconStyles} />
                </IconContext.Provider>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
