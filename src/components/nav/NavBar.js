import React from "react";
//React Router
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            {/* URL will look like in react router */}
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li>Locations</li>
          <li>Employees</li>
          <li>Owners</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;