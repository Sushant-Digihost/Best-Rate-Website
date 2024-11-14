import React from "react";
import { Container } from "react-bootstrap";
import logo from "./../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar-content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navlinks">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/resources">Resources</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
            </ul>
            <div className="auth-links">
              <a href="#!" className="ali">
                Login
              </a>
              <a href="#!" className="button">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
