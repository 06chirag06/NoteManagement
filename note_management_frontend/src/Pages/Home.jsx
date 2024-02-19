import React from "react";
import HomeNavbar from "../Components/HomeNavbar";
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";
import backgroundNote from "../images/backgoundHomeNote.jpg";
import "../Style/App.css";

export default function Home() {
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
        </section>
        <footer><Footer /></footer>
      </div>
    </>
  );
}
