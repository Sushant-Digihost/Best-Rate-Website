import React, { useState } from "react";
import bg from "../assets/images/login.mp4";
import logo from "../assets/images/FINAL-JPG.png";
import {
  Container,
  Form,
  Button,
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Container className="sign_in">
      <div className="div_container">
        <video className="bg_video" src={bg} autoPlay loop muted></video>
      </div>
      <div className="sign_in_container">
        <div className="row">
          <div className="col-md-6">
            <div className="left_continaer">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <h1>Create account</h1>
              <p>Lorem Ipsum is simply dummy text of the printing</p>
              <ProgressBar now={(step / 3) * 100} className="mb-3" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_continaer">
              {/* Form Steps */}
              {step === 1 && (
                <Form.Group controlId="name">
                  <Form.Label>Enter your name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </Form.Group>
              )}

              {step === 2 && (
                <Form.Group controlId="email">
                  <Form.Label>Enter your email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                </Form.Group>
              )}

              {step === 3 && (
                <Form.Group controlId="password">
                  <Form.Label>Create a password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="********"
                  />
                </Form.Group>
              )}

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between mt-4">
                {step > 1 && (
                  <Button variant="secondary" onClick={prevStep}>
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button variant="primary" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button variant="success">Submit</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
