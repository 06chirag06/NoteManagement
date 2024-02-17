// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logout from "../App/reducers/usernameSlice";
import "../Style/NotesHomeNavbar.css";
import logo from "../images/navLogo.jpg";

export default function NotesHomeNavbar(props) {
  const navigate = useNavigate();

  const username = useSelector((state) => state.username.value);

  // const [toggle, setToggle] = useState(true);

  const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const iconStyles1 = {
    color: "#EEE5E9",
    fontSize: "1.75rem",
  };

  const changeDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="border-bottom border-1">
        <div className="container-fluid">
          <FaBars
            style={iconStyles1}
            className="ms-5 ps-2 me-5"
            role="button"
            onClick={props.handleToggle}
          />
          <Navbar.Brand>
            <img src={logo} height="30%" width="20%" alt="" className="ms-0" />
          </Navbar.Brand>
          <Nav.Item
            className="fs-3 border border-1"
            onClick={changeDarkMode}
            role="button"
          >
            {isDark ? (
              <IoIosMoon className="text-light" />
            ) : (
              <IoIosSunny className="text-light" />
            )}
          </Nav.Item>
          <NavDropdown
            title={<FaUserCircle />}
            className="fs-3 text-warning me-5"
          >
            {console.log(username)}
            <NavDropdown.Item className="text-light">
              Hi, {username}
            </NavDropdown.Item>
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
