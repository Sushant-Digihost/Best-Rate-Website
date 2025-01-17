import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules"; // Import necessary Swiper modules
import "swiper/css";
import "swiper/css/bundle"; // Use bundled CSS import to ensure all necessary styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import readyToExploreVideo from "./../../assets/images/ready-to-explore.webm";


const ReadyToExplore = () => {
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
        <Row className="align-items-start">
          <Col sm={6}>
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
                  delay: 6000,
                  disableOnInteraction: false,
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
          <Col sm={6}>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              direction="vertical"
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="thumbslider"
            >
              <SwiperSlide>
                <div className="thumb">
                  <span className="icon">
                    {/* <svg
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
                    </svg> */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <g id="DragDrop">
    <path fill="#222E61" d="M19.48 39.87c-4.3 0-8.39-1.35-11.83-3.9-3.37-2.5-5.83-5.93-7.1-9.91-.21-.66.15-1.37.82-1.58.66-.21 1.37.15 1.58.82 2.31 7.21 8.95 12.06 16.53 12.06 9.57 0 17.35-7.78 17.35-17.35 0-9.57-7.78-17.35-17.35-17.35-7.11 0-13.61 4.45-16.18 11.08-.25.65-.98.97-1.63.72-.65-.25-.97-.98-.72-1.63 1.43-3.7 3.91-6.85 7.18-9.13C11.47 1.35 15.4.12 19.48.12c10.95 0 19.87 8.91 19.87 19.87S30.43 39.87 19.48 39.87z"/>
    <path fill="#222E61" stroke="#222E61" stroke-width="0.75" stroke-miterlimit="10" d="M22.33 7.39c-.52.22-.93.59-1.22 1.03-.78-.83-2.03-1.13-3.14-.65-.56.24-1 .65-1.28 1.14-.78-.68-1.92-.9-2.94-.46-.92.4-1.51 1.24-1.64 2.17-.6-.17-1.26-.15-1.88.12-1.41.61-2.05 2.25-1.44 3.66l1.28 2.94-.15.06c-1.96.85-2.86 3.14-2.01 5.1l2.4 5.53 3.3.67c1.92.39 3.54 1.7 4.32 3.5l.28.65 12.05-5.24-1.77-4.07.84-3.26c.39-1.53.26-3.17-.37-4.62l-2.97-6.82c-.62-1.42-2.26-2.06-3.66-1.45zm5.32 8.83c.51 1.16.61 2.48.3 3.71l-.96 3.73 1.4 3.22-9.48 4.13c-1.05-1.89-2.88-3.25-5.02-3.68l-2.57-.52-2.1-4.85c-.54-1.24.03-2.7 1.28-3.24l.15-.06.97 2.23 1.3-.56-2.81-6.46c-.3-.69.02-1.5.71-1.8.66-.29 1.42-.01 1.75.61l.83 1.9 1.3-.57-1.06-2.44c-.3-.69.02-1.5.71-1.8s1.5.02 1.8.71l1.06 2.44 1.3-.56-.64-1.46c-.3-.69.02-1.5.71-1.8s1.5.02 1.8.71l.64 1.46 1.3-.56-.08-.19c-.3-.69.02-1.5.71-1.8s1.5.02 1.8.71l3.1 7.15z"/>
  </g>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <g id="SEO">
    <path fill="#222E61" d="M20.52 39.87c4.3 0 8.39-1.35 11.83-3.9 3.37-2.5 5.83-5.93 7.1-9.91.21-.66-.15-1.37-.82-1.58-.66-.21-1.37.15-1.58.82-2.31 7.21-8.95 12.06-16.53 12.06-9.57 0-17.35-7.78-17.35-17.35 0-9.57 7.78-17.35 17.35-17.35 7.11 0 13.61 4.45 16.18 11.08.25.65.98.97 1.63.72.65-.25.97-.98.72-1.63-1.43-3.7-3.91-6.85-7.18-9.13C28.53 1.35 24.6.12 20.52.12 9.56.13.65 9.05.65 20S9.56 39.87 20.52 39.87z"/>
    <path fill="#222E61" d="M18.36 6.84c-5.79 0-10.52 4.72-10.52 10.51s4.72 10.51 10.52 10.51c2.61 0 4.99-.96 6.83-2.54l.92.92-.57.57c-.32.32-.32.83 0 1.14l2.42 2.43c.53.53 1.21.79 1.85.76.63-.03 1.2-.31 1.62-.73s.7-.98.73-1.61c.03-.63-.23-1.32-.76-1.85l-2.43-2.43c-.15-.15-.36-.24-.58-.24-.21 0-.41.09-.56.24l-.57.57-.92-.92c1.58-1.84 2.54-4.22 2.54-6.83 0-5.79-4.71-10.5-10.51-10.5zm0 1.61c4.92 0 8.89 3.98 8.89 8.9s-3.97 8.89-8.89 8.89-8.9-3.97-8.9-8.89 3.98-8.9 8.9-8.9zm1.61 4.85c-.45-.01-.82.34-.83.79s.34.82.79.83h1.33l-2.91 2.91-1.04-1.05c-.32-.31-.82-.31-1.14 0l-3.24 3.23c-.81.76.39 1.95 1.15 1.14l2.66-2.66 1.04 1.05c.32.31.82.31 1.14 0l3.47-3.47v1.29c-.01.45.34.82.79.83.45.01.82-.34.83-.79v-3.28c0-.45-.36-.81-.81-.81h-3.23zm8.43 12.94l1.86 1.86c.25.25.29.44.29.63-.01.19-.1.39-.26.54s-.36.25-.55.26c-.19.01-.38-.04-.63-.29l-1.85-1.85 1.14-1.15z"/>
  </g>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <g id="mobtemplate">
    <path fill="#222E61" d="M20.48 39.87c4.3 0 8.39-1.35 11.83-3.9 3.37-2.5 5.83-5.93 7.1-9.91.21-.66-.15-1.37-.82-1.58-.66-.21-1.37.15-1.58.82-2.31 7.21-8.95 12.06-16.53 12.06-9.57 0-17.35-7.78-17.35-17.35 0-9.57 7.78-17.35 17.35-17.35 7.11 0 13.61 4.45 16.18 11.08.25.65.98.97 1.63.72.65-.25.97-.98.72-1.63-1.43-3.7-3.91-6.85-7.18-9.13C28.47 1.35 24.54.12 20.46.12 9.51.13.61 9.05.61 20s8.91 19.87 19.87 19.87z"/>
    <path fill="#222E61" d="M33.99 20c0-.29-.01-1.06-1.7-2.28.95-.69 1.7-1.49 1.7-2.29 0-1.7-3.39-3.39-4.85-4.04l-1.93-.86c-2.18-1.02-4.52-1.68-6.92-1.95-2.4.27-4.73.93-6.92 1.95l-1.93.86c-1.46.65-4.85 2.34-4.85 4.04 0 .8.75 1.6 1.7 2.29-1.7 1.22-1.7 1.99-1.7 2.28 0 .8.76 1.6 1.7 2.29-1.7 1.22-1.7 1.97-1.7 2.28 0 1.7 3.39 3.39 4.85 4.04l1.93.86c2.18 1.02 4.52 1.68 6.92 1.95 2.4-.27 4.73-.93 6.92-1.95l1.93-.86c1.46-.65 4.85-2.34 4.85-4.04 0-.29-.01-1.06-1.7-2.28.95-.69 1.7-1.49 1.7-2.29zm-21.62-6.52 1.93-.86c1.9-.89 3.92-1.48 5.99-1.76 2.07.28 4.1.87 5.99 1.76l1.93.86c1.18.49 2.29 1.15 3.28 1.95-1 .8-2.1 1.46-3.29 1.95l-1.93.86c-1.9.89-3.92 1.48-5.99 1.76-2.07-.28-4.1-.87-5.99-1.76l-1.93-.86c-1.18-.49-2.29-1.15-3.29-1.95 1-.8 2.11-1.46 3.29-1.95zm-.93 5.99 1.93.86c2.18 1.02 4.52 1.68 6.92 1.95 2.4-.27 4.73-.93 6.92-1.95l1.93-.86c.27-.12.6-.27.96-.45.5.28.96.61 1.4.98-1 .8-2.1 1.46-3.28 1.95l-1.93.86c-1.9.89-3.92 1.48-5.99 1.76-2.07-.28-4.1-.87-5.99-1.76l-1.93-.86c-1.18-.49-2.29-1.15-3.28-1.95.44-.37.9-.7 1.4-.98.36.18.69.33.95.45zm20.06 5.1c-1 .8-2.1 1.46-3.28 1.95l-1.93.86c-1.9.89-3.92 1.48-5.99 1.76-2.07-.28-4.1-.87-5.99-1.76l-1.93-.86c-1.18-.49-2.29-1.15-3.28-1.95.43-.37.9-.7 1.4-.98.36.18.69.33.96.45l1.93.86c2.19 1.02 4.52 1.68 6.92 1.95 2.4-.27 4.73-.93 6.92-1.95l1.93-.86c.27-.12.6-.27.96-.45.5.28.97.61 1.41.98z"/>
    <path fill="#222E61" d="M16.87 15.2c-.63 0-1.14-.51-1.14-1.14 0-.48.3-.92.76-1.08 1.22-.47 2.49-.8 3.79-.97 1.31.17 2.6.49 3.83.97.59.21.9.87.69 1.46-.21.59-.87.9-1.46.69-.99-.38-2.02-.66-3.07-.84-1.03.19-2.04.47-3.02.84-.12.05-.25.07-.38.07z"/>
  </g>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <g id="oneclickecomm">
    <path fill="#222E61" d="M19.56 39.87c-4.3 0-8.39-1.35-11.83-3.9-3.37-2.5-5.83-5.93-7.1-9.91-.21-.66.15-1.37.82-1.58.66-.21 1.37.15 1.58.82 2.31 7.21 8.95 12.06 16.53 12.06 9.57 0 17.35-7.78 17.35-17.35 0-9.57-7.78-17.35-17.35-17.35-7.11 0-13.61 4.45-16.18 11.08-.25.65-.98.97-1.63.72-.65-.25-.97-.98-.72-1.63 1.43-3.7 3.91-6.85 7.18-9.13C11.55 1.35 15.48.12 19.56.12c10.95 0 19.87 8.91 19.87 19.87s-8.92 19.88-19.87 19.88z"/>
    <g fill="none" stroke="#222E61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.06 15.73v7M18.06 15.73v2M22.06 16.73v1M26.06 17.73v1"/>
      <path d="M28.36 15.73c-1.3-.2-2.3.8-2.3 2v-.9c0-1-.7-1.9-1.7-2.1-1.3-.2-2.3.8-2.3 2v-.9c0-1-.7-1.9-1.7-2.1-1.3-.2-2.3.8-2.3 2v-6.9c0-1-.7-1.9-1.7-2.1-1.2-.2-2.3.8-2.3 2v8.5c0-1.5-1.3-2.6-2.8-2.5-.5 0-.9.2-1.2.5v7.7c0 5.1 3.9 9.6 9 9.8h.8c5.8-.2 10.2-5.1 10.2-10.9v-.1v-3.9c0-1-.7-1.9-1.7-2.1z"/>
    </g>
  </g>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <g id="realtimecollab">
    <path fill="#222E61" d="M19.64 39.87c-4.3 0-8.39-1.35-11.83-3.9-3.37-2.5-5.83-5.93-7.1-9.91-.21-.66.15-1.37.82-1.58.66-.21 1.37.15 1.58.82 2.31 7.21 8.95 12.06 16.53 12.06 9.57 0 17.35-7.78 17.35-17.35 0-9.57-7.78-17.35-17.35-17.35-7.11 0-13.61 4.45-16.18 11.08-.25.65-.98.97-1.63.72-.65-.25-.97-.98-.72-1.63 1.43-3.7 3.91-6.85 7.18-9.13C11.63 1.35 15.56.12 19.64.12 30.59.13 39.5 9.05 39.5 20S30.59 39.87 19.64 39.87z"/>
    <path fill="#222E61" d="M23.71 24.84c-.31 0-.62-.12-.86-.35l-3.63-3.63c-.23-.23-.35-.53-.35-.86v-4.84c0-.67.54-1.21 1.21-1.21.67 0 1.21.54 1.21 1.21v4.35l3.28 3.28c.47.47.47 1.23 0 1.71-.24.23-.55.34-.86.34z"/>
    <path fill="#222E61" d="M20.08 7.89c-3.89 0-7.45 1.86-9.69 4.87v-1.23c0-.67-.54-1.21-1.21-1.21-.67 0-1.21.54-1.21 1.21v4.84c0 .67.54 1.21 1.21 1.21h4.84c.67 0 1.21-.54 1.21-1.21 0-.67-.54-1.21-1.21-1.21h-2.31c1.71-2.94 4.87-4.84 8.37-4.84 5.34 0 9.69 4.35 9.69 9.69s-4.35 9.69-9.69 9.69c-4.1 0-7.77-2.59-9.13-6.45-.22-.63-.91-.96-1.54-.74s-.96.91-.74 1.54c1.69 4.83 6.28 8.07 11.4 8.07 6.67 0 12.11-5.44 12.11-12.11S26.75 7.89 20.08 7.89z"/>
  </g>
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

export default ReadyToExplore;
