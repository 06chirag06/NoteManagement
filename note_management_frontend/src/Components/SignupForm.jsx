/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserPass from './UserPass';
// import { Form } from "react-router-dom";

// Try to use Form from react-router-dom

export default function SignupForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [formData, setFormData] = useState({
  //   userInfo: {},
  // });
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

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
      case 'rePassword':
        setRePassword(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'dob':
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
        'http://[::1]:8000/signUp/Add',
        reqBody,
      );
      if (response.statusText) {
        // localStorage.setItem("token", response.data.token);
        navigate('/login', { replace: true });
      } else {
        const err = { Error: 'Invalid Credentials' };
        throw err;
      }
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Invalid Credentials');
    }

    // navigate("/login", { replace: true });
  };

  // const handleUserPassChange = (userInfo) => {
  //   setFormData({ ...formData, userInfo });
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-group border border-4 border-dark rounded rounded-4 p-3 bg-light-blue mt-4"
    >
      <div className="offset-4 fw-bold fs-2 mt-2">SignUp</div>
      <div>
        <label htmlFor="username" className="form-label mt-2">
          Username
        </label>
        <input
          className="form-control"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInput}
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
          value={password}
          onChange={handleInput}
        />
      </div>
      {/* <UserPass onChange={handleUserPassChange} /> */}
      <div>
        <label htmlFor="rePassword" className="form-label mt-2">
          Re-Type Password
        </label>
        <input
          className="form-control"
          type="password"
          id="rePassword"
          name="rePassword"
          value={rePassword}
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label mt-2">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="dob" className="form-label mt-2">
          Date of Birth
        </label>
        <input
          className="form-control"
          type="date"
          id="dob"
          name="dob"
          value={dob}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="offset-5 btn btn-primary mt-2">
        SignUp
      </button>
    </form>
  );
}
