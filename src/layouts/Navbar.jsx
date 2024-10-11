import React from "react";
import { Container } from "react-bootstrap";
import logo from "./../assets/images/logo.png";

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
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
            <div className="auth-links">
              <a href="#" className="ali">
                Login
              </a>
              <a href="#" className="button">
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
