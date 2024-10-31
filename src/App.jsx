import { useState, useRef } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Footer from "./layouts/Footer";
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Theme } from "./views/Theme";
import { About } from "./views/About";
import { ChooseDomain } from "./views/Domain/ChooseDomain";
import { SearchDomain } from "./views/Domain/SearchDomain";


function App() {
  const lenis = new Lenis();
  const scrollRef = useRef(null);

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

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
    snap: 1 / 10 // Snap each section into place
  }
});

  return (
    <>
    <ReactLenis root ref={scrollRef}>
     
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Theme />} />
          <Route path="/about" element={<About />} />
          <Route path="/choose-domain" element={<ChooseDomain />} />
          <Route path="/search-domain" element={<SearchDomain/>} />
        </Routes>
        <Footer />
      </Router>

    </ReactLenis>
    </>
  );
}

export default App;
