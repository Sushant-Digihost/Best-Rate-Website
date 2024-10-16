import React from 'react'
import { Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import clickarrow from './../../assets/images/clickarrow.png'
import { FaArrowUpLong } from "react-icons/fa6";


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import img1 from "./../../assets/images/pricing/i1.png"
import img2 from "./../../assets/images/pricing/i2.png"
import img3 from "./../../assets/images/pricing/i3.png"
import img4 from "./../../assets/images/pricing/i4.png"

const CtaHome = () => {
    const cta = useRef(null);

    useEffect(() => {
        const element = cta.current;

        // Create the timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 50%',
                end: "bottom bottom", // Optional: Define an end point
                toggleActions: "play none none reverse",
                markers: false,
                scroller: "body",
            }
        });

        // Animate each image with a smooth transition
        tl.fromTo(
            '.img_1',
            { x: -100, opacity: 0, width: '100px', y: -29 },
            { x: 0, opacity: 1, width: "auto", y: 0, duration: 1.87, ease: 'expoScale(0.5,7,none)' }, "SS"
        )
            .fromTo(
                '.img_2',
                { y: -29, x: 68, opacity: 0, width: '100px' },
                { y: 0, x: -32, opacity: 1, width: "auto", duration: 1.87, ease: 'expoScale(0.5,7,none)' }, "SS"
            )
            .fromTo(
                '.img_3',
                { y: 29, x: -100, opacity: 0, width: '100px' },
                { y: -28, x: 0, opacity: 1, width: "auto", duration: 1.87, ease: 'expoScale(0.5,7,none)' }, "SS"
            )
            .fromTo(
                '.img_4',
                { x: 68, y: 29, opacity: 0, width: '100px' },
                { x: -32, opacity: 1, y: -28, width: "auto", duration: 1.87, ease: 'expoScale(0.5,7,none)' }, "SS"
            );

        // Cleanup function to kill ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="section mission" ref={cta}>
            <Container>
                <div className="cta_image">
                    <div className="d-flex justify-content-center">
                        <div className="img_1 cta_img_wrap">
                            <img src={img1} alt="Img" className='img-fluid' />
                        </div>
                        <div className="img_2 cta_img_wrap">
                            <img src={img2} alt="Img" className='img-fluid' />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="img_3 cta_img_wrap">
                            <img src={img3} alt="Img" className='img-fluid' />
                        </div>
                        <div className="img_4 cta_img_wrap">
                            <img src={img4} alt="Img" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container text-center">
                        <h2>Your Success is Our Mission</h2>
                        <a href="#!" className="button btn-2">Get Started</a>
                    </div>
                </div>
                <div className="back-text">
                    <h2>INCIPERE</h2>
                </div>
            </Container>
        </div>
    );
}

export default CtaHome