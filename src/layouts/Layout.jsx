import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "./Navbar";
import BrowseBtn from "../views/Home/BrowseBtn";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <BrowseBtn />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
