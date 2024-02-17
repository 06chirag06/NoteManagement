import React from 'react';
import HomeNavbar from '../Components/HomeNavbar';
import MainContent from "../Components/MainContent";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <HomeNavbar />
      </header>
      <section>{/* <Main Content/> */}</section>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
}
