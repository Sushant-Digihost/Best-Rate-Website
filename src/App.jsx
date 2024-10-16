import { useState, useRef } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Footer from "./layouts/Footer";
import Lenis from 'lenis'
import { ReactLenis, useLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <Navbar />
      <Home />
      <Footer />
    </ReactLenis>
    </>
  );
}

export default App;
