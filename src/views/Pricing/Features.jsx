import React, { useState, useLayoutEffect, useEffect ,useRef } from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link,useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const InfoIcon = ({ width = 12, height = 12, fill = "#9C9C9C" }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
    
      style={{ position: "relative", display: "inline-block", top:"-1.71vh" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 12 12"
        fill="none"
      >
        <g clipPath="url(#clip0_2146_7512)">
          <path
            d="M6 0C2.6838 0 0 2.6835 0 6C0 9.31615 2.6835 12 6 12C9.3162 12 12 9.3165 12 6C12 2.68385 9.3165 0 6 0ZM6 11.1628C3.15323 11.1628 0.837211 8.84679 0.837211 6C0.837211 3.15321 3.15323 0.837211 6 0.837211C8.84677 0.837211 11.1628 3.15321 11.1628 6C11.1628 8.84679 8.84677 11.1628 6 11.1628Z"
            fill={fill}
          />
          <path
            d="M6.00071 5C5.6453 5 5.39258 5.15009 5.39258 5.37123V8.38027C5.39258 8.56984 5.6453 8.75935 6.00071 8.75935C6.34032 8.75935 6.61672 8.56984 6.61672 8.38027V5.37118C6.61672 5.15007 6.34032 5 6.00071 5Z"
            fill={fill}
          />
          <path
            d="M5.99916 3.14844C5.63586 3.14844 5.35156 3.40906 5.35156 3.70918C5.35156 4.00932 5.63588 4.27784 5.99916 4.27784C6.35457 4.27784 6.63891 4.00932 6.63891 3.70918C6.63891 3.40906 6.35455 3.14844 5.99916 3.14844Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_2146_7512">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {showTooltip && (
        <div className=''
          style={{
            position: "absolute",
            left: "100%",
            bottom: "-87%",

          }}
        >
          <div className="custom-tooltip">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
          </div>
          
        </div>
      )}
    </div>
  );
};

const CheckIcon = ({ fill = "#122C65" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M7.65836 17.4727C7.46745 17.6647 7.20698 17.7719 6.93641 17.7719C6.66584 17.7719 6.40537 17.6647 6.21446 17.4727L0.448765 11.7061C-0.149588 11.1077 -0.149588 10.1375 0.448765 9.54023L1.17072 8.81809C1.76926 8.21974 2.7384 8.21974 3.33675 8.81809L6.93641 12.4179L16.6632 2.69095C17.2617 2.0926 18.2318 2.0926 18.8292 2.69095L19.5512 3.41309C20.1495 4.01144 20.1495 4.98152 19.5512 5.57894L7.65836 17.4727Z"
      fill={fill}
    />
  </svg>
);
const ErrorIcon = ({ fill = "#D7D7D7" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.64 10.0005L17.5898 5.0507C18.1367 4.50379 18.1367 3.61713 17.5898 3.07108L16.9299 2.4112C16.3829 1.86413 15.4962 1.86413 14.9502 2.4112L10.0005 7.36085L5.0507 2.41018C4.50379 1.86327 3.61713 1.86327 3.07108 2.41018L2.41018 3.07005C1.86327 3.61713 1.86327 4.50379 2.41018 5.04984L7.36085 10.0005L2.4112 14.9502C1.86413 15.4972 1.86413 16.3839 2.4112 16.9299L3.07108 17.5898C3.61798 18.1367 4.50465 18.1367 5.0507 17.5898L10.0005 12.64L14.9502 17.5898C15.4972 18.1367 16.3839 18.1367 16.9299 17.5898L17.5898 16.9299C18.1367 16.3829 18.1367 15.4962 17.5898 14.9502L12.64 10.0005Z"
      fill={fill}
    />
  </svg>
);

const FeatureRow = ({ title, icons }) => (
  <div className="d-flex align-items-stretch FeatureRow">
    <div className="price_desc">
      <div className="title">
        <h6>{title}</h6>
      </div>
    </div>
    <div className="d-flex align-items-stretch gap-2 w-100">
      {icons.map((icon, index) => (
        <div className="d-column" key={index}>
          {icon}
        </div>
      ))}
    </div>
  </div>
);
export const Features = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const location = useLocation();
  const feacturesectionref = useRef(null);

  useEffect(()=>{
    if(location.hash === "#features-prize"){
      setShowFeatures(true);

      setTimeout(() => {  
        feacturesectionref.current?.scrollIntoView({behavior:"smooth",block:"start"})
      }, 0);
    } 
  },[location.hash])

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures); 

    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log(toggleFeatures  , "scroll refreshed after 3 seconds")
    }, 1000);
  }
  useLayoutEffect(() => {
    // Get all accordion buttons
    const accordions = document.querySelectorAll(".accordion-button");

    console.log(accordions, "Accordions found");


    const handleAccordionClick = () => {
      ScrollTrigger.refresh();
      console.log("ScrollTrigger refreshed after accordion click");
    };

    // Add click event listener to each accordion
    accordions.forEach((accordion) =>
      accordion.addEventListener("click", handleAccordionClick)
    );

    // Cleanup: Remove event listeners on component unmount
    return () => {
      accordions.forEach((accordion) =>
        accordion.removeEventListener("click", handleAccordionClick)
      );
    };
  }, []);

  return (
    <div  className={`section features pt-lg-0 ${showFeatures ? '' : 'pb-0'}` }>
      <Container>
        <div className="text-center pb-lg-3 toggleFeatures">
          <button className="button" onClick={toggleFeatures}>
            {showFeatures ? 'Close Full list of features' : "Open Full list of features"}
          </button>
        </div>
        <div id='features-prize' ref={feacturesectionref} className={`features_wrapper ${showFeatures ? 'show mt-5' : ''}`}>
          {showFeatures && (
            <div className='feature_content'>
              <div className="section_heading position-relative z-1">
                <h2 className="heading">Compare all plan features</h2>
              </div>
              <div className="feature_table">
                <div className="table_wrap">
                  <div className="table_margin">
                    <div className="d-flex align-items-stretch">
                      <div className="price_desc">
                      </div>
                      <div className="d-flex align-items-stretch gap-2 w-100">
                        <div className="d-column">
                          <h4 className="title">Basic</h4>
                          <div className="price">
                            <h3><span>₹</span>799</h3>
                          </div>
                          <div className="buy-now-btn">
                            <Link to="/choose-domain" className="button2">Buy Now</Link>
                          </div>
                        </div>
                        <div className="d-column active">
                          <h4 className="title">Premium</h4>
                          <div className="price">
                            <h3><span>₹</span>1,199</h3>
                          </div>
                          <div className="buy-now-btn">
                          <Link to="/choose-domain" className="button2">Buy Now</Link>
                          </div>
                        </div>
                        <div className="d-column">
                          <h4 className="title">Enterprise</h4>
                          <div className="price">
                            <h3><span>₹</span>11,199</h3>
                          </div>
                          <div className="buy-now-btn">
                          <Link to="/choose-domain" className="button2">Buy Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing_values">
                  <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Dynamic</Accordion.Header>
                      <Accordion.Body>
                        <div className="accordian_content">
                          <FeatureRow
                            title={    
                            <span>
                              Website Designing 
                              <InfoIcon />
                            </span>}
                            icons={[<CheckIcon />, <CheckIcon />, <CheckIcon />]}
                          />
                          <FeatureRow
                            title="Website Development"
                            icons={[<CheckIcon />, <CheckIcon />, <CheckIcon />]}
                          />
                          <FeatureRow
                            title={    
                              <span>
                                Web Hosting
                                <InfoIcon />
                              </span>}
                            icons={[
                              <CheckIcon />,
                              <span>Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor</span>,
                              <CheckIcon />
                            ]}
                          />
                          <FeatureRow
                            title="Up to 5 Static Pages"
                            icons={[
                              <CheckIcon />,
                              <CheckIcon />,
                              <CheckIcon />
                            ]}
                          />
                          <FeatureRow
                            title="Up to 3 Contact Forms"
                            icons={[
                              <CheckIcon />,
                              <CheckIcon />,
                              <CheckIcon />
                            ]}
                          />
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Hosting and Domain</Accordion.Header>
                      <Accordion.Body>
                        <div className="accordian_content">
                          <FeatureRow
                            title="Website Designing"
                            icons={[<ErrorIcon />, <CheckIcon />, <CheckIcon />]}
                          />
                          <FeatureRow
                            title="Website Development"
                            icons={[
                              <span>2TB bandwidth / month</span>,
                              <span>2TB bandwidth / month</span>,
                              <span>Unlimited</span>,
                            ]}
                          />
                          <FeatureRow
                            title="Web Hosting"
                            icons={[
                              <span>2TB bandwidth / month</span>,
                              <span>Constant Contact, Hubspot, Mailchimp, Keap, Campaign Monitor</span>,
                              <span>2TB bandwidth / month</span>,
                            ]}
                          />
                          <FeatureRow
                            title={    
                              <span>
                                Up to 5 Static Pages
                                <InfoIcon />
                              </span>}
                            icons={[
                              <ErrorIcon />,
                              <CheckIcon />,
                              <CheckIcon />
                            ]}
                          />
                          <FeatureRow
                            title="Up to 3 Contact Forms"
                            icons={[
                              <ErrorIcon />,
                              <CheckIcon />,
                              <CheckIcon />
                            ]}
                          />
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Security and maintainance</Accordion.Header>
                      <Accordion.Body>
                        <div className="accordian_content">
                          <FeatureRow
                            title="Website Designing"
                            icons={[<ErrorIcon />, <CheckIcon />, <CheckIcon />]}
                          />
                          <FeatureRow
                            title="Website Development"
                            icons={[<ErrorIcon />, <CheckIcon />, <CheckIcon />]}
                          />
                          <FeatureRow
                            title="Web Hosting"
                            icons={[
                              <ErrorIcon />,
                              <CheckIcon />,

                              <CheckIcon />
                            ]}
                          />
                          <FeatureRow
                            title={    
                              <span>
                                Up to 5 Static Pages
                                <InfoIcon />
                              </span>}
                            icons={[
                              <ErrorIcon />,
                              <CheckIcon />,
                              <CheckIcon />
                            ]}
                          />
                          <FeatureRow
                            title="Up to 3 Contact Forms"
                            icons={[
                              <ErrorIcon />,
                              <CheckIcon />,
                              <CheckIcon />
                            ]}
                          />
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
