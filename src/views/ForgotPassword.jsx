import React, { useState, useRef } from "react";
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
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";

const ForgotPassword = () => {
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

  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (
      !/[0-9]/.test(e.key) &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      e.preventDefault();
    }

    if (/[0-9]/.test(e.key)) {
      e.target.value = e.key; // Ensure single character entry
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) nextInput.focus();
      e.preventDefault(); // Prevent default behavior
    }

    if (e.key === "Backspace") {
      e.target.value = ""; // Clear the input
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) prevInput.focus();
      e.preventDefault();
    }
  };

  return (
    <div className="sign_in">
      <div className="div_container">
        <video className="bg_video" src={bg} autoPlay loop muted></video>
      </div>
      <div className="sign-in-form">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="left_continaer">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <h1>Forgot Password</h1>
              {step === 1 && (
                <>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </>
              )}
              {step === 2 && (
                <>
                  <p>
                    Please enter OTP to verify your account. A OTP has been sent
                    to +91XXXXXXX576/sahXXXXXX@gmail.com
                  </p>
                </>
              )}
              {step === 3 && (
                <>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </>
              )}
              {step === 4 && (
                <>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </>
              )}
              <ProgressBar>
                <ProgressBar
                  variant={step >= 1 ? "success" : "secondary"}
                  now={16.67}
                  key={1}
                />
                <ProgressBar
                  variant={step >= 2 ? "success" : "secondary"}
                  now={16.67}
                  key={2}
                />
                <ProgressBar
                  variant={step >= 3 ? "success" : "secondary"}
                  now={16.67}
                  key={3}
                />
                <ProgressBar
                  variant={step >= 4 ? "success" : "secondary"}
                  now={16.67}
                  key={4}
                />
              </ProgressBar>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_continaer">
              {/* Form Steps */}

              <>
                {step === 1 && (
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Enter your email"
                    className="mb-3 form-floating-lb"
                  >
                    <Form.Control
                      className="form-float"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                )}

                {step === 2 && (
                  <>
                    <span className="otp">OTP Verification</span>
                    <div className="otp-input-container">
                      {[...Array(6)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="otp-input"
                          ref={(el) => (inputRefs.current[index] = el)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                      ))}
                    </div>
                    <span className="resent-otp">
                      Didn’t get the code? <Link to="#!">Resend Otp </Link>
                    </span>
                  </>
                )}

                {step === 3 && (
                  <>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="New Password"
                      className="mb-3 form-floating-lb"
                    >
                      <Form.Control
                        className="form-float"
                        type="password"
                        placeholder="New Password"
                      />
                    </FloatingLabel>
                  </>
                )}

                {step === 4 && (
                  <>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Confirm Password"
                      className="mb-3 form-floating-lb"
                    >
                      <Form.Control
                        className="form-float"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </FloatingLabel>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4 w-100">
                  {step > 1 && (
                    <button className="text-button" onClick={prevStep}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                      >
                        <path
                          d="M0.665862 5.99993C0.665228 6.1096 0.686249 6.21832 0.727719 6.31985C0.76919 6.42138 0.830294 6.51373 0.907528 6.59159L5.90753 11.5916C6.06445 11.7485 6.27728 11.8367 6.49919 11.8367C6.72111 11.8367 6.93394 11.7485 7.09086 11.5916C7.24778 11.4347 7.33594 11.2218 7.33594 10.9999C7.33594 10.778 7.24778 10.5652 7.09086 10.4083L2.67419 5.99993L7.08253 1.59159C7.21905 1.43218 7.29039 1.22711 7.28229 1.01738C7.27419 0.807653 7.18724 0.608704 7.03883 0.460292C6.89042 0.311879 6.69147 0.224937 6.48174 0.216836C6.27201 0.208735 6.06695 0.280072 5.90753 0.416595L0.907528 5.41659C0.753575 5.57181 0.666782 5.78131 0.665862 5.99993Z"
                          fill="#122C65"
                        />
                      </svg>{" "}
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button className="button2" onClick={nextStep}>
                      Next
                    </button>
                  ) : (
                    <button className="button2" onClick={nextStep}>
                      Submit
                    </button>
                  )}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
