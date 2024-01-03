import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
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
    };

    try {
      const response = await axios.post("http://192.168.182.33:8000/login", reqBody);
      if(response.data.token){
        localStorage.setItem("token", response.data.token);
        navigate("/userID/home", {replace:true});
      }
      else{
        const err = {Error:"Invalid Credentials"};
        throw err;
      }
    } catch (err) {
      console.log(err);
      alert("Invalid Credentials");
      setUsername("");
      setPassword("");
    }
  };

  const handleSignUp = (e) => {
    navigate("/signup", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="offset-5 fw-bold fs-2">Login</div>
      <div>
        <label htmlFor="username" className="form-label mt-2">
          Username
        </label>
        <input
          className="form-control"
          type="text"
          id="username"
          name="username"
          onChange={handleInput}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label mt-2">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
          value={password}
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary mt-2 offset-5 mb-2">
          Login
        </button>
      </div>
      <div>
        <span onClick={handleSignUp}>
          New User?{" "}
          <a hrefLang="/signup" className="text-decoration-underline">
            SignUp
          </a>
        </span>
      </div>
    </form>
  );
}
