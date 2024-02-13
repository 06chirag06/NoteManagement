// import { Link } from "react-router-dom";
import React, {useState} from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../Style/NotesHomeNavbar.css";
import logo from "../images/navLogo.jpg";

export default function NotesHomeNavbar() {
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const iconStyles1 = {
    color: "#EEE5E9",
    fontSize: "1.75rem",
  };

  const changeDarkMode = ()=>{}

  return (
    <>
      <Navbar bg="dark" expand="lg" className="border-bottom border-1">
        <div className="container-fluid">
          <FaBars style={iconStyles1} className="ms-5 ps-2 me-5" />
          <Navbar.Brand>
            <img src={logo} height="30%" width="20%" alt="" className="ms-0" />
          </Navbar.Brand>
          <Nav.Item className="fs-3 border border-1" onClick={changeDarkMode} role="button">
            {isDark ? <FaMoon className="text-light"/> : <FaSun className="text-dark"/>}
          </Nav.Item>
          <NavDropdown
            title={<FaUserCircle />}
            className="fs-3 text-warning me-5"
          >
            <NavDropdown.Item href="/user/profile" className="text-light">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item className="text-light" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </>
  );
}
