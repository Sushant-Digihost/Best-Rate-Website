import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Values = () => {
    const sectionsRef = useRef([]); // Refs to store each section element
    
    useEffect(() => {
        const scrollTriggers = []; // Store ScrollTrigger instances

        // Configuration for ScrollTrigger options
        const scrollConfig = {
            start: "top top",
            end: "200% 90%",
            scrub: 2.5,
            pin: true,
            toggleActions: "play none none reverse",
            scroller: "body",
        };

        const animateValues = (section, leftClass, rightClass, descClass) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    ...scrollConfig,
                    trigger: section,
                },
            });

            scrollTriggers.push(tl.scrollTrigger); // Store instance for cleanup

            tl.to(`${leftClass}`, {
                left: "0%",
                opacity: 1,
                duration: 5.5,
                ease: "slow(9.5, 9.5)",
            }, "ss")
            .to(`${rightClass}`, {
                right: "0%",
                opacity: 1,
                duration: 5.5,
                ease: "slow(9.5, 9.5)",
            }, "ss")
            .to(`${descClass}`, {
                opacity: 1,
                duration: 2.5,
                scale: "1",
                ease: "slow(9.5, 9.5)",
            });
        };

        // Initialize animations for each section
        gsap.utils.toArray(sectionsRef.current).forEach((section, i) => {
            const leftClass = `.value${i + 1} .left`;
            const rightClass = `.value${i + 1} .right`;
            const descClass = `.desc${i + 1}`;
            animateValues(section, leftClass, rightClass, descClass);
        });

        return () => {
            // Clean up each ScrollTrigger instance on component unmount
            scrollTriggers.forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            {["On-Time", "Focus on", "Business"].map((headingLeft, i) => (
                <div
                    key={i}
                    className={`about_values section value${i + 1}`}
                    ref={el => sectionsRef.current[i] = el}
                    id={`values${i + 1}`}
                >
                    <div className="container">
                        <div className="value_wrap">
                            <h1 className="value_heading left">{headingLeft}</h1>
                            <h1 className="value_heading right">{["Delivery", "Quality", "Oriented"][i]}</h1>
                            <span className={`value_desc desc${i + 1}`}>
                                {["Your Deadlines, Our Priority.", "Excellence in Every Detail, Every Time.", "Tailoring Solutions for Your Success."][i]}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};
