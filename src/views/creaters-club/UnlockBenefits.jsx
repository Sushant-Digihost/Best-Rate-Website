import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import circle from "./../../assets/images/creaters/unlock-bft.png";

const UnlockBenefits = () => {
  return (
    <section className="section unlock-benifits bg-light">
      <Container>
        <div className="ul-card">
          <h4>
            Don’t let budget stop you from dreaming big. Join the Best Rate
            Creators Club today for just ₹100 and take the first step toward
            your online success.
          </h4>
          <Link to="#!" className="light-button mt-5">
            Unlock Benefits
          </Link>
          <img src={circle} className="ul-bn" alt="Circle" />
        </div>
      </Container>
    </section>
  );
};

export default UnlockBenefits;
