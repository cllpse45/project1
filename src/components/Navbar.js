import React from "react";
import reactLogo from "../images/react-icon-small.png"
import "./Navbar.css"

//1.way to default export
export default function Navbar() {
  return (
    <nav>
      <img
        src={reactLogo}
        className="nav--icon"
      ></img>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course Porject 1</h4>
    </nav>
  );
}


// 2.way --> export default Navbar;