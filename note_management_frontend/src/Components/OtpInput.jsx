import React, { useState } from "react";
import HomeNavbar from "./HomeNavbar";
import OtpComponent from "./OtpComponent";
import { useLocation, useNavigate } from "react-router-dom";

const OtpInput = () => {
  const { state } = useLocation();
  const [OTPInput, setOTPInput] = useState([0, 0, 0, 0]);
  const navigate = useNavigate();

  const handleComplete = (otp) => {
    console.log("Entered OTP: ", otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.otp === null) {
      alert(`No OTP generated!`);
      navigate("/forgotpassword", { replace: true });
    }
    if (parseInt(OTPInput.join("")) === state.otp) {
      navigate(
        "/resetpassword",
        { state: { username: state.username } },
        { replace: true }
      );
    }
    alert("The code you have entered is not correct");
    return;
  };

  return (
    <>
      <HomeNavbar />
      <div className="offset-1 offset-md-2 offset-xl-3 col-10 col-md-8 col-xl-6">
        <div className="form-group border border-4 border-dark rounded rounded-2 bg-light-blue">
          <form onSubmit={handleSubmit}>
            <div className="col-12 offset-lg-2 col-lg-8 p-3">
              <div className="row mb-3">
                {/* <OtpComponent onComplete={handleComplete} /> */}
                <input
                  maxLength="1"
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => {
                    setOTPInput([
                      e.target.value,
                      OtpInput[1],
                      OtpInput[2],
                      OtpInput[3],
                    ]);
                  }}
                />
                <input
                  maxLength="1"
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => {
                    setOTPInput([
                      OtpInput[0],
                      e.target.value,
                      OtpInput[2],
                      OtpInput[3],
                    ]);
                  }}
                />
                <input
                  maxLength="1"
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => {
                    setOTPInput([
                      OtpInput[0],
                      OtpInput[1],
                      e.target.value,
                      OtpInput[3],
                    ]);
                  }}
                />
                <input
                  maxLength="1"
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5"
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => {
                    setOTPInput([
                      OtpInput[0],
                      OtpInput[1],
                      OtpInput[2],
                      e.target.value,
                    ]);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Verify Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpInput;
