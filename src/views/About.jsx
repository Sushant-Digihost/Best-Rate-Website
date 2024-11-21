import React, { useEffect } from "react";
import { Headings } from "./about/Headings";
import { Content } from "./about/Content";
import { Values } from "./about/Values";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import CtaHome from "./Home/CtaHome";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 0);
  }, []);

  return (
    <div>
      <Headings />
      <Content />
      <Values />
      <CtaHome />
    </div>
  );
};
