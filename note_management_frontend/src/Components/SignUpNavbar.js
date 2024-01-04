import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo2.jpg"

export default function SignUpNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand ms-4" to="/">
          <img src={logo} height="30%" width="20%" />
        </Link>
        <button
          className="navbar-toggler border border-3 text-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4 fs-4">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
