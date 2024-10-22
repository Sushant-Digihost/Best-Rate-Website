import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import domainVideo from "./../../assets/images/domain.mp4";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

const HeroSection =() => {

    const domainSectionRef = useRef(null); // Create a ref for the .domain-name section

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

    //     const timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: domainSectionRef.current,
    //             start: "top top",
    //             end: "bottom bottom",
    //             pin: true,
    //             pinSpacing: false,
    //             markers: true,
    //             scrub: 20, // Increased scrub value for slower animation
    //             // triggerHook: 0.8, // Trigger animation later
    //         }
    //     });
        
    //     timeline
    //         .to(".hero .main-text", { 
    //             scale: 0.6, 
    //             opacity: 0, 
    //             duration: 2 // Increased duration for slower animation
    //         },'a') // Animate text first
    //         .to(".v1", { 
    //             y: -500, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,  
    //         },'a') // Then scale the video after the text animation finishes

    //         .to(".domain-name .c1", { 
    //             y: -500, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
    //             onComplete: () => {
    //                 gsap.to(".domain-name .c1", { 
    //                     height: "52px", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c1 h5", { 
    //                     display: "none", 
    //                     duration: 0.4 
    //                 });
    //                 gsap.to(".domain-name .c1", { 
    //                     backgroundColor: "#ffffff", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c1 .in-step", { 
    //                     color: "#000000", 
    //                     duration: 1 
    //                 });
    //             },
    //             onReverseComplete: () => {
    //                 gsap.to(".domain-name .c1", { 
    //                     height: "140px", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c1 h5", { 
    //                     display: "block", 
    //                     duration: 0.4 
    //                 });
    //                 gsap.to(".domain-name .c1", { 
    //                     backgroundColor: "#122C65", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c1 .in-step", { 
    //                     color: "#ffffff", 
    //                     duration: 1 
    //                 });
    //             }
    //         },'b')
    //          // Next, move the cards with a staggered effect
    //         .to(".domain-name .tc-1", { 
    //             y: -400, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
    //             display: "none", 
    //         },'b')

    //         .to(".domain-name .c2", { 
    //             y: -500, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
    //             onComplete: () => {
    //                 gsap.to(".domain-name .c2", { 
    //                     height: "52px", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c2 h5", { 
    //                     display: "none", 
    //                     duration: 0.4 
    //                 });
    //                 gsap.to(".domain-name .c2", { 
    //                     backgroundColor: "#ffffff", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c2 .in-step", { 
    //                     color: "#000000", 
    //                     duration: 1 
    //                 });
    //             },
    //             onReverseComplete: () => {
    //                 gsap.to(".domain-name .c2", { 
    //                     height: "140px", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c2 h5", { 
    //                     display: "block", 
    //                     duration: 0.4 
    //                 });
    //                 gsap.to(".domain-name .c2", { 
    //                     backgroundColor: "#122C65", 
    //                     duration: 1 
    //                 });
    //                 gsap.to(".domain-name .c2 .in-step", { 
    //                     color: "#ffffff", 
    //                     duration: 1 
    //                 });
    //             }
    //         },'c') 

    //         .to(".domain-name .tc-2", { 
    //             y: -300, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
    //             display: "none", 
    //         },'c') 

    //         .to(".domain-name .c3", { 
    //             y: -500, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
              
    //         },'d')
    //          // Next, move the cards with a staggered effect
    //         .to(".domain-name .tc-3", { 
    //             y: -200, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
    //             // display: "none", 
    //         },'d')

    //         .to(".numbers", { 
    //             y: -500, 
    //             duration: 4, // Increased duration for slower animation
    //             stagger: 0.3,
    //             display: "none", 
    //         },'a')

    //         .to(".v2", { 
    //             y: -500, 
    //             duration: 8, // Increased duration for slower animation
    //         },'c')

    //         .to(".v3", { 
    //             y: -500, 
    //             duration: 8, // Increased duration for slower animation
    //         },'d')

         


    // }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    
        // Total scroll length calculation based on faster animations
        const totalDuration = 5 + 3 * 3 + 3 * 3 + 3 * 3 + 5 * 2; // Adjust for faster durations
    
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: domainSectionRef.current,
                start: "top top",
                end: `+=${totalDuration * 200}`, // Adjust the scroll length
                pin: true,
                pinSpacing: true, 
                scrub: true,
                // markers: true,
            }
        });
    
        timeline
            .to(".hero .main-text", { 
                scale: 0.6, 
                opacity: 0, 
                duration: 2 // Faster animation
            },'a') 
            .to(".v1", { 
                y: -450, 
                duration: 3, // Faster animation
                stagger: 0.3 // Reduced stagger
            },'a') 
    
            .to(".domain-name .c1", { 
                y: -450, 
                duration: 3, 
                stagger: 0.3,
                opacity: 1,
                onComplete: () => {
                    gsap.to(".domain-name .c1", { 
                        height: "52px", 
                        duration: 1 
                    });
                    gsap.to(".domain-name .c1 h5", { 
                        display: "none", 
                        duration: 0.2 
                    });
                    gsap.to(".domain-name .c1", { 
                      
                        duration: 1 
                    });
                    gsap.to(".domain-name .c1 .in-step", { 
                        duration: 1 
                    });
                },
                onReverseComplete: () => {
                    gsap.to(".domain-name .c1", { 
                        height: "140px", 
                        duration: 1 
                    });
                    gsap.to(".domain-name .c1 h5", { 
                        display: "block", 
                        duration: 0.2 
                    });
                    gsap.to(".domain-name .c1", { 
                
                        duration: 1 
                    });
                    gsap.to(".domain-name .c1 .in-step", { 
                        duration: 1 
                    });
                }
            },'b')
    
            .to(".domain-name .tc-1", { 
                y: -400, 
                duration: 3, 
                opacity: 1,
                onComplete: () => {
                    gsap.to(".domain-name .tc-1", { 
                        opacity: 0,

                        duration: 1 
                    });
                }
            },'b')
    
            .to(".domain-name .c2", { 
                y: -450, 
                duration: 3, 
                stagger: 0.3,
                opacity: 1,
                delay: 2,


                onComplete: () => {
                    gsap.to(".domain-name .c2", { 
                        height: "52px", 
                        duration: 1 
                    });
                    gsap.to(".domain-name .c2 h5", { 
                        display: "none", 
                        duration: 0.2 
                    });
                    gsap.to(".domain-name .c2", { 
                       
                        duration: 1 
                    });
                    gsap.to(".domain-name .c2 .in-step", { 
                        duration: 1 
                    });
                },
                onReverseComplete: () => {
                    gsap.to(".domain-name .c2", { 
                        height: "140px", 
                        duration: 1 
                    });
                    gsap.to(".domain-name .c2 h5", { 
                        display: "block", 
                        duration: 0.2 
                    });
                    gsap.to(".domain-name .c2", { 
                      
                        duration: 1 
                    });
                    gsap.to(".domain-name .c2 .in-step", { 
                        duration: 1 
                    });
                }
            },'c')
    
            .to(".domain-name .tc-2", { 
                y: -600, 
                duration: 3, 
                opacity: 1,
                delay: 3,
                onComplete: () => {
                    gsap.to(".domain-name .tc-2", { 
                        opacity: 0, 
                        duration: 1 
                    });
                }
            },'c')
    
            // .to(".domain-name .c3", { 
            //     y: -450, 
            //     duration: 3, 
            //     stagger: 0.3,
            //     opacity: 1,
            //     delay: 2,
            // },'d')

            .to(".domain-name .c3", { 
                y: -450, 
                duration: 3, 
                stagger: 0.3,
                opacity: 1,
                delay: 2,


                onComplete: () => {
                    gsap.to(".domain-name .c3", { 
                        height: "52px", 
                        duration: 1 
                    });
                    gsap.to(".domain-name .c3 h5", { 
                        display: "none", 
                        duration: 0.2 
                    });
                    gsap.to(".domain-name .c3", { 
               
                        duration: 1 
                    });
                    gsap.to(".domain-name .c3 .in-step", { 
                        duration: 1 
                    });
                },
                onReverseComplete: () => {
                    gsap.to(".domain-name .c3", { 
                        height: "140px", 
                        duration: 1 
                    });
                    gsap.to(".domain-name .c3 h5", { 
                        display: "block", 
                        duration: 0.2 
                    });
                    gsap.to(".domain-name .c3", { 
                       
                        duration: 1 
                    });
                    gsap.to(".domain-name .c3 .in-step", { 
                        duration: 1 
                    });
                }
            },'d')
    
            .to(".domain-name .tc-3", { 
                y: -800,
                duration: 3, 
                opacity: 1,
                delay: 3,
                onComplete: () => {
                    gsap.to(".domain-name .tc-3", { 
                        opacity: 0,
                        duration: 1 
                    });
                }
            },'d')
    
            .to(".numbers", { 
                y: -500, 
                duration: 3, 
                stagger: 0.3, 
            },'a')
    
            .to(".v2", { 
                y: -450, 
                duration: 5, 
                delay: 2,
                display: "block",
            },'c')

            .to(".v3", { 
                y: -450, 
                duration: 5, 
                delay: 2,
                display: "block",
            },'d')

            .to(".btn_wrapper", { 
                duration: 5, 
                top: '90%',
            },'a')
    
    }, []);
    
    

    const [visibleIndex, setVisibleIndex] = useState(0); // State to track which h2 is visible

    useEffect(() => {

        setVisibleIndex(0);

        const timer = setInterval(() => {
            setVisibleIndex((prevIndex) => {

                return (prevIndex + 1) % 3; 
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="section_banner" ref={domainSectionRef}>
            <div className="hero">

                <div className="btn_wrapper">
                    <a href="#" class="button">
                        <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <span>Know More</span>  
                    </a>

                   
                </div>
      

                <Container>
                    <div className="texts">
                        <div className="bg-texts">
                            <h2 className={visibleIndex === 0 ? "visible" : ""}>Insight</h2>
                            <h2 className={visibleIndex === 1 ? "visible" : ""}>Innovation</h2>
                            <h2 className={visibleIndex === 2 ? "visible" : ""}>Vision</h2>
                            {/* <h2 className="visible">Insight</h2>
                            <h2 className="visible">Innovation</h2>
                            <h2 className="visible">Vision</h2> */}
                        </div>
                        <div className="main-text">
                            <h2>Setting up your business as easy as</h2>
                        </div>

                    </div>
                    <div className="domain-name">
                    <Row>
                        <Col sm={4}>
                       

                            <div className="step-cards">
                                <div className="card active c1">
                                    <span className="step">Step 1</span>
                                    <div className="inner-text">
                                        <span className="in-step">Step 1:</span>
                                        <h5>Earn coins and website</h5>
                                    </div>
                                </div>
                                <div className="card active c2">
                                    <span className="step">Step 2</span>
                                    <div className="inner-text">
                                        <span className="in-step">Step 2:</span>
                                        <h5>Earn coins and website</h5>
                                    </div>
                                </div>
                                <div className="card active c3">
                                    <span className="step">Step 3</span>
                                    <div className="inner-text">
                                        <span className="in-step">Step 3:</span>
                                        <h5>Earn coins and website</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className="v_continer">
                            <div className="domain-video v1">
                                <video src={domainVideo} muted loop autoPlay></video>
                            </div>
                            <div className="domain-video v2">
                                <video src={domainVideo} muted loop autoPlay></video>
                            </div>
                            <div className="domain-video v3">
                                <video src={domainVideo} muted loop autoPlay></video>
                            </div>
                        </Col>
                        <Col sm={4}>
                        <div className="text_card_wrapper">
                            <div className="text-card tc-1">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                            <div className="text-card tc-2">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                            <div className="text-card tc-3">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </div>
                       
                        </Col>
                        
                        {/* <Col sm={12}>
                            <div className="numbers">
                                <span className="num">1</span>
                                <span className="num">2</span>
                                <span className="num">3</span>
                            </div>
                        </Col> */}
                    </Row>
            </div>
                </Container>
            </div>
          
        </div>
    )
}

export default HeroSection