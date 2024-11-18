import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only necessary modules
import "swiper/css";
import "swiper/css/autoplay";
import review from "./../../assets/images/icons/star.svg";
import table from "./../../assets/images/icons/table.svg";
import callaction from "./../../assets/images/icons/call-to-action.svg";
import file from "./../../assets/images/icons/file.svg";
import list from "./../../assets/images/icons/list.svg";
import location from "./../../assets/images/icons/location.svg";
import share from "./../../assets/images/icons/share.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const PremiumElement = () => {
  const premium = useRef(null);

  useEffect(() => {
    const element = premium.current;

    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        markers: false,
        // pin: true,
        scroller: "body",
        scrub: 4,
        // markers: true,
      },
    });

    // Animate each image with a faster transition
    tl.fromTo(
      ".premium-btn",
      { y: 250, opacity: 0 },
      {
        y: -50,
        opacity: 1,
        duration: 2.5,
        delay: 0.7,
        ease: "expoScale(0.5,7,none)",
      }
    );
    // Cleanup function to kill ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const slidesData = [
    { src: review, label: "Review" },
    { src: callaction, label: "Call to action" },
    { src: file, label: "Tab" },
    { src: location, label: "Google map" },
    { src: table, label: "Pricing table" },
    { src: share, label: "Social icons" },
    { src: list, label: "List" },
  ];
  
  // Swiper configurations
  const swiperConfigs = [
    { slidesPerView: 6, rtl: false },
    { slidesPerView: 6, rtl: true },
    { slidesPerView: 6, rtl: false },
    { slidesPerView: 6, rtl: true },
  ];
  return (
    <>
      <section className="premium-element section pt-lg-0" ref={premium}>
        <Container fluid>
          <div className="elementhead">
            <h1>500+</h1>
            <div className="premiumcontent">
              <h3>Premium Elements</h3>
              <p>
                BestRate’s extensive element library empowers you to design
                websites without the necessity of deep coding skills.
              </p>
            </div>
            <div className="offertitle">
              <h4>BESTRATE OFFERS A COMPLETE TOOLKIT OF ELEMENTS</h4>
            </div>
          </div>
          <div className="element-slider">
            {swiperConfigs.map((config, index) => (
              <div className="slider slider-1" key={index}>
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={15}
                  slidesPerView={config.slidesPerView}
                  loop={true}
                  speed={4000}
                  style={config.rtl ? { direction: "rtl" } : {}}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                >
                  {slidesData.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <div className="icon-container">
                        {!config.rtl && <img src={slide.src} alt="" />}
                        <span>{slide.label}</span>
                        {config.rtl && <img src={slide.src} alt="" />}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>
          <div className="premium-btn">
            <a href="#!" className="button btn-2">
              Browse Themes Now
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};
