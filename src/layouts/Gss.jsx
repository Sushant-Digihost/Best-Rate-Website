import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Gss = () => {
    const gssRef = useRef(null);

    useEffect(() => {
        const element = gssRef.current;

        // Create the ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top 30%', // Adjust as needed
                end: 'bottom bottom', // Optional: Define an end point
                toggleActions: 'play none none reverse', // Play on enter, reverse on leave
                markers: true, // Optional: Display markers for debugging
                scroller: "body",
            },
        });
        tl.fromTo(
            '.heading1', 
            {
                y: 50,
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            },
            { 
                y: 0, // Move to original position
                duration: 1, // Increase duration for smoothness
                ease: 'power4.out'
            }, "SS"
        )
        // Adjusting the animations for smoother effects
        tl.fromTo(
            '.heading2', 
            {
                y: 100,
                opacity: 0, // Start hidden
            },
            { 
                y: 0, // Move to original position
                opacity: 1, // Fade in
                duration: 1, // Increase duration for smoothness
                ease: 'power4.out'
            }, "SS"
        )
        tl.fromTo(
            '.heading3', 
            {
                y: 100,
                opacity: 0, // Start hidden
            },
            { 
                y: 0, // Move to original position
                opacity: 1, // Fade in
                duration: 1, // Increase duration for smoothness
                ease: 'power4.out'
            }, "<0.2" // Start this animation 0.2 seconds after heading2 animation
        );

        // Cleanup function to kill ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="gss" ref={gssRef}>
            <div className="section experty-build">
                <Container fluid className="px-0">
                    <div className="cta-heading heading1">
                        <a href="#"><h4>Expertly Build Website</h4></a>
                    </div>
                    <div className="cta-heading heading2">
                        <a href="#"><h4>Built by experts</h4></a>
                    </div>
                    <div className="cta-heading heading3">
                        <a href="#"><h4>Delivered within 24hrs</h4></a>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Gss;
