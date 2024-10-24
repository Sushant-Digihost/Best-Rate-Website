import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertyBuild = () => {
  const expertyBuild = useRef(null);

  useEffect(() => {
    const element = expertyBuild.current;

    // Create the ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 20%",
        // markers: true,
        scrub: 3,
        end: "bottom 90%",
        toggleActions: "play none none reverse",
        // markers: true,
        // pin: true,
        scroller: "body",
      },
    });

    tl.fromTo(
      ".heading1",
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "SS"
    );

    tl.fromTo(
      ".heading2",
      { y: 350, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "SS"
    );

    tl.fromTo(
      ".heading3",
      { y: 700, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "SS"
    );

    // Cleanup function to kill ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="section experty-build" ref={expertyBuild}>
      <Container fluid className="px-0">
        <div className="cta-heading heading1">
          <a href="#">
            <h4>Expertly Build Website</h4>
            <h4 className="headingss">Know More</h4>
          </a>
        </div>
        <div className="cta-heading heading2">
          <a href="#">
            <h4>Built by experts</h4>
            <h4 className="headingss">Know More</h4>
          </a>
        </div>
        <div className="cta-heading heading3">
          <a href="#">
            <h4>Delivered within 24hrs</h4>
            <h4 className="headingss">Know More</h4>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default ExpertyBuild;
