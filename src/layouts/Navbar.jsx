import React from "react";
import { Container } from "react-bootstrap";
import logo from "./../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import cart from "./../assets/images/icons/cart.svg";
import user from "./../assets/images/user.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Define routes where the class should be added
  const routesWithClass = ["/add-to-cart"];

  // Check if the current route matches
  const isActive = routesWithClass.includes(location.pathname);
  return (
    <nav className={`navbar ${isActive ? "second-navbar" : ""}`}>
      <Container>
        <div className="navbar-content">
          <div className="logo ">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
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
          <div className="userlog">
            <ul>
              <li>
                <a href="#!" className="cart">
                  <div className="cardbg">
                    <img src={cart} alt="" />{" "}
                    <div className="span">
                      <span>2</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle id="dropdown-button-dark-example1">
                    <div className="userprofile">
                      <img src={user} alt="" />
                      <span>Sofia Martinez</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.02719 7.85553C6.27075 7.61095 6.66649 7.61013 6.91107 7.8537L10.6435 11.5707L14.3605 7.83826C14.6041 7.59368 14.9998 7.59286 15.2444 7.83643C15.4889 8.08 15.4898 8.47573 15.2462 8.72029L11.0882 12.8956C10.9712 13.0131 10.8124 13.0792 10.6466 13.0796C10.4809 13.0799 10.3217 13.0144 10.2043 12.8974L6.02902 8.73938C5.78444 8.49584 5.78362 8.10011 6.02719 7.85553Z"
                          fill="#303030"
                        />
                      </svg>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#!">Profile</Dropdown.Item>
                    <Dropdown.Item href="#!">Account</Dropdown.Item>
                    <Dropdown.Item href="#!">Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#!">
                      Logout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M6.03777 1.48193C6.94943 1.48192 7.68437 1.48191 8.2623 1.55961C8.86237 1.64029 9.36765 1.81289 9.76892 2.21417C10.1189 2.56412 10.2957 2.99417 10.3885 3.4995C10.4787 3.99054 10.496 4.59147 10.5 5.31249C10.5015 5.58862 10.2789 5.81372 10.0028 5.81526C9.72664 5.8168 9.50154 5.59419 9.50001 5.31805C9.49595 4.58905 9.47701 4.07233 9.40498 3.68017C9.33557 3.30229 9.2241 3.08357 9.06183 2.92127C8.8773 2.73677 8.61823 2.61647 8.1291 2.5507C7.6255 2.48299 6.9581 2.48193 6.00116 2.48193H5.3345C4.37756 2.48193 3.71017 2.48299 3.20656 2.5507C2.71736 2.61647 2.45837 2.73677 2.27383 2.92127C2.0893 3.10578 1.96903 3.36483 1.90323 3.85401C1.83556 4.35758 1.8345 5.02499 1.8345 5.98193V11.3153C1.8345 12.2722 1.83556 12.9396 1.90323 13.4432C1.96903 13.9324 2.0893 14.1914 2.27383 14.3759C2.45837 14.5605 2.71736 14.6807 3.20656 14.7465C3.71017 14.8142 4.37756 14.8153 5.3345 14.8153H6.00116C6.9581 14.8153 7.6255 14.8142 8.1291 14.7465C8.61823 14.6807 8.8773 14.5605 9.06183 14.3759C9.2241 14.2136 9.33557 13.9949 9.40498 13.6171C9.47701 13.2249 9.49595 12.7081 9.50001 11.9791C9.50154 11.703 9.72664 11.4804 10.0028 11.4819C10.2789 11.4835 10.5015 11.7086 10.5 11.9847C10.496 12.7057 10.4787 13.3067 10.3885 13.7977C10.2957 14.303 10.1189 14.7331 9.76892 15.0831C9.36765 15.4843 8.86237 15.6569 8.2623 15.7376C7.68437 15.8153 6.94943 15.8153 6.03777 15.8153H5.2979C4.38617 15.8153 3.6513 15.8153 3.0733 15.7376C2.47323 15.6569 1.96803 15.4843 1.5667 15.0831C1.16543 14.6817 0.992832 14.1765 0.912166 13.5765C0.834433 12.9985 0.834498 12.2636 0.834498 11.3519V5.94535C0.834498 5.03363 0.834433 4.29875 0.912166 3.72077C0.992832 3.12069 1.16543 2.61545 1.5667 2.21417C1.96803 1.81289 2.47323 1.64029 3.0733 1.55961C3.6513 1.48191 4.38617 1.48192 5.2979 1.48193H6.03777Z"
                          fill="black"
                        />
                        <path
                          d="M6.0013 8.14845C5.72517 8.14845 5.5013 8.37231 5.5013 8.64845C5.5013 8.92458 5.72517 9.14845 6.0013 9.14845H13.3163L12.0092 10.2688C11.7996 10.4485 11.7753 10.7642 11.955 10.9738C12.1347 11.1835 12.4504 11.2078 12.66 11.028L14.9934 9.02805C15.1042 8.93311 15.168 8.79438 15.168 8.64845C15.168 8.50251 15.1042 8.36378 14.9934 8.26885L12.66 6.26882C12.4504 6.08911 12.1347 6.11339 11.955 6.32305C11.7753 6.53271 11.7996 6.84837 12.0092 7.02807L13.3163 8.14845H6.0013Z"
                          fill="black"
                        />
                      </svg>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
