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
                    spaceBetween={30} 
                    slidesPerView={4.5} 
                    loop={true} 
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}  
                    speed={4000}
              
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
                    
                   
                   
                </Swiper>
                {/* <div className="marquee">
                    <div className='headings'>
                        <h4><a href="#!">Start Your Success!</a></h4>
                        <h4><a href="#!">Start Your Success!</a></h4>
                        <h4><a href="#!">Start Your Success!</a></h4>
                        <h4><a href="#!">Start Your Success!</a></h4>
                        <h4><a href="#!">Start Your Success!</a></h4>
                        <h4><a href="#!">Start Your Success!</a></h4>
                        <h4><a href="#!">Start Your Success!</a></h4>
                    </div>
                </div> */}
            </Container>
        </div>
    );
};

export default StartSuccess;
