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
            <div className="fluid-container px-5">
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
                        <div className="circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                                >
                                <path
                                    d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                                    fill="#0026AC"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                                className="svg2"
                                >
                                <path
                                    d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                                    fill="#0026AC"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}