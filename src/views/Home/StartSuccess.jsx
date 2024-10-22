import React from 'react';
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only necessary modules
import "swiper/css";
import "swiper/css/autoplay";

const StartSuccess = () => {

    

    return (
        <div className="section start-success">
            <Container fluid className="px-0">
                <Swiper
                    className='marquee'
                    
                    modules={[Autoplay]}
                    spaceBetween={10} 
                    loop={true} 
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}  
                    speed={4000}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1.5,
                          spaceBetween: 10,
                        },
                        // when window width is >= 480px
                        480: {
                          slidesPerView: 2.5,
                          spaceBetween: 10,
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 3.5,
                          spaceBetween: 10,
                        },
                        // when window width is >= 1024px
                        991: {
                          slidesPerView: 4.8,
                          spaceBetween: 10,
                        },
                        1500: {
                            slidesPerView: 5.5,
                            spaceBetween: 10,
                          },
                        1600: {
                            slidesPerView: 6.8,
                            spaceBetween: 10,
                          },
                      }}
                >
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='headings'>
                            <h4><a href="#!">Start Your Success!</a></h4>
                        </div>
                    </SwiperSlide>
                   
                   
                </Swiper>
             
            </Container>
        </div>
    );
};

export default StartSuccess;
