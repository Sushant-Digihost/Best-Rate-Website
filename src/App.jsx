import { useState } from "react"; // Add useRef
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Footer from "./layouts/Footer";
import { Cta } from "./layouts/Cta";
import { Oneclick } from "./layouts/Cta";
import VouchForUs from "./layouts/VouchForUs";
import { Home_Blog } from "./components/HomeComponents";
import { Pricing_Plan } from "./components/HomeComponents";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <VouchForUs />
      <Oneclick />
      <Home_Blog />
      <Pricing_Plan />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
