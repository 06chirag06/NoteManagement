import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/loginLogo.jpg';
import '../Style/Login.css';
import LoginForm from '../Components/LoginForm';

export default function Login() {
  return (
    <div className="col">
      <div className="row">
        <div className="offset-4 col-4">
          <div className="offset-3 mb-3 mt-3">
            <Link to="/">
              <img src={logo} height="30%" width="70%" className="" alt="" />
            </Link>
          </div>
          <div className="form-group border border-4 border-dark rounded rounded-2 p-3 bg-light-blue">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
