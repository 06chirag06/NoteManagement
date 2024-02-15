/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaLock, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
// import { Form } from "react-router-dom";

// Try to use Form from react-router-dom

export default function SignupForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState({
  //   userInfo: {},
  // });
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const handleInput = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        console.log(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        console.log(e.target.value);
        break;
      case "rePassword":
        setRePassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "dob":
        setDob(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      username: username,
      password: password,
      email: email,
      dob: dob,
    };

    try {
      const response = await axios.post(
        "http://[::1]:8000/signUp/Add",
        reqBody
      );
      if (response.statusText) {
        // localStorage.setItem("token", response.data.token);
        navigate("/login", { replace: true });
      } else {
        const err = { Error: "Invalid Credentials" };
        throw err;
      }
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert("Invalid Credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-group border border-4 border-dark rounded rounded-4 p-3 bg-light-blue mt-4"
    >
      <div className="text-center fw-bold fs-2 mt-2">Become A Member</div>
      <div className="row">
        <label htmlFor="u1sername" className="form-label mt-2 fs-5">
          Username<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <div className="input-group-text">
            <FaUser />
          </div>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInput}
            placeholder="Enter Username"
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="password" className="form-label mt-2 fs-5">
          Password<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <div className="input-group-text">
            <FaLock />
          </div>
          <input
            className="form-control"
            placeholder="Enter Password"
            // type={showPassword ? "text" : "password"}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
        </div>
      </div>
      {/* <UserPass onChange={handleUserPassChange} /> */}
      <div className="row">
        <label htmlFor="rePassword" className="form-label mt-2 fs-5">
          Re-Type Password<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <div className="input-group-text">
            <FaLock />
          </div>
          <input
            className="form-control"
            placeholder="Re-Type Password"
            type="password"
            id="rePassword"
            name="rePassword"
            value={rePassword}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="email" className="form-label mt-2 fs-5">
          Email<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <div className="input-group-text">
            <MdEmail />
          </div>
          <input
            className="form-control"
            placeholder="Enter Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="dob" className="form-label mt-2 fs-5">
          Date of Birth<span className="text-danger">*</span>
        </label>
        <div className="input-group">
          <div className="input-group-text">
            <BsCalendar2DateFill />
          </div>
          <input
            className="form-control"
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={handleInput}
          />
        </div>
      </div>
      <button type="submit" className="offset-5 btn btn-primary mt-2 fs-5">
        SignUp
      </button>
    </form>
  );
}
