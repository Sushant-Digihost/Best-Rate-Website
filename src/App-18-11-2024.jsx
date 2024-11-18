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

function App() {
  const lenisRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
    lenisRef.current = lenis;

    // Create the animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate the scrollRef element
    if (scrollRef.current) {
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
    }
  }, []);

  return (
    <>
      <ReactLenis root ref={scrollRef}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/themes" element={<Theme />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/choose-domain" element={<ChooseDomain />} />
            <Route path="/search-domain" element={<SearchDomain />} />
            <Route path="/add-to-cart" element={<AddToCart />} />
          </Routes>

          <CtaHome />
          <Footer />
        </Router>
      </ReactLenis>
    </>
  );
}

export default App;
