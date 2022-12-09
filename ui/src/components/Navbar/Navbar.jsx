import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>LOGO</li>
        <li>Home</li>
        <li>Marketplace</li>
        <li>Profile</li>
        <li>Contact</li>
        <li>About</li>
        <li>
          <Link
            to="/signin"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Signin
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <button className="login-btn">Log In</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
