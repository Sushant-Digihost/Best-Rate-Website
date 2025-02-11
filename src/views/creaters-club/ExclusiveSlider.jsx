import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import cta from "./../../assets/images/creaters/cta.png";

const ExclusiveSlider = () => {
  return (
    <section className="section unlock-benifits bg-light excluseviveslider">
    <Container>
      <div className="ul-card">
        <h3>Exclusive 30% off on all Best Rate Services
        </h3>
        <Link to="#!" className="light-button mt-5">
          Unlock Benefits
        </Link>
        <img src={cta} className="ul-bn" alt="cta" />
      </div>
    </Container>
  </section>
  )
}

export default ExclusiveSlider