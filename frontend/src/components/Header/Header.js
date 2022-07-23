import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    //   HEADER
    <header className="header">
      <div className="header_hello" data-header>
        <div className="container">
          Logo
          <nav className="navbar container" data-navbar>
            <ul className="navbar-list">
              <li>
                <Link to="/home" className="navbar-link">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/home" className="navbar-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/home" className="navbar-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/home" className="navbar-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/home" className="navbar-link">
                  XYZ
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/home" className="navbar-link">
            Sign Up
          </Link>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle menu"
            data-nav-toggler
          >
            <ion-icon
              name="menu-sharp"
              aria-hidden="true"
              className="menu-icon"
            ></ion-icon>
            <ion-icon
              name="close-sharp"
              aria-hidden="true"
              className="close-icon"
            ></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
