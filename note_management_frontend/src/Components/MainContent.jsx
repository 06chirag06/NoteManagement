import React, { useState, useEffect } from "react";
import backgroundNote from "../images/backgoundHomeNote.jpg";
import Lottie from "lottie-react";
import loginAnimation from "../images/login-left-animation.json";
import { FaArrowCircleUp } from "react-icons/fa";
import addButton from "../images/addButton.json";
// import chiragProfile from "../images/profile pic.jpeg";

export default function MainContent() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    // Check if user scrolled past a threshold (e.g., 50px)
    if (window.scrollY > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const handleClick = () => {
    // Smoothly scroll to top with animation
    // scrollRef.current.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <div
        className="mt-0 pt-0 container rounded bg-light shadow"
        // style={{
        //   backgroundImage: `url(${backgroundNote})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="row mb-5 pb-5 mt-5 pt-5 ps-2">
          <div className="col-md-4 col-12 d-flex flex-column justify-content-center pt-4 pt-md-0 fs-1 fw-semibold text-dark">
            The perfect place for writing your notes
            <span className="fs-6 mt-2">
              InLine is a web-application for note-taking. It comes packed with
              everything you need for your notes. The app works on all the
              devices.
            </span>
          </div>
          <div className="col-md-8 col-12 d-flex justify-content-center">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>
        </div>
      </div>
      <div className="container bg-very-light-blue mt-4 mb-4 shadow rounded">
        <div className="row">
          <div className="offset-4 col-4 fs-1 fw-semibold text-center">
            FEATURES
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch">
            View Notes
          </div>
        </div>
      </div>
      <div className="container bg-very-light-blue mt-4 mb-4 shadow rounded">
        <div className="row">
          <div className="offset-4 col-4 fs-1 fw-semibold text-center">
            TEAM
          </div>
        </div>
        {/* <div className="row">
          <div className="offset-md-1 col-md-5 col-12 bg-light p-1">
              <div className="card" style={{height:"10em"}}>
                <img src={chiragProfile} alt className="card-img-top mh-100" />
              </div>
              <div className="col-12 text-center fs-4">
                <h4>Chirag Chauhan</h4>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 bg-light p-1">
            <div className="pic"></div>
            <div className="member-info">
              <h4>Chetan Brahmanwade</h4>
            </div>
          </div>
          <div className="offset-md-1 col-md-5 col-12 bg-light p-1">
            <div className="pic"></div>
            <div className="member-info">
              <h4>Adarsh Tiwari</h4>
            </div>
          </div>
        </div> */}
      </div>
      {visible && (
        <FaArrowCircleUp
          onClick={handleClick}
          className="text-warning scroll-to-top z-3 float-end"
          size={20}
          role="button"
        />
      )}
    </>
  );
}
