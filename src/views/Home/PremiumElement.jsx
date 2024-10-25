import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only necessary modules
import "swiper/css";
import "swiper/css/autoplay";
import review from './../../assets/images/icons/star.svg'
import table from './../../assets/images/icons/table.svg'
import callaction from './../../assets/images/icons/call-to-action.svg'
import file from './../../assets/images/icons/file.svg'
import list from './../../assets/images/icons/list.svg'
import location from './../../assets/images/icons/location.svg'
import share from './../../assets/images/icons/share.svg'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const PremiumElement = () => {

    const premium = useRef(null);

    useEffect(() => {
        const element = premium.current;

        // Create the timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: '40% top',
                end: "bottom bottom",
                toggleActions: "play none none reverse",
                markers: false,
                scroller: "body",
                scrub: 2,
            }
        });

        // Animate each image with a faster transition
        tl.fromTo(
            '.premium-btn',
            { y: 100, opacity: 0, },
            { y:0, opacity: 1, duration: 0.7, ease: 'expoScale(0.5,7,none)' }
        )
        // Cleanup function to kill ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <>
            <section className='premium-element section pt-lg-0' ref={premium}>
                <Container fluid>
                    <div className="elementhead">
                        <h1>500+</h1>
                        <div className="premiumcontent">
                            <h3>Premium Elements</h3>
                            <p>BestRate’s extensive element library empowers you to design websites without the necessity of deep coding skills.</p>
                        </div>
                        <div className="offertitle">
                            <h4>BESTRATE OFFERS A COMPLETE TOOLKIT OF ELEMENTS</h4>
                        </div>
                    </div>
                    <div className="element-slider">
                        <div className="slider slider-1 mt-0">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={15}
                                //   slidesPerView={'auto'} 
                                loop={true}
                                speed={4000}
                                slidesPerView={7}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={review} alt="" /><span>Review</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={callaction} alt="" /><span>Call to action</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={file} alt="" /><span>Tab</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={location} alt="" /><span>Google map</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={table} alt="" /><span>Pricing table</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={callaction} alt="" /><span>Call to action</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={share} alt="" /><span>Social icons</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={location} alt="" /><span>Google map</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={list} alt="" /><span>List</span>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="slider slider-1">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={15}
                                slidesPerView={7}
                                loop={true}
                                style={{ direction: 'rtl' }}
                                speed={4000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Review</span><img src={review} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Call to action</span><img src={callaction} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Tab</span><img src={file} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Google map</span><img src={location} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Pricing table</span><img src={table} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Call to action</span><img src={callaction} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Social icons</span><img src={share} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Google map</span> <img src={location} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>List</span><img src={list} alt="" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="slider slider-1">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={15}
                                slidesPerView={7}
                                loop={true}
                                speed={4000}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={review} alt="" /><span>Review</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={callaction} alt="" /><span>Call to action</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={file} alt="" /><span>Tab</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={location} alt="" /><span>Google map</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={table} alt="" /><span>Pricing table</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={callaction} alt="" /><span>Call to action</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={share} alt="" /><span>Social icons</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={location} alt="" /><span>Google map</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <img src={list} alt="" /><span>List</span>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="slider slider-1">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={15}
                                slidesPerView={7}
                                loop={true}
                                speed={4000}
                                style={{ direction: 'rtl' }}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Review</span><img src={review} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Call to action</span><img src={callaction} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Tab</span><img src={file} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Google map</span><img src={location} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Pricing table</span><img src={table} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Call to action</span> <img src={callaction} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Social icons</span><img src={share} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>Google map</span><img src={location} alt="" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="icon-container">
                                        <span>List</span><img src={list} alt="" />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="premium-btn">
                        <a href="#!" className="button btn-2">Browse Themes Now</a>
                    </div>
                </Container>
            </section>
        </>
    )
}
