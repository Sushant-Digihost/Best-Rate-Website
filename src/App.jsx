import { useState, useRef } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Footer from "./layouts/Footer";
import Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme } from "./views/Theme";
import { About } from "./views/About";
import { Pricing } from "./views/Pricing";
import { ChooseDomain } from "./views/Domain/ChooseDomain";
import { SearchDomain } from "./views/Domain/SearchDomain";
import { AddToCart } from "./views/AddToCart";
import CtaHome from "./views/Home/CtaHome";
import ScrollToTop from "./components/ScrollToTop";
import BrowseBtn from "./views/Home/BrowseBtn";

function App() {
  const lenisRef = useRef(null);


  if (!lenisRef.current) {
    lenisRef.current = new Lenis();
  }

  const lenis = lenisRef.current;

  const scrollRef = useRef(null);

  // Listen for the scroll event and log the event data
  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Initialize ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Use ScrollTrigger to animate elements on scroll
  gsap.to(scrollRef.current, {
    scrollTrigger: {
      trigger: scrollRef.current,
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
      snap: 1 / 10, // Snap each section into place
    },
  });

  return (
    <>
      <div ref={scrollRef}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <BrowseBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/themes" element={<Theme />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/choose-domain" element={<ChooseDomain />} />
            <Route path="/search-domain" element={<SearchDomain />} />
            <Route path="/add-to-cart" element={<AddToCart />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
