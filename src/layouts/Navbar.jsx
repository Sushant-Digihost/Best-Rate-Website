import React from "react";
import { Container } from "react-bootstrap";
import logo from "./../assets/images/logo.png";
import { Link } from "react-router-dom";

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
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Features</Link>
              </li>
              <li>
                <Link to="#">Resources</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
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
