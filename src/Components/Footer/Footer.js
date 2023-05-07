import React from "react";
import logo from "../../asset/Logo.svg";
import Contact from "./Contact";
import Nav from "../Header/Nav";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <React.Fragment>
      <div>
        <img src={logo} alt="little lemon logo" />
        <Nav />
        <div>
          <Contact />
        </div>
        <SocialMedia />
      </div>
    </React.Fragment>
  );
};

export default Footer;
