import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const WhyJoinNow = () => {
  return (
    
    <section className="section why-join">
      <Container>
        <h2 className="heading">Why Join Now?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div className="prizr-cont">
            <div className="row bg-counter">
              <div className="col-lg-4">
                <div className="main-box">
                  <div className="num">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h2>Lock in now before price increased.</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-box">
                  <div className="num">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h2>Priority access to premium thing.</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="main-box">
                  <div className="num">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h2>Webinars and tools and more.</h2>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyJoinNow