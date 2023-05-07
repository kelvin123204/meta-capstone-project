import React from "react";
import './Nav.css'

const links = [
  { name: "home" },
  { name: "about" },
  { name: "menu" },
  { name: "reservation" },
  { name: "orderOnline" },
  { name: "login" },
];

const Nav = () => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <a>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
