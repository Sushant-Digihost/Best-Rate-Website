import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import domainVideo from "./../../assets/images/domain.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

const HeroSection = () => {
  const domainSectionRef = useRef(null); // Create a ref for the .domain-name section



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    let AppLink = document.querySelector(".AppLink")
    let AppSvg = document.querySelector(".AppLink .AppSvg")
    let buttonLabel = document.querySelector(".AppLink .PageDownloadButton-buttonLabel")

    // Total scroll length calculation based on faster animations
    const totalDuration = 5 + 3 * 3 + 3 * 3 + 3 * 3 + 5 * 2; // Adjust for faster durations

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: domainSectionRef.current,
        start: "top top",
        end: `+=${totalDuration * 200}`, // Adjust the scroll length
        pin: true,
        pinSpacing: true,
        scrub: true,
        // markers: true,
      },
    });

    timeline
      .to(
        ".hero .main-text",
        {
          scale: 0.6,
          opacity: 0,
          duration: 2, // Faster animation
        },
        "a"
      )
      .to(
        ".v1",
        {
          y: -450,
          duration: 3, // Faster animation
          stagger: 0.3, // Reduced stagger
        },
        "a"
      )

      .to(
        ".bg-texts h2",
        {
          visibility: "hidden",
        },
        "a"
      )

      .to(
        ".domain-name .c1",
        {
          y: -450,
          duration: 3,
          stagger: 0.3,
          opacity: 1,
          onComplete: () => {
            gsap.to(".domain-name .c1", {
              height: "52px",
              duration: 1,
            });
            gsap.to(".domain-name .c1 h5", {
              display: "none",
              duration: 0.2,
            });
            gsap.to(".domain-name .c1", {
              duration: 1,
            });
            gsap.to(".domain-name .c1 .in-step", {
              duration: 1,
            });
          },
          onReverseComplete: () => {
            gsap.to(".domain-name .c1", {
              height: "140px",
              duration: 1,
            });
            gsap.to(".domain-name .c1 h5", {
              display: "block",
              duration: 0.2,
            });
            gsap.to(".domain-name .c1", {
              duration: 1,
            });
            gsap.to(".domain-name .c1 .in-step", {
              duration: 1,
            });
          },
        },
        "b"
      )

      .to(
        ".domain-name .tc-1",
        {
          y: -400,
          duration: 3,
          opacity: 1,
          onComplete: () => {
            gsap.to(".domain-name .tc-1", {
              opacity: 0,

              duration: 1,
            });
          },
        },
        "b"
      )

      .to(
        ".domain-name .c2",
        {
          y: -450,
          duration: 3,
          stagger: 0.3,
          opacity: 1,
          delay: 2,

          onComplete: () => {
            gsap.to(".domain-name .c2", {
              height: "52px",
              duration: 1.8,
            });
            gsap.to(".domain-name .c2 h5", {
              display: "none",
              duration: 0.2,
            });
            gsap.to(".domain-name .c2", {
              duration: 1,
            });
            gsap.to(".domain-name .c2 .in-step", {
              duration: 1,
            });
          },
          onReverseComplete: () => {
            gsap.to(".domain-name .c2", {
              height: "140px",
              duration: 1,
            });
            gsap.to(".domain-name .c2 h5", {
              display: "block",
              duration: 0.2,
            });
            gsap.to(".domain-name .c2", {
              duration: 1,
            });
            gsap.to(".domain-name .c2 .in-step", {
              duration: 1,
            });
          },
        },
        "c"
      )

      .to(
        ".domain-name .tc-2",
        {
          y: -600,
          duration: 3,
          opacity: 1,
          delay: 3,
          onComplete: () => {
            gsap.to(".domain-name .tc-2", {
              opacity: 0,
              duration: 1,
            });
          },
        },
        "c"
      )

      // .to(".domain-name .c3", {
      //     y: -450,
      //     duration: 3,
      //     stagger: 0.3,
      //     opacity: 1,
      //     delay: 2,
      // },'d')

      .to(
        ".domain-name .c3",
        {
          y: -450,
          duration: 3,
          stagger: 0.3,
          opacity: 1,
          delay: 2,

          onComplete: () => {
            gsap.to(".domain-name .c3", {
              height: "140px",
              duration: 1,
            });
            gsap.to(".domain-name .c3 h5", {
              // display: "none",
              duration: 0.2,
            });
            gsap.to(".domain-name .c3", {
              duration: 1,
            });
            gsap.to(".domain-name .c3 .in-step", {
              duration: 1,
            });
          },
          onReverseComplete: () => {
            gsap.to(".domain-name .c3", {
              height: "140px",
              duration: 1,
            });
            gsap.to(".domain-name .c3 h5", {
              display: "block",
              duration: 0.2,
            });
            gsap.to(".domain-name .c3", {
              duration: 1,
            });
            gsap.to(".domain-name .c3 .in-step", {
              duration: 1,
            });
          },
        },
        "d"
      )

      .to(
        ".domain-name .tc-3",
        {
          y: -800,
          duration: 3,
          opacity: 1,
          delay: 3,
          onComplete: () => {
            gsap.to(".domain-name .tc-3", {
              // opacity: 0,
              duration: 1,
            });
          },
        },
        "d"
      )

      // .to(".numbers", {
      //     y: -500,
      //     duration: 3,
      //     stagger: 0.3,
      // },'a')

      .to(
        ".v2",
        {
          y: -450,
          duration: 5,
          delay: 2,
          display: "block",
        },
        "c"
      )

      .to(
        ".v3",
        {
          y: -450,
          duration: 5,
          delay: 2,
          display: "block",
        },
        "d"
      )

      .to(
        AppLink,
        {
          duration: 2,
          top: "85%",
          width: "15rem",

          onComplete: () => {
            // Activate hover effects after this animation completes
            AppLink.addEventListener("mouseenter", handleMouseEnter);
            AppLink.addEventListener("mouseleave", handleMouseLeave);
          },
        },
        "a"
      )

      .to(
        AppSvg,
        {
          x: 50,
        },
        "a"
      )

      .to(
        buttonLabel,
        {
          visibility: "hidden",
          opacity: 0,
          x: 50,
        },
        "a"
      );

          // Add hover effects
     const handleMouseEnter = () => {
      gsap.to(AppLink, {
        width: "auto",
      });
      gsap.to(AppSvg, {
        x: 0,
      });
      gsap.to(buttonLabel, {
        visibility: "visible" ,
        opacity: 1,
        x: 0,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(AppLink, {
        width: "15rem", // Reset to original width
      });
      gsap.to(AppSvg, {
        x: 50,// Reset to original width
      });
      gsap.to(buttonLabel, {
        visibility: "hidden",
        opacity: 0,
        x: -50,
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      AppLink.removeEventListener("mouseenter", handleMouseEnter);
      AppLink.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 3); // Loop through 3 steps
    }, 2000); // Adjust the duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section_banner" ref={domainSectionRef}>
      <div className="hero">
        {/* <div className="btn_wrapper">
            <a href="#" className="button">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <span>Know More</span>
            </a>
        </div> */}

        <a href="#!" className="AppLink PageDownloadButton-button ButtonHover">
          <div className="PageDownloadButton-bg">
            <div className="PageDownloadButton-inner">
              <span className="AppSvg PageDownloadButton-buttonIcon">
                <svg
                  viewBox="0 0 56 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M14.4718 27.9453C21.9121 27.9453 27.9437 21.9134 27.9437 14.4726C27.9437 7.0319 21.9121 1 14.4718 1C7.03155 1 1 7.0319 1 14.4726C1 21.9134 7.03155 27.9453 14.4718 27.9453Z"
                      fill="#FBE74E"
                      stroke="#001405"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M27.4719 27.9453C34.9121 27.9453 40.9437 21.9134 40.9437 14.4726C40.9437 7.0319 34.9121 1 27.4719 1C20.0316 1 14 7.0319 14 14.4726C14 21.9134 20.0316 27.9453 27.4719 27.9453Z"
                      fill="#FFCADC"
                      stroke="#001405"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M41.4719 27.9453C48.9121 27.9453 54.9437 21.9134 54.9437 14.4726C54.9437 7.0319 48.9121 1 41.4719 1C34.0316 1 28 7.0319 28 14.4726C28 21.9134 34.0316 27.9453 41.4719 27.9453Z"
                      fill="#9DC4F5"
                      stroke="#001405"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    ></path>
                  </g>
                </svg>
              </span>
              <div
                data-v-1d492dfd
                className="PageDownloadButton-buttonLabel --desktop-text-20 --mobile-text-16 --fw-600"
              >
                <span>Know More</span>
              </div>
            </div>
          </div>
        </a>

        <Container>
          <div className="texts">
            <div className="bg-texts">
              <h2
                className={
                  activeStep === 0
                    ? "background-innovation"
                    : activeStep === 1
                      ? "color-eef3f8"
                      : "color-default"
                }
              >
                Insight
              </h2>
              <h2
                className={
                  activeStep === 1
                    ? "background-insight"
                    : activeStep === 2
                      ? "color-eef3f8"
                      : "color-default"
                }
              >
                Innovation
              </h2>
              <h2
                className={
                  activeStep === 2
                    ? "background-innovation"
                    : activeStep === 0
                      ? "color-eef3f8"
                      : "color-default"
                }
              >
                Vision
              </h2>
              {/* <h2 className="visible">Insight</h2>
                            <h2 className="visible">Innovation</h2>
                            <h2 className="visible">Vision</h2> */}
            </div>
            <div className="main-text">
              <h2>Setting up your business as easy as</h2>
            </div>
          </div>
          <div className="domain-name">
            <Row>
              <Col sm={4}>
                <div className="step-cards">
                  <div className="card active c1">
                    <span className="step">Step 1</span>
                    <div className="inner-text">
                      <span className="in-step">Step 1:</span>
                      <h5>Earn coins and website</h5>
                    </div>
                  </div>
                  <div className="card active c2">
                    <span className="step">Step 2</span>
                    <div className="inner-text">
                      <span className="in-step">Step 2:</span>
                      <h5>Earn coins and website</h5>
                    </div>
                  </div>
                  <div className="card active c3">
                    <span className="step">Step 3</span>
                    <div className="inner-text">
                      <span className="in-step">Step 3:</span>
                      <h5>Earn coins and website</h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={4} className="v_continer">
                <div className="domain-video v1">
                  <video src={domainVideo} muted loop autoPlay></video>
                </div>
                <div className="domain-video v2">
                  <video src={domainVideo} muted loop autoPlay></video>
                </div>
                <div className="domain-video v3">
                  <video src={domainVideo} muted loop autoPlay></video>
                </div>
              </Col>
              <Col sm={4}>
                <div className="text_card_wrapper">
                  <div className="text-card tc-1">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </p>
                  </div>
                  <div className="text-card tc-2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </p>
                  </div>
                  <div className="text-card tc-3">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard.
                    </p>
                  </div>
                </div>
              </Col>

              {/* <Col sm={12}>
                            <div className="numbers">
                                <span className="num">1</span>
                                <span className="num">2</span>
                                <span className="num">3</span>
                            </div>
                        </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
