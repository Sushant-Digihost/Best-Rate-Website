import React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

import domainVideo from "./../../assets/images/domain.mp4";

const HeroSection =() => {

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
        <div className="section_banner">
            <div className="hero">
                <Container>
                    <div className="texts">
                        <div className="bg-texts">
                            <h2 className={visibleIndex === 0 ? "visible" : ""}>Insight</h2>
                            <h2 className={visibleIndex === 1 ? "visible" : ""}>Innovation</h2>
                            <h2 className={visibleIndex === 2 ? "visible" : ""}>Vision</h2>
                        </div>
                        <div className="main-text">
                            <h2>Setting up your business as easy as</h2>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="section domain-name">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="step-cards">
                                <div className="card">
                                    <span className="step">Step 1</span>
                                    <div className="inner-text">
                                        <span className="in-step">Step 3:</span>
                                        <h5>Earn coins and website</h5>
                                    </div>
                                </div>
                                <div className="card active">
                                    <span className="step">Step 2</span>
                                    <div className="inner-text">
                                        <span className="in-step">Step 3:</span>
                                        <h5>Earn coins and website</h5>
                                    </div>
                                </div>
                                <div className="card ">
                                    <span className="step">Step 3</span>
                                    <div className="inner-text">
                                        <span className="in-step">Step 3:</span>
                                        <h5>Earn coins and website</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className="domain-video">
                                <video src={domainVideo} muted loop autoPlay></video>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="text-card">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="numbers">
                                <span className="num">1</span>
                                <span className="num">2</span>
                                <span className="num">3</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HeroSection