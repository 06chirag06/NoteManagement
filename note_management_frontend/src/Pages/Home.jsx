import React, { useState, useRef, useEffect } from "react";
import HomeNavbar from "../Components/HomeNavbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";
import backgroundNote from "../images/backgoundHomeNote.jpg";
import "../Style/App.css";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Home() {
  // const [visible, setVisible] = useState(false);
  // const scrollRef = useRef(null);

  // const handleScroll = () => {
  //   // Check if user scrolled past a threshold (e.g., 50px)
  //   if (window.scrollY > 50) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // };
  // const handleClick = () => {
  //   // Smoothly scroll to top with animation
  //   // scrollRef.current.scrollIntoView({ behavior: "smooth" });
  //   window.scrollTo({ top: "0", behavior: "smooth" });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div
      // style={{
      //   backgroundImage: `url(${backgroundNote})`,
      //   backgroundSize: "cover",
      //   // backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      >
        <header>
          <HomeNavbar />
        </header>
        <section>
          <MainContent />
          {/* {visible && (
            // <button
            //   ref={scrollRef}
            //   className="scroll-to-top text-warning"
            //   style={{
            //     display: visible ? "block" : "none",
            //     background: "none",
            //     float: "right",
            //     zIndex:"3"
            //   }} // Dynamic visibility
            //   onClick={handleClick}
            // >
            <FaArrowCircleUp
              onClick={handleClick}
              className="text-warning scroll-to-top z-3 float-end"
              size={20}
              role="button"
            />
            // </button>
          )} */}
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
