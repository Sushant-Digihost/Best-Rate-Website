import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Innovation = () => {

    const colunsref = useRef(null)
    useEffect(() => {
        const element = colunsref.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "20% 30%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
                markers: false,
                scroller: "body",
                // scrub:4,
            }
        });
        tl.fromTo(
            ".colums.right",
            {
                "--before-height": "0%"  // Start with height 0
            },
            {
                "--before-height": "100%",  // Animate to 100%
                duration: 1.5,
                ease: "power2.out"
            }, "fggf"
        );
        tl.fromTo(
            ".colums.left",
            {
                "--before-height": "0%"  // Start with height 0
            },
            {
                "--before-height": "100%",  // Animate to 100%
                duration: 1.5,
                ease: "power2.out"
            },"fggf"
        );
        tl.fromTo(
            ".colums .col1 ",
            { y: 0, opacity: 0 },
            {
              y: -18,
              opacity: 1,
              duration: 0.5,
              delay: 0.7,
              ease: "expoScale(0.5,7,none)",
            },"fggf"
        );
        tl.fromTo(
            ".colums .col2 ",
            { y: 0, opacity: 0 },
            {
              y: -185,
              opacity: 1,
              duration: 2,
              delay: 0.7,
              ease: "expoScale(0.5,7,none)",
            },"fggf"
        );
        tl.fromTo(
            ".colums .col3 ",
            { y: 0, opacity: 0 },
            {
              y: -70,
              opacity: 1,
              duration: 2,
              delay: 0.7,
              ease: "expoScale(0.5,7,none)",
            },"fggf"
        );
        tl.fromTo(
            ".colums .col4 ",
            { y: 0, opacity: 0 },
            {
              y: -240,
              opacity: 1,
              duration: 2,
              delay: 0.7,
              ease: "expoScale(0.5,7,none)",
            },"fggf"
        );
        tl.fromTo(
            ".colums .col5 ",
            { y: 0, opacity: 0 },
            {
              y: -143,
              opacity: 1,
              duration: 2,
              delay: 0.7,
              ease: "expoScale(0.5,7,none)",
            },"fggf"
        );
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [])
    return (
        <div className='section innovation' ref={colunsref}>
            <div className='container'>
                <h2 className="heading">
                    Where Innovation Meets Perfection
                </h2>
            </div>
            <div className="col-container" >
                <div className="colums ">
                    <div className="col1 col">
                        <div className="ecosystem_item_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <style>
                                    {`.st0{fill:none;stroke:#222E61;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;}`}
                                    {`.st2{fill:#222E61;}`}
                                </style>
                                <g id="Effortless_Customization_with_Drag-and-Drop_Tools">
                                    <path className="st0" d="M1.75,14.54c2.34-7.7,9.49-13.3,17.96-13.3c10.36,0,18.77,8.4,18.77,18.77s-8.4,18.77-18.77,18.77 c-9.04,0-16.59-6.39-18.37-14.9"/>
                                    <path className="st2" d="M28.67,32.01h-10c-1.38,0-2.5-1.12-2.5-2.5v-4c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v4 c0,0.83,0.67,1.5,1.5,1.5h10c0.83,0,1.5-0.67,1.5-1.5v-10c0-0.83-0.67-1.5-1.5-1.5h-5c-0.28,0-0.5-0.22-0.5-0.5 s0.22-0.5,0.5-0.5h5c1.38,0,2.5,1.12,2.5,2.5v10C31.17,30.88,30.05,32.01,28.67,32.01z"/>
                                    <path className="st2" d="M19.72,26.01h-2.05c-1.38,0-2.5-1.12-2.5-2.5v-1.79l-0.45-0.45c-0.3-0.29-0.46-0.69-0.46-1.1 s0.16-0.81,0.46-1.1c0.61-0.61,1.6-0.61,2.21,0l1.55,1.55c1.03,1.03,1.6,2.4,1.6,3.85C25.17,23.56,22.72,26.01,19.72,26.01z"/>
                                </g>
                            </svg>


                        </div>
                        <p >Effortless Customization with Drag-and-Drop Tools</p>
                    </div>
                        
                </div>
                <div className="colums right">
                    <div className="col2 col">
                        <div className="ecosystem_item_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <style>
                                    {`.st0{fill:none;stroke:#222E61;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;}`}
                                    {`.st2{fill:#222E61;}`}
                                </style>
                                <g id="SEO-Ready_from_the_Ground_Up">
                                    <path className="st0" d="M38.16,14.53c-2.34-7.7-9.49-13.3-17.96-13.3C9.83,1.23,1.43,9.64,1.43,20s8.4,18.77,18.77,18.77 c9.04,0,16.59-6.39,18.37-14.9"/>
                                    <path className="st2" d="M27.11,23.35c-0.22-0.22-0.59-0.22-0.81,0l-0.06,0.06l-1.09-1.09c2.79-3.84,2.38-9.15-0.98-12.51 c-3.76-3.76-9.89-3.76-13.65,0s-3.76,9.89,0,13.65c3.36,3.35,8.66,3.77,12.51,0.98l1.09,1.09l-0.06,0.06 c-0.22,0.22-0.22,0.59,0,0.81l4.49,4.49c0.85,0.84,2.22,0.82,3.05-0.03c0.83-0.84,0.83-2.19,0-3.03L27.11,23.35z M11.33,22.65 c-3.31-3.31-3.31-8.71,0-12.02s8.71-3.31,12.02,0c3.32,3.32,3.32,8.7,0,12.02S14.65,25.97,11.33,22.65z M23.91,23.71 c0.09-0.08,0.17-0.16,0.25-0.24s0.16-0.17,0.24-0.25l1.01,1.01l-0.5,0.5L23.91,23.71z M26.7,24.57l0.51,0.51l-1.43,1.43L25.27,26 L26.7,24.57z M30.78,30.08c-0.39,0.39-1.03,0.39-1.43,0l-2.76-2.76l1.43-1.43l2.76,2.76C31.18,29.05,31.18,29.69,30.78,30.08z M23.05,15.51c0.04,0.32-0.19,0.6-0.5,0.64c-0.02,0-0.05,0-0.07,0c-0.29,0-0.54-0.22-0.57-0.51l-0.11-0.95l-3.01,3.56 c-0.17,0.2-0.45,0.26-0.69,0.15l-2.67-1.3l-2.79,3.41c-0.2,0.25-0.56,0.28-0.81,0.08s-0.28-0.56-0.08-0.81l3.08-3.76 c0.17-0.21,0.46-0.27,0.7-0.15l2.67,1.3l2.79-3.3l-1.17,0.14c-0.32,0.04-0.6-0.18-0.64-0.5c-0.04-0.32,0.18-0.6,0.5-0.64l2.45-0.29 c0.32-0.04,0.6,0.19,0.64,0.5L23.05,15.51z"/>
                                </g>
                            </svg>

                        </div>
                        <p >SEO-Ready from the Ground Up</p>
                    </div>
                </div>
                <div className="colums left">
                    <div className="col3 col">
                        <div className="ecosystem_item_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                            <style>
                                {`.st0{fill:none;stroke:#222E61;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;}`}
                                {`.st3{fill:#222E61;stroke:#222E61;stroke-width:0.25;stroke-miterlimit:10;}`}
                            </style>
                            <g id="Unmatched_Speed_and_Performance">
                                <path className="st0" d="M1.84,14.53c2.34-7.7,9.49-13.3,17.96-13.3c10.36,0,18.77,8.4,18.77,18.77s-8.4,18.77-18.77,18.77 c-9.04,0-16.59-6.39-18.37-14.9"/>
                                <path className="st3" d="M27.23,15.99c-0.09-0.17-0.21-0.26-0.38-0.26H21.8l5-7.9c0.09-0.13,0.09-0.3,0-0.43 c-0.09-0.13-0.21-0.21-0.38-0.21h-6.83c-0.17,0-0.3,0.09-0.38,0.21l-6.41,12.81c-0.09,0.13-0.09,0.3,0,0.43s0.26,0.21,0.38,0.21 h4.4l-4.78,11.4c-0.09,0.17,0,0.38,0.17,0.51c0.04,0.04,0.13,0.04,0.21,0.04c0.13,0,0.26-0.04,0.34-0.13l13.67-16.23 C27.27,16.33,27.31,16.16,27.23,15.99z M14.67,29.96l3.93-9.4c0.04-0.13,0.04-0.26-0.04-0.38c-0.09-0.09-0.21-0.17-0.34-0.17 h-4.36l5.98-11.96h5.81l-5.04,7.9c-0.09,0.13-0.09,0.3,0,0.43s0.21,0.21,0.38,0.21h4.95L14.67,29.96z"/>
                            </g>
                        </svg>
                        </div>
                        <p >Unmatched Speed and Performance</p>
                    </div>
                    
                </div>
                <div className="colums right">
                    <div  className="col4 col">
                        <div className="ecosystem_item_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <style>
                                    {`.st0{fill:none;stroke:#222E61;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;}`}
                                    {`.st2{fill:#222E61;}`}
                                </style>
                                <g id="Dedicated_Support_and_Resources_at_Every_Step">
                                    <path className="st0" d="M38.16,14.53c-2.34-7.7-9.49-13.3-17.96-13.3C9.83,1.23,1.43,9.64,1.43,20s8.4,18.77,18.77,18.77 c9.04,0,16.59-6.39,18.37-14.9"/>
                                    <path className="st2" d="M32.36,24.47l-1.27-1.26a0.52,0.52,0,0,0-0.73,0.73l1.27,1.26a0.52,0.52,0,0,0,0.73-0.73zm-2.55-2.54a0.52,0.52,0,1,0-0.73,0.73,0.52,0.52,0,0,0,0.73-0.73zm-1.9,5.03l5.03-5.03a1.96,1.96,0,0,0-0.76-3.29,1.96,1.96,0,0,0-1.44-2.74,2.83,2.83,0,0,0-1.42-2.54,1.96,1.96,0,0,0-1.85-1.95,2.83,2.83,0,0,0-0.93,0.24l-0.05-0.05a3.63,3.63,0,0,0-2.53-1.1h-4.08a0.52,0.52,0,0,0-0.52,0.52v0.68c0,0.27,0.05,0.54,0.13,0.79a1.96,1.96,0,0,0-2.13,0.42,2.83,2.83,0,0,0-0.47,2,1.96,1.96,0,0,0-1.62,1.92,2.83,2.83,0,0,0,0.1,0.61,1.96,1.96,0,0,0-1.44,2.75,1.96,1.96,0,0,0-1.33,2.73l1.04,1.04-5.1,5.1a0.52,0.52,0,0,0,0.74,0.73l5.15-5.15a1.96,1.96,0,0,0,2.35-1.77,1.96,1.96,0,0,0,2.03-1.95,1.96,1.96,0,0,0,2.03-1.95,1.96,1.96,0,0,0,1.51-3.19L24,9.45a0.92,0.92,0,0,1,1.3,0,0.92,0.92,0,0,1,0,1.3l-2.35,2.35a0.52,0.52,0,0,0,0.74,0.73l1.84-1.84a0.92,0.92,0,1,1,1.3,1.3l-1.84,1.84a0.52,0.52,0,0,0,0.74,0.73l1.33-1.33a0.92,0.92,0,0,1,1.3,0,0.92,0.92,0,0,1,0,1.3l-1.34,1.34a0.52,0.52,0,0,0,0.74,0.73l0.64-0.64a0.92,0.92,0,1,1,1.3,1.3l-5.03,5.03a6.79,6.79,0,0,1-4.73,2.06,0.52,0.52,0,0,0-0.35,0.15l-4.65,4.67a0.52,0.52,0,0,0,0.74,0.73l3.42-3.43a4.85,4.85,0,0,0,2.93,0.75l2.68,2.68a0.52,0.52,0,0,0,0.74-0.73l-2.85-2.85a0.52,0.52,0,0,0-0.41-0.15L22,27.48a3.81,3.81,0,0,1-2.17-0.47l0.33-0.33A7.82,7.82,0,0,0,25.38,24.32zM13.6,20.88a0.92,0.92,0,0,1-1.3,0l-1.4-1.4a0.92,0.92,0,0,1,1.3-1.3l1.4,1.4A0.92,0.92,0,0,1,13.6,20.88zm2.03-2.04a0.92,0.92,0,0,1-1.3,0l-2.1-2.1a0.92,0.92,0,0,1,1.3-1.3l2.1,2.1A0.92,0.92,0,0,1,15.63,18.84zm2.03-2.03a0.92,0.92,0,0,1-1.3,0l-2.61-2.61a0.92,0.92,0,0,1,1.3-1.3l2.61,2.61A0.92,0.92,0,0,1,17.66,16.81zm2.04-2.03a0.92,0.92,0,0,1-1.3,0l-3.12-3.12a0.92,0.92,0,0,1,1.3-1.3l3.12,3.12A0.92,0.92,0,0,1,19.7,14.78zm0.13-2.63l-1.43-1.43a1.96,1.96,0,0,0,0.51,0.05h0.01l1.42-0.01a0.52,0.52,0,0,0,0-1.04h0l-1.42,0.01h-0.01a1.31,1.31,0,0,1-1.32-1.31V8.26h3.56a2.54,2.54,0,0,1,1.77,0.77l0.02,0.02L19.83,12.15z"/>
                                </g>
                            </svg>

                        </div>
                        <p>Dedicated Support and Resources at Every Step</p>
                    </div>
                    
                </div>
                <div className="colums left">
                    <div className="col5 col">
                        <div className="ecosystem_item_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                                <style>
                                    {`.st0{fill:none;stroke:#222E61;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;}`}
                                    {`.st2{fill:#222E61;}`}
                                    {`.st3{fill:#222E61;stroke:#222E61;stroke-width:0.25;stroke-miterlimit:10;}`}
                                </style>
                                <g id="Fully_Responsive_x2C__Mobile-First_Designs">
                                    <path className="st0" d="M1.84,14.53c2.34-7.7,9.49-13.3,17.96-13.3c10.36,0,18.77,8.4,18.77,18.77s-8.4,18.77-18.77,18.77 c-9.04,0-16.59-6.39-18.37-14.9"/>
                                    <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
                                        <path className="st2" d="M20.96,380h-1.05c-0.19,0-0.35,0.16-0.35,0.35c0,0.19,0.16,0.35,0.35,0.35h1.05c0.19,0,0.35-0.16,0.35-0.35 C21.31,380.15,21.16,380,20.96,380z"/>
                                        <path className="st3" d="M23.58,497.01h-6.28c-0.19,0-0.35,0.16-0.35,0.35c0,0.19,0.16,0.35,0.35,0.35h6.28 c0.19,0,0.35-0.16,0.35-0.35C23.93,497.16,23.77,497.01,23.58,497.01z"/>
                                        <path className="st3" d="M22.53,494.91h-4.19c-0.77,0-1.4,0.63-1.4,1.4v8.58c0,0.77,0.63,1.4,1.4,1.4h4.19 c0.77,0,1.4-0.63,1.4-1.4v-8.58C23.93,495.54,23.3,494.91,22.53,494.91z"/>
                                        <path className="st3" d="M20.79,490.73h-13.67c-0.58,0-1.05,0.47-1.05,1.05v10.32c0,0.58,0.47,1.05,1.05,1.05h10.18 c0.19,0,0.35-0.16,0.35-0.35s-0.16-0.35-0.35-0.35h-10.18c-0.19,0-0.35-0.16-0.35-0.35v-10.32c0-0.19,0.16-0.35,0.35-0.35h13.67 c0.19,0,0.35,0.16,0.35,0.35v3.49c0,0.19,0.16,0.35,0.35,0.35s0.35-0.16,0.35-0.35v-3.49C21.84,491.2,21.37,490.73,20.79,490.73z"/>
                                    </g>
                                </g>
                            </svg>

                        </div>
                        <p >Fully Responsive, Mobile-First Designs</p>
                    </div>
           
                </div>
            </div>

        </div>
    )
}
