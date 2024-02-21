import React from "react";
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light p-5 border-top">
      <div className="row">
        <div className="col-12 col-lg-4 d-flex align-items-center fs-5">
          InLine &copy; 2024
        </div>
        <div className="offset-lg-4 col-12 col-lg-4 d-flex justify-contents-end">
          <ul className="col-12 justify-content-end list-unstyled d-flex text-light">
            <li className="ms-3">
              <a className="text-light" href="#">
                <FaSquareXTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <FaSquareInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <FaSquareFacebook />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <FaSquareWhatsapp />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <FaSquareGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
