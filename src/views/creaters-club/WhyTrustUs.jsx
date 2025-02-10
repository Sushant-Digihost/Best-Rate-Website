import React from "react";
import { Container } from "react-bootstrap";

const WhyTrustUs = () => {
  return (
    <section className="section why-trust-us bg-light">
      <Container>
        <h2 className="heading mb-4">Why Trust Us?</h2>
        <div className="why-trust-card">
          <div className="heading-text">
            <h5>The Best Rate Promise!</h5>
            <h2>“No Hidden Fees - Just Pure Value.”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <hr />
          <div className="text-with-button">
            <h4>We help real people increase businesses.</h4>
            <button className="button2">Unlock Now</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyTrustUs;
