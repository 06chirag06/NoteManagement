/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserPass from "./UserPass";
import axios from "axios";
import { FaLock, FaUser, FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { updateUsername } from "../App/reducers/usernameSlice";
// import { GoogleLogin } from "@react-oauth/google";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernamePlaceholder = "Enter Username";
  const passwordPlaceholder = "Enter Password";

  const handleInput = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("http://[::1]:8000/login", reqBody);
      if (response.data.token) {
        dispatch(updateUsername(reqBody.username));
        // if(data.)
        localStorage.setItem("token", response.data.token);
        navigate("/userID/home", { replace: true });
      } else {
        const err = { Error: "Invalid Credentials" };
        throw err;
      }
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  const handleSignUp = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row p-0 m-0">
        <div className="col-lg-4 col-0 p-0 m-0 login-side-image"></div>
        <div className="col-12 col-lg-8 p-3">
          <div className="row">
            <div className="col-12 fw-bold fs-1 text-center">Welcome Back</div>
            {/* <UserPass onChange={handleUserPassChange} />p */}
          </div>
          <div className="row">
            <label
              htmlFor="username"
              className="form-label m-0 p-0 ms-3 mt-2 fs-5"
            >
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
                onChange={handleInput}
                value={username}
                placeholder={usernamePlaceholder}
              />
            </div>
          </div>
          <div className="row">
            <label
              htmlFor="password"
              className="form-label m-0 p-0 ms-3 mt-2 fs-5"
            >
              Password<span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaLock />
              </div>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={handleInput}
                value={password}
                placeholder={passwordPlaceholder}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 fs-6 mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="col-sm-6 fs-6 mt-3">
              <a href="#" className="float-end text-primary">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary px-4 text-center mt-4 offset-5 mb-2"
              >
                Login
              </button>
            </div>
          </div>
          {/* <div className="row mt-4">
            <div className="offset-1 col-4">
              <hr className="border border-1 border-dark opacity-100" />
            </div>
            <div className="col-2 fw-bold fs-5 text-center">OR</div>
            <div className="col-4">
              <hr className="border border-1 border-dark opacity-100" />
            </div>
          </div> */}
          <div className="row mt-4 mb-4">
            <div className="col text-center">
              {/* <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  console.log(credentialResponse);
                  const data = await axios.get("http://192.168.236.70:8000/auth/google", credentialResponse.tokenId);
                  console.log(data);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              /> */}
            </div>
            {/* <div className="col-2 text-center">
              <FaFacebook size={30} role="button" />
            </div> */}
            <div className="col text-center">
              <FaGithub size={30} role="button" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 fs-6">
              <span onClick={handleSignUp} onKeyDown={handleKeyDown}>
                Yet to become a member?&nbsp;
                {/* <a href="/signup" className="text-decoration-underline">
            SignUp
          </a> */}
                <Link to="/signup">SignUp</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
