import React from "react";
import Button from "./Button";
import logo from "../images/brand_logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Location</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <Button backGround="red" color="white">
          Login
        </Button>
      </nav>
    </div>
  );
}
