import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import domainVideo from "./../assets/images/domain.mp4";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules"; // Import necessary Swiper modules
import "swiper/css";
import "swiper/css/bundle"; // Use bundled CSS import to ensure all necessary styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import readyToExploreVideo from "./../assets/images/ready-to-explore.webm";
import marqueeBackground from "../assets/images/marque.svg";
import FixedVideo from "./../assets/images/video/fixed-btn-animation.mp4";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const BroweThemesBtn = () => {
  return (
    <div class="BroweThemesBtn">
      <div class="btn-fixed">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={FixedVideo}
          type="video/mp4"
        ></video>
        <a href="#">Browse Themes</a>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <div className="texts">
          <div className="bg-texts">
            <h2>Insight</h2>
            <h2>Innovation</h2>
            <h2>Vision</h2>
          </div>
          <div className="main-text">
            <h2>Setting up your business as easy as</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const DomainName = () => {
  return (
    <div className="section domain-name">
      <Container>
        <Row>
          <Col sm={4}>
            <div className="step-cards">
              <div className="card">
                <span className="step">Step 1</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
              <div className="card active">
                <span className="step">Step 2</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
              <div className="card ">
                <span className="step">Step 3</span>
                <div className="inner-text">
                  <span className="in-step">Step 3:</span>
                  <h5>Earn coins and website</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={5}>
            <div className="domain-video">
              <video src={domainVideo} muted loop autoPlay></video>
            </div>
          </Col>
          <Col sm={3}>
            <div className="text-card">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </Col>
          <Col sm={12}>
            <div className="numbers">
              <span className="num">1</span>
              <span className="num">2</span>
              <span className="num">3</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const ExpertyBuild = () => {
  const expertyBuild = useRef(null);

  useEffect(() => {
    const element = expertyBuild.current;

    // Create the ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 30%", // Adjust as needed
        end: "bottom bottom", // Optional: Define an end point
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
        markers: false, // Optional: Display markers for debugging
        scroller: "body",
      },
    });

    tl.fromTo(
      ".heading1",
      { y: 0 },
      {
        y: 0,
        duration: 1, // Increase duration for smoothness
        ease: 'expoScale(0.5,7,none)',
      },
      "SS"
    );

    tl.fromTo(
      ".heading2",
      { y: 120, opacity: 0 },
      {
        y: -20,
        opacity: 1,
        duration: 1,
        ease: 'expoScale(0.5,7,none)',
      },
      "SS"
    );

    tl.fromTo(
      ".heading3",
      { y: 120, opacity: 0 },
      {
        y: -20,
        opacity: 1,
        duration: 1,
        ease: 'expoScale(0.5,7,none)',
      },
      "<0.2"
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

export const ReadyToExplore = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // To ensure this runs only on the client side
    setIsMounted(true);
  }, []);

  return (
    <div className="section ready-to-explore">
      <Container>
        <h2 className="heading">
          Ready to Explore? Our Latest <br /> Innovations
        </h2>
        <Row className="align-items-center">
          <Col sm={7}>
            {isMounted && (
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                autoplay={{
                  delay: 5000, // 3 seconds delay between slides
                  disableOnInteraction: false, // Autoplay won't stop after user interactions like clicking or swiping
                }}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                className="navslider"
              >
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="video-slide">
                    <video
                      src={readyToExploreVideo}
                      autoPlay
                      muted
                      loop
                    ></video>
                  </div>
                </SwiperSlide>
              </Swiper>
            )}
          </Col>
          <Col sm={5}>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              direction="vertical"
              autoplay={{
                delay: 5000, // 3 seconds delay between slides
                disableOnInteraction: false, // Autoplay won't stop after user interactions like clicking or swiping
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="thumbslider"
            >
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_674_2009)">
                        <path
                          d="M36.0245 12.749L25.6932 2.41771C23.855 0.579513 20.8703 0.579513 19.0321 2.41771C18.3571 3.09272 17.9125 3.93812 17.736 4.8541C15.8874 3.17792 13.0232 3.23195 11.2431 5.01407C10.4746 5.78255 10.028 6.75052 9.90137 7.7516C8.14418 6.88965 5.95499 7.18661 4.49271 8.64889C2.87679 10.267 2.68362 12.776 3.91321 14.6059C2.95779 14.7679 2.07705 15.2207 1.37712 15.9186C-0.459039 17.7548 -0.459039 20.7436 1.37712 22.5798L4.69006 25.8927V29.6169C4.69006 34.7701 8.88364 38.9637 14.0368 38.9637H24.2726C27.3239 38.9637 30.1922 37.7756 32.3524 35.6175L36.0246 31.9453C38.5877 29.3823 40.0001 25.9738 40.0001 22.3473C40.0001 18.7207 38.5877 15.3121 36.0245 12.749ZM34.5582 30.4767L30.8859 34.1489C29.1183 35.9144 26.7692 36.8865 24.2747 36.8865H14.0368C10.0281 36.8865 6.76709 33.6255 6.76709 29.6167V27.9696L9.1474 30.352C9.55243 30.757 10.2109 30.757 10.6159 30.352C10.8174 30.1484 10.9192 29.8826 10.9192 29.6167C10.9192 29.3508 10.8195 29.085 10.6159 28.8814L2.84563 21.1112C2.34918 20.6147 2.07501 19.9522 2.07501 19.2501C2.07501 18.548 2.34918 17.8855 2.84563 17.389C3.84057 16.3941 5.57489 16.3941 6.56983 17.389L9.1475 19.9667C9.55252 20.3717 10.211 20.3717 10.616 19.9667C10.8175 19.7631 10.9193 19.4973 10.9193 19.2314C10.9193 18.9655 10.8196 18.6997 10.616 18.4961L5.96132 13.8414C4.93522 12.8153 4.93522 11.1433 5.96132 10.1172C6.98742 9.09111 8.65942 9.09111 9.68552 10.1172L14.3402 14.774C14.7452 15.179 15.4037 15.179 15.8087 14.774C16.0123 14.5704 16.112 14.3046 16.112 14.0387C16.112 13.7728 16.0123 13.507 15.8087 13.3034L12.7118 10.2065C12.2154 9.71004 11.9412 9.04749 11.9412 8.34542C11.9412 7.64334 12.2154 6.98079 12.7139 6.48434C13.74 5.45824 15.412 5.45824 16.4381 6.48434L19.535 9.58123C19.94 9.98626 20.5985 9.98626 21.0035 9.58123C21.2049 9.37765 21.3068 9.11185 21.3068 8.84595C21.3068 8.58006 21.2071 8.31426 21.0035 8.11067L20.5029 7.61014C19.4768 6.58403 19.4768 4.91203 20.5029 3.88593C21.4979 2.89099 23.2322 2.89099 24.2271 3.88593L34.5584 14.2172C36.7289 16.3877 37.9253 19.277 37.9253 22.3469C37.9253 25.4168 36.7287 28.3061 34.5582 30.4767Z"
                          fill="#020B1F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_674_2009">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Effortless Drag-and-Drop Builder</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M31.8987 33.7513C31.582 33.7513 31.2654 33.6346 31.0154 33.4013C30.5154 32.918 30.5154 32.1346 30.9987 31.6346C33.8487 28.7346 35.4154 24.9013 35.4154 20.8346C35.4154 12.3346 28.4987 5.41797 19.9987 5.41797C11.4987 5.41797 4.58203 12.3346 4.58203 20.8346C4.58203 24.8846 6.13203 28.7013 8.96536 31.6013C9.4487 32.1013 9.43203 32.8846 8.9487 33.368C8.4487 33.8513 7.66536 33.8346 7.18203 33.3513C3.8987 29.9846 2.08203 25.5346 2.08203 20.8346C2.08203 10.9513 10.1154 2.91797 19.9987 2.91797C29.882 2.91797 37.9154 10.9513 37.9154 20.8346C37.9154 25.5513 36.0987 30.018 32.782 33.3846C32.5487 33.6346 32.2154 33.7513 31.8987 33.7513Z"
                        fill="#020B1F"
                      />
                      <path
                        d="M19.9995 37.0859C16.2161 37.0859 13.1328 34.0026 13.1328 30.2193C13.1328 26.4359 16.2161 23.3359 19.9995 23.3359C23.7828 23.3359 26.8662 26.4193 26.8662 30.2026C26.8662 33.9859 23.7828 37.0859 19.9995 37.0859ZM19.9995 25.8359C17.5828 25.8359 15.6328 27.8026 15.6328 30.2026C15.6328 32.6026 17.5995 34.5693 19.9995 34.5693C22.3995 34.5693 24.3662 32.6026 24.3662 30.2026C24.3662 27.8026 22.4162 25.8359 19.9995 25.8359Z"
                        fill="#020B1F"
                      />
                      <path
                        d="M26.6641 21.25H25.4141C24.0307 21.25 22.9141 20.1333 22.9141 18.75V17.5C22.9141 15.4333 24.5974 13.75 26.6641 13.75C28.7307 13.75 30.4141 15.4333 30.4141 17.5C30.4141 19.5667 28.7307 21.25 26.6641 21.25ZM26.6641 16.25C25.9807 16.25 25.4141 16.8167 25.4141 17.5V18.75H26.6641C27.3474 18.75 27.9141 18.1833 27.9141 17.5C27.9141 16.8167 27.3474 16.25 26.6641 16.25Z"
                        fill="#020B1F"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Smart SEO Assistant</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.3333 5.89613C17.7918 5.89613 14.3792 6.17506 11.9924 6.40653C11.002 6.50258 10.229 7.2872 10.1523 8.28192C9.915 11.3613 9.58065 16.3534 9.58065 19.9987C9.58065 23.644 9.915 28.6362 10.1523 31.7155C10.229 32.7102 11.002 33.4949 11.9924 33.5909C14.3792 33.8224 17.7918 34.1012 20.3333 34.1012C22.8748 34.1012 26.2875 33.8224 28.6743 33.5909C29.6647 33.4949 30.4377 32.7102 30.5143 31.7155C30.7517 28.6362 31.086 23.644 31.086 19.9987C31.086 16.3534 30.7517 11.3613 30.5143 8.28192C30.4377 7.2872 29.6647 6.50258 28.6743 6.40653C26.2875 6.17506 22.8748 5.89613 20.3333 5.89613ZM11.7417 3.85455C14.1349 3.62248 17.6558 3.33203 20.3333 3.33203C23.0108 3.33203 26.5318 3.62248 28.925 3.85455C31.1715 4.07241 32.9158 5.85878 33.0875 8.08611C33.3248 11.1665 33.6667 16.2456 33.6667 19.9987C33.6667 23.7519 33.3248 28.8309 33.0875 31.9114C32.9158 34.1387 31.1715 35.925 28.925 36.1429C26.5318 36.3749 23.0108 36.6654 20.3333 36.6654C17.6558 36.6654 14.1349 36.3749 11.7417 36.1429C9.49515 35.925 7.75092 34.1387 7.57923 31.9114C7.3418 28.8309 7 23.7519 7 19.9987C7 16.2456 7.3418 11.1665 7.57923 8.08611C7.75092 5.85878 9.49515 4.07241 11.7417 3.85455Z"
                        fill="#020B1F"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3223 28.5476C17.3223 27.8396 17.9001 27.2656 18.6126 27.2656H22.0536C22.7661 27.2656 23.3439 27.8396 23.3439 28.5476C23.3439 29.2556 22.7661 29.8296 22.0536 29.8296H18.6126C17.9001 29.8296 17.3223 29.2556 17.3223 28.5476Z"
                        fill="#020B1F"
                      />
                      <path
                        d="M22.0543 11.4516C22.0543 12.3957 21.2839 13.161 20.3338 13.161C19.3836 13.161 18.6133 12.3957 18.6133 11.4516C18.6133 10.5075 19.3836 9.74219 20.3338 9.74219C21.2839 9.74219 22.0543 10.5075 22.0543 11.4516Z"
                        fill="#020B1F"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Mobile-First Design Templates</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.66797 4.59785C1.66797 3.89876 2.2458 3.33203 2.95859 3.33203H4.22242C6.609 3.33203 8.6221 5.07503 8.91812 7.3977L9.26037 10.0831H33.656C35.497 10.0831 36.9071 11.6891 36.634 13.4748L34.789 25.5395C34.4415 27.8115 32.4515 29.4924 30.109 29.4924H13.6662C11.3237 29.4924 9.33374 27.8115 8.98627 25.5395L6.8447 11.5367L6.84039 11.5059L6.35682 7.7117C6.22227 6.65595 5.30722 5.86368 4.22242 5.86368H2.95859C2.2458 5.86368 1.66797 5.29695 1.66797 4.59785ZM9.61969 12.6147L11.5389 25.164C11.6969 26.1967 12.6014 26.9607 13.6662 26.9607H30.109C31.1738 26.9607 32.0783 26.1967 32.2363 25.164L34.0813 13.0993C34.1203 12.8441 33.919 12.6147 33.656 12.6147H9.61969Z"
                        fill="#020B1F"
                      />
                      <path
                        d="M32.2112 34.9767C32.2112 35.9089 31.4407 36.6646 30.4904 36.6646C29.54 36.6646 28.7695 35.9089 28.7695 34.9767C28.7695 34.0447 29.54 33.2891 30.4904 33.2891C31.4407 33.2891 32.2112 34.0447 32.2112 34.9767Z"
                        fill="#020B1F"
                      />
                      <path
                        d="M15.0041 34.9767C15.0041 35.9089 14.2337 36.6646 13.2833 36.6646C12.3329 36.6646 11.5625 35.9089 11.5625 34.9767C11.5625 34.0447 12.3329 33.2891 13.2833 33.2891C14.2337 33.2891 15.0041 34.0447 15.0041 34.9767Z"
                        fill="#020B1F"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>One-Click eCommerce Integration</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M25 6.25C25.6903 6.25 26.25 5.69035 26.25 5C26.25 4.30965 25.6903 3.75 25 3.75H19.9247C16.8637 3.74998 14.4643 3.74998 12.5608 3.95622C10.6182 4.16668 9.04427 4.60387 7.7004 5.58025C6.88682 6.17135 6.17135 6.88682 5.58025 7.70038C4.60387 9.04427 4.16668 10.6182 3.95622 12.5608C3.74998 14.4643 3.74998 16.8637 3.75 19.9247V20.0753C3.74998 23.1363 3.74998 25.5357 3.95622 27.4392C4.16668 29.3818 4.60387 30.9557 5.58025 32.2997C6.17135 33.1132 6.88682 33.8287 7.70038 34.4197C9.04427 35.3962 10.6182 35.8333 12.5608 36.0438C14.4643 36.25 16.8637 36.25 19.9245 36.25H20.0755C23.1363 36.25 25.5357 36.25 27.4392 36.0438C29.3818 35.8333 30.9557 35.3962 32.2997 34.4197C33.1132 33.8287 33.8287 33.1132 34.4197 32.2997C35.3962 30.9557 35.8333 29.3818 36.0438 27.4392C36.25 25.5357 36.25 23.1363 36.25 20.0755V15C36.25 14.3096 35.6903 13.75 35 13.75C34.3097 13.75 33.75 14.3096 33.75 15V20C33.75 23.1527 33.7483 25.4167 33.5583 27.17C33.3708 28.8998 33.0123 29.9835 32.3972 30.8302C31.9603 31.4315 31.4315 31.9603 30.8302 32.3972C29.9835 33.0123 28.8998 33.3708 27.17 33.5583C25.4167 33.7483 23.1527 33.75 20 33.75C16.8473 33.75 14.5833 33.7483 12.8301 33.5583C11.1002 33.3708 10.0165 33.0123 9.16985 32.3972C8.56852 31.9603 8.0397 31.4315 7.6028 30.8302C6.98765 29.9835 6.62908 28.8998 6.44167 27.17C6.25172 25.4167 6.25 23.1527 6.25 20C6.25 16.8473 6.25172 14.5833 6.44167 12.8301C6.62908 11.1002 6.98765 10.0165 7.6028 9.16985C8.0397 8.56852 8.56852 8.0397 9.16985 7.6028C10.0165 6.98765 11.1002 6.62908 12.8301 6.44167C14.5833 6.25172 16.8473 6.25 20 6.25H25Z"
                        fill="#020B1F"
                      />
                      <path
                        d="M10.544 24.2118C10.24 24.8316 10.496 25.5806 11.1158 25.8846C11.7356 26.1886 12.4845 25.9326 12.7885 25.3128L15.2224 20.3511C15.9768 18.8131 18.1941 18.8883 18.8426 20.4738C20.308 24.0555 25.317 24.2251 27.0213 20.7508L29.4553 15.7891C29.7593 15.1692 29.5033 14.4203 28.8835 14.1163C28.2636 13.8123 27.5148 14.0683 27.2106 14.6881L24.7768 19.6498C24.0225 21.1878 21.8051 21.1126 21.1566 19.5271C19.6913 15.9454 14.6822 15.7757 12.9779 19.2501L10.544 24.2118Z"
                        fill="#020B1F"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M29.168 6.66667C29.168 8.96785 31.0335 10.8333 33.3346 10.8333C35.6358 10.8333 37.5013 8.96785 37.5013 6.66667C37.5013 4.36548 35.6358 2.5 33.3346 2.5C31.0335 2.5 29.168 4.36548 29.168 6.66667ZM31.668 6.66667C31.668 7.58713 32.4141 8.33333 33.3346 8.33333C34.2551 8.33333 35.0013 7.58713 35.0013 6.66667C35.0013 5.7462 34.2551 5 33.3346 5C32.4141 5 31.668 5.7462 31.668 6.66667Z"
                        fill="#020B1F"
                      />
                    </svg>
                  </span>
                  <div className="text">
                    <h4>Real-Time Collaboration</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const StartSuccess = () => {
  return (
    <div className="section start-sucess">
      <Container fluid className="px-0">
        {/* <img src={marqueeBackground} alt="" /> */}
        <div className="marquee">
          <div className="headings">
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
          </div>
          <div className="headings">
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
            <h4>Start Your Success!</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const Home_Blog = () => {
  return (
    <div className="section blog_section_home">
      <Container>
        <div className="section_heading">
          <h2 className="heading">
            A Holistic Ecosystem Build for Business to Start, Nourish & Prosper
          </h2>
        </div>
        <div className="blog_grouped">
          <div className="row">
            <div className="col md-6 col-lg-4">
              <div className="blog_item">
                <div className="item_arrow">
                  <a href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <circle cx="20" cy="20.7148" r="20" fill="white" />
                      <path
                        d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                        fill="#0026AC"
                      />
                    </svg>
                  </a>
                </div>
                <div className="item_content">
                  <div className="flex_wrap">
                    <span className="post_date">09 Oct 2024</span>
                  </div>
                  <h3 className="item_title">
                    <a href="#!">
                      Personalization in Digital Marketing: Strategies and
                      Tools...
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col md-6 col-lg-4">
              <div className="blog_item">
                <div className="item_arrow">
                  <a href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <circle cx="20" cy="20.7148" r="20" fill="white" />
                      <path
                        d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                        fill="#0026AC"
                      />
                    </svg>
                  </a>
                </div>
                <div className="item_content">
                  <div className="flex_wrap">
                    <span className="post_date">09 Oct 2024</span>
                  </div>
                  <h3 className="item_title">
                    <a href="#!">
                      The Power of Social Proof: How to Use Customer
                      Testimonials...
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col md-6 col-lg-4">
              <div className="blog_item">
                <div className="item_arrow">
                  <a href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <circle cx="20" cy="20.7148" r="20" fill="white" />
                      <path
                        d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                        fill="#0026AC"
                      />
                    </svg>
                  </a>
                </div>
                <div className="item_content">
                  <div className="flex_wrap">
                    <span className="post_date">09 Oct 2024</span>
                  </div>
                  <h3 className="item_title">
                    <a href="#!">
                      The Power of Social Proof: How to Use Customer
                      Testimonials...
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_wrap pb-0 text-center">
            <a href="#!" className="bd-btn-link btn_primary">
              View All Blogs
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export const Pricing_Plan = () => {
  return (
    <div className="section pricing_plan">
      <div class="video_wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={FixedVideo}
          type="video/mp4"
        ></video>
      </div>
      <Container>
        <div className="section_heading position-relative z-1">
          <h2 className="heading text-light">Pricing Plans</h2>
        </div>

        <div className="pricing_items_group">
          <div className="pricing_item">
            <div className="ps-2">
              <h3 className="item_title">Basic</h3>
              <p className="item_desc">
                Best for organizations or personalities looking for a dynamic
                presence and constantly.
              </p>
              <div className="price_value">
                <h1>
                  <span>₹</span>2,099/-
                </h1>
              </div>
            </div>
            <a href="#!" className="bd-btn-link">
              Get Started
            </a>
            <ul className="icon_list unordered_list_block">
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Website Designing</span>
              </li>
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Full new features access</span>
              </li>
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Up to 5 Static Pages</span>
              </li>
            </ul>
          </div>
          <div className="pricing_item active">
            <div className="ps-2">
              <h3 className="item_title">Premium</h3>
              <p className="item_desc">
                Best for organizations or personalities looking for a dynamic
                presence and constantly.
              </p>
              <div className="price_value">
                <h1>
                  <span>₹</span>1,199/-
                </h1>
              </div>
            </div>
            <a href="#!" className="bd-btn-link">
              Get Started
            </a>
            <ul className="icon_list unordered_list_block">
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Website Designing</span>
              </li>
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Full new features access</span>
              </li>
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Up to 5 Static Pages</span>
              </li>
            </ul>
          </div>
          <div className="pricing_item">
            <div className="ps-2">
              <h3 className="item_title">Enterprise</h3>
              <p className="item_desc">
                Best for organizations or personalities looking for a dynamic
                presence and constantly.
              </p>
              <div className="price_value">
                <h1>
                  <span>₹</span>11,199/-
                </h1>
              </div>
            </div>
            <a href="#!" className="bd-btn-link">
              Get Started
            </a>
            <ul className="icon_list unordered_list_block">
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Website Designing</span>
              </li>
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Full new features access</span>
              </li>
              <li>
                <span className="list_item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_674_2101)">
                      <path
                        d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                        fill="#0027B0"
                      />
                      <path
                        d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_674_2101">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="list_item_text">Up to 5 Static Pages</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
