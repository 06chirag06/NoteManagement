import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarToggle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/navLogo.jpg";
import "../Style/App.css";

export default function SignUpNavbar() {
  return (
    <Navbar bg="dark" expand="lg" className="mb-4">
      <div className="container-fluid">
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
          >
            <FontAwesomeIcon icon={faBars} className="text-light zoom" />
          </button>
        </NavbarToggle>
        <Navbar.Collapse id="basic-navbar-nav" className="border-0">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                className="nav-link text-light me-3 fw-semibold fs-5"
                to="/login"
              >
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
