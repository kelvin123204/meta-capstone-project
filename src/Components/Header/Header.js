import React from "react";
import logo from "../../asset/Logo.svg";
import Nav from './Nav';

const Header = () => {
  return (
    <React.Fragment>
      <img src={logo} alt="little lemon logo" />
      <nav>
        <Nav />
      </nav>
    </React.Fragment>
  );
};

export default Header;
