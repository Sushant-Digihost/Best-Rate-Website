import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const UnlockDigital = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <section className="section unlock-digital">
      <Container>
        <h2 className="heading mb-4">
          Unlocking Digital Affordability For All
        </h2>
        <Accordion defaultActiveKey="0" onSelect={handleSelect}>
          <Accordion.Item
            eventKey="0"
            className={activeKey === "0" ? "active-accordion-it" : ""}
          >
            <div className="accordion-body-items">
              <Accordion.Header>
                What makes your web design services unique?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </div>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className={activeKey === "1" ? "active-accordion-it" : ""}
          >
            <div className="accordion-body-items">
              <Accordion.Header>
                What makes your web design services unique?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </div>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className={activeKey === "2" ? "active-accordion-it" : ""}
          >
            <div className="accordion-body-items">
              <Accordion.Header>
                Do you offer SEO services with web design?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </div>
          </Accordion.Item>
          <Accordion.Item
            eventKey="3"
            className={activeKey === "3" ? "active-accordion-it" : ""}
          >
            <div className="accordion-body-items">
              <Accordion.Header>
                Can you redesign my existing website?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </div>
          </Accordion.Item>
          <Accordion.Item
            eventKey="4"
            className={activeKey === "4" ? "active-accordion-it" : ""}
          >
            <div className="accordion-body-items">
              <Accordion.Header>
                Will my website be mobile-friendly?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </div>
          </Accordion.Item>
          <Accordion.Item
            eventKey="5"
            className={activeKey === "5" ? "active-accordion-it" : ""}
          >
            <div className="accordion-body-items">
              <Accordion.Header>
                Do you provide website maintenance?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </div>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default UnlockDigital;
