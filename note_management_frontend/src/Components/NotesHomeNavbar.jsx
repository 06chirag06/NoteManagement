// import { Link } from "react-router-dom";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaBars } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Navbar, NavbarToggle, Nav } from "react-bootstrap";
import "../Style/NotesHomeNavbar.css";
import logo from "../images/navLogo.jpg";
import { IconContext } from "react-icons";

export default function NotesHomeNavbar() {
  const iconStyles = {
    color: "yellow",
    fontSize: "2rem",
  };

  const iconStyles1 = {
    color: "#EEE5E9",
    fontSize: "1.75rem",
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="border-bottom border-1">
        <div className="container-fluid">
          <FaBars style={iconStyles1} className="ms-5 ps-2 me-5" />
          <Navbar.Brand href="/">
            <img src={logo} height="30%" width="20%" alt="" className="ms-5"/>
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
                <IconContext.Provider value={{ className: "zoom" }}>
                  <FaUserCircle style={iconStyles} />
                </IconContext.Provider>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
