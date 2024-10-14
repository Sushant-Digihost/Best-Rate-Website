import React from "react";
import { useState, useEffect, useRef } from "react";
import blog1 from './../../src/assets/images/blog1.png'
import blog2 from './../../src/assets/images/blog2.png'
import blog3 from './../../src/assets/images/blog3.png'
import clickarrow from './../../src/assets/images/clickarrow.png'
import oneclick from './../../src/assets/images/oneclick.png'
import { FaArrowUpLong } from "react-icons/fa6";
import { Container } from "react-bootstrap";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import img1 from "./../../src/assets/images/pricing/i1.png"
import img2 from "./../../src/assets/images/pricing/i2.png"
import img3 from "./../../src/assets/images/pricing/i3.png"
import img4 from "./../../src/assets/images/pricing/i4.png"

export const Cta = () => {
    const cta = useRef(null);

    useEffect(() => {
        const element = cta.current;

        // Create the timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 30%', 
                end: 'bottom bottom', 
                markers: false, 
                scroller: "body",
            }
        });

        // Animate each image with a smooth transition
        tl.fromTo(
            '.img_1',
            { x: -30, opacity: 0},
            { x: 0, opacity: 1, duration: 1.87, ease: 'power4.out' }, "SS"
        )
        .fromTo(
            '.img_2',
            { y: -30,  x: -32, opacity: 0 },
            { y: 0, x: -32, opacity: 1, duration: 1.87, ease: 'power4.out' }, "SS"
        )
        .fromTo(
            '.img_3',
            { y: 10, opacity: 0 },
            { y: -28, opacity: 1, duration: 1.87, ease: 'power4.out' }, "SS"
        )
        .fromTo(
            '.img_4',
            { x: 10,  y: -29 ,opacity: 0  },
            { x: -32, opacity: 1, y: -28, duration: 1.87, ease: 'power4.out' }, "SS"
        );

        // Add a fade-out effect for all images once animations are done
        tl.to(['.img_1', '.img_2', '.img_3', '.img_4'], {
            opacity: 0,
            duration: 0.15,
            onComplete: () => {
                // Wait for 2 seconds before restarting the animation
                setTimeout(() => {
                    tl.restart();
                }, 1000); // 2-second delay
            }
        });

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

export const Blogsection = () => {
    return (
        <div className="section blogsection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="content">
                            <h2 className="blog-heading">
                                A Holistic Ecosystem Build for Business to Start, Nourish & Prosper
                            </h2>

                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="content">

                            <div className="blog-img-container">
                                <div className="blog-img">
                                    <a href="#!">
                                        <img src={blog1} alt="" />
                                        <div className="title">
                                            <h4>Personalization in Digital Marketing: Strategies and Tools...</h4>
                                        </div>
                                        <div className="arrow" >
                                            <FaArrowUpLong />
                                        </div>
                                    </a>
                                </div>
                                <div className="blog-img">
                                    <a href="#!">
                                        <img src={blog2} alt="" />
                                        <div className="title">
                                            <h4>The Power of Social Proof: How to Use Customer Testimonials...</h4>
                                        </div>
                                        <div className="arrow">
                                            <FaArrowUpLong />
                                        </div>
                                    </a>
                                </div>
                                <div className="blog-img  side-blog">
                                    <a href="#!">
                                        <img src={blog3} alt="" />
                                        <div className="title">
                                            <h4>Role of Artificial Intelligence in Digital Marketing: Opportunities and Challenges in India </h4>
                                        </div>
                                        <div className="arrow">
                                            <FaArrowUpLong />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const Oneclick = () => {
    return (
        <div className="section oneclick">
            <div className="container">
                <div className="oneclick-container">
                    <div className="onetext">
                        <div className="oneday">
                            <img src={oneclick} alt="" />
                        </div>
                        <div className="oneclick-para">
                            <p>Take the first step to your success.</p>
                        </div>
                    </div>
                    <div className="click-arrow">
                        <img src={clickarrow} alt="" />
                    </div>
                    <div className="arrow">
                        <FaArrowUpLong />
                    </div>
                </div>
            </div>
        </div>
    )
}