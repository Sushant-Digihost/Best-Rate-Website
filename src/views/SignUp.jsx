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

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [showStepForm, setShowStepForm] = useState("");

  const handleShowForm = () => {
    setShowStepForm(!showStepForm);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otpVarification: "",
    setPin: "",
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
              <h1>Create account</h1>
              {step === 1 && (
                <>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
                </>
              )}
              {step === 2 && (
                <>
                  <p>Lorem Ipsum is simply dummy text of the printing</p>
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
              {step === 5 && (
                <>
                  <p>
                    Please enter OTP to verify your account. A OTP has been sent
                    to +91XXXXXXX576/sahXXXXXX@gmail.com
                  </p>
                </>
              )}
              {step === 6 && (
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
                <ProgressBar
                  variant={step >= 5 ? "success" : "secondary"}
                  now={16.67}
                  key={5}
                />
                <ProgressBar
                  variant={step >= 6 ? "success" : "secondary"}
                  now={16.67}
                  key={6}
                />
              </ProgressBar>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_continaer">
              {!showStepForm && (
                <div className="first-show-buttons">
                  <div className="google" onClick={handleShowForm}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_3202_3112)">
                        <path
                          d="M4.6875 9.9999C4.6875 9.009 4.96051 8.08076 5.4348 7.28596V3.91455H2.0634C0.725312 5.65236 0 7.77029 0 9.9999C0 12.2295 0.725312 14.3474 2.0634 16.0853H5.4348V12.7138C4.96051 11.919 4.6875 10.9908 4.6875 9.9999Z"
                          fill="#FBBD00"
                        />
                        <path
                          d="M10 15.3126L7.65625 17.6563L10 20.0001C12.2296 20.0001 14.3475 19.2747 16.0853 17.9367V14.5688H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z"
                          fill="#0F9D58"
                        />
                        <path
                          d="M5.43391 12.7139L2.0625 16.0853C2.32742 16.4293 2.6159 16.7588 2.92805 17.071C4.8168 18.9597 7.32801 19.9999 9.9991 19.9999V15.3124C8.06066 15.3124 6.36172 14.2687 5.43391 12.7139Z"
                          fill="#31AA52"
                        />
                        <path
                          d="M20 10C20 9.39164 19.9449 8.78211 19.8363 8.18844L19.7483 7.70801H10V12.3955H14.7442C14.2835 13.312 13.5752 14.0596 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10Z"
                          fill="#3C79E6"
                        />
                        <path
                          d="M13.7565 6.24348L14.1708 6.65777L17.4854 3.34324L17.0711 2.92895C15.1823 1.0402 12.6711 0 10 0L7.65625 2.34375L10 4.6875C11.419 4.6875 12.7531 5.24008 13.7565 6.24348Z"
                          fill="#CF2D48"
                        />
                        <path
                          d="M9.99914 4.6875V0C7.32805 0 4.81684 1.0402 2.92805 2.92891C2.6159 3.24106 2.32742 3.57055 2.0625 3.91465L5.43391 7.28606C6.36176 5.73125 8.0607 4.6875 9.99914 4.6875Z"
                          fill="#EB4132"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3202_3112">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <h2>Continue with Google</h2>
                  </div>
                  <div className="google">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_3202_3123)">
                        <path
                          d="M12.7809 3.24623C13.4334 2.40499 13.9271 1.21499 13.7483 0C12.6821 0.0737496 11.4359 0.756246 10.7096 1.64499C10.0471 2.45124 9.50212 3.64873 9.71462 4.81247C10.8796 4.84872 12.0834 4.14998 12.7809 3.24623Z"
                          fill="#455A64"
                        />
                        <path
                          d="M17.9615 6.70989C16.9377 5.42615 15.499 4.68115 14.1402 4.68115C12.3465 4.68115 11.5878 5.5399 10.3415 5.5399C9.05652 5.5399 8.08027 4.68365 6.52903 4.68365C5.00529 4.68365 3.3828 5.6149 2.35406 7.20739C0.907816 9.44987 1.15531 13.6661 3.49905 17.2573C4.3378 18.5423 5.45779 19.9873 6.92278 19.9998C8.22652 20.0123 8.59402 19.1636 10.3603 19.1548C12.1265 19.1448 12.4615 20.0111 13.7627 19.9973C15.229 19.9861 16.4102 18.3848 17.249 17.0998C17.8502 16.1786 18.074 15.7148 18.5402 14.6748C15.149 13.3836 14.6052 8.56113 17.9615 6.70989Z"
                          fill="#455A64"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3202_3123">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <h2>Continue with Apple</h2>
                  </div>
                  <div className="google">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.60947 11.2916C7.53097 11.2916 5.88422 11.2921 5.12472 11.2914C4.73372 11.2911 4.59422 11.1506 4.59422 10.7571C4.59372 9.74639 4.59347 8.73564 4.59422 7.72489C4.59447 7.33639 4.74197 7.18815 5.12797 7.18789C5.88747 7.1874 7.52522 7.18764 7.60947 7.18764C7.60947 7.1184 7.60922 5.65915 7.60947 4.98715C7.60997 3.99365 7.78722 3.04265 8.29197 2.1719C8.80872 1.28065 9.56072 0.670153 10.5245 0.317154C11.1417 0.0909041 11.7825 0.000654261 12.4375 0.000154262C13.257 -0.000345737 14.0765 0.000404254 14.8962 0.00190425C15.2485 0.00240425 15.4047 0.158154 15.4055 0.512904C15.407 1.46365 15.407 2.4144 15.4055 3.3649C15.405 3.7234 15.2552 3.8674 14.895 3.8714C14.2232 3.87865 13.551 3.87415 12.88 3.90115C12.2022 3.90115 11.8457 4.23215 11.8457 4.93365C11.8295 5.67565 11.839 6.4184 11.839 7.1874C11.9025 7.1874 13.8312 7.18715 14.7327 7.1874C15.1422 7.1874 15.2822 7.32815 15.2822 7.73989C15.2822 8.74514 15.282 9.75064 15.2812 10.7559C15.281 11.1616 15.1495 11.2911 14.7375 11.2914C13.836 11.2919 11.9147 11.2916 11.8307 11.2916V19.4279C11.8307 19.8616 11.6942 19.9999 11.2662 19.9999C10.2227 19.9999 9.17897 20.0001 8.13547 19.9999C7.75722 19.9999 7.60972 19.8529 7.60972 19.4746C7.60947 16.8249 7.60947 11.3846 7.60947 11.2916Z"
                        fill="#3D6AD6"
                      />
                    </svg>

                    <h2>Continue with Faceboook</h2>
                  </div>
                  <div className="google">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.28694 10.6396L1.27344 16.6531C1.45439 16.7396 1.65389 16.7857 1.85837 16.7857H18.1441C18.3486 16.7857 18.5481 16.7396 18.729 16.6531L12.7155 10.6396L11.6008 11.7548C11.1765 12.1786 10.6011 12.4171 10.0012 12.4171C9.40136 12.4171 8.82593 12.1786 8.40161 11.7548L7.28694 10.6396Z"
                        fill="#3DADED"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.369 3.98657C19.4554 4.16752 19.5015 4.36702 19.5015 4.5715V15.4286C19.5015 15.6331 19.4554 15.8326 19.369 16.0136L13.3555 10.0001L19.369 3.98657Z"
                        fill="#3DADED"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.632547 3.98657L6.64605 10.0001L0.632547 16.0136C0.546145 15.8326 0.5 15.6331 0.5 15.4286C0.5 12.6474 0.5 7.35274 0.5 4.5715C0.5 4.36702 0.546145 4.16752 0.632547 3.98657Z"
                        fill="#3DADED"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.729 3.3469C18.5481 3.2605 18.3486 3.21436 18.1441 3.21436C14.359 3.21436 5.64344 3.21436 1.85837 3.21436C1.65389 3.21436 1.45439 3.2605 1.27344 3.3469L9.04172 11.1147C9.29596 11.3694 9.64112 11.5124 10.0012 11.5124C10.3613 11.5124 10.7065 11.3694 10.9607 11.1147L18.729 3.3469Z"
                        fill="#3DADED"
                      />
                    </svg>

                    <h2>Continue with email</h2>
                  </div>

                  <p>
                    Don’t have an account? <Link to="#!">Sign up </Link>
                  </p>
                </div>
              )}
              {/* Form Steps */}
              {showStepForm && (
                <>
                  {step === 1 && (
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter your name"
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
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter your email id"
                      className="mb-3 form-floating-lb"
                    >
                      <Form.Control
                        className="form-float"
                        type="password"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  )}

                  {step === 3 && (
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Set Password"
                      className="mb-3 form-floating-lb"
                    >
                      <Form.Control
                        className="form-float"
                        type="password"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
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
                          placeholder="name@example.com"
                        />
                      </FloatingLabel>
                      <Form.Check // prettier-ignore
                        type="checkbox"
                        className="w-100"
                        label="I agree to all the Terms and Privacy policy. "
                      />
                    </>
                  )}
                  {step === 5 && (
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
                  {step === 6 && (
                    <>
                      <span className="otp">Set Pin</span>
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
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div
                    className={`${
                      step === 1
                        ? "d-flex justify-content-end  mt-4 w-100 align-items-center"
                        : "d-flex justify-content-between mt-4 w-100 align-items-center"
                    }`}
                  >
                    {step === 1 && (
                      <Link to="/sign-in" className="text-button fw-semibold">
                        Sign In
                      </Link>
                    )}
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
                    {step < 6 ? (
                      <button className="button2" onClick={nextStep}>
                        Next
                      </button>
                    ) : (
                      // <Button variant="success">Submit</Button>
                      <button className="button2" onClick={nextStep}>
                        Submit
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
