import React from 'react';
import SignupForm from '../Components/SignupForm';
import SignUpNavbar from '../Components/SignUpNavbar';

export default function Signup() {
  return (
    <>
      <SignUpNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="offset-4 col-5">
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
}
