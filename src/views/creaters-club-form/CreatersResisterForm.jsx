import React, { useState, useRef } from "react";
import bg from "./../../assets/images/login.mp4";
import logo from "./../../assets/images/FINAL-JPG.png";
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
const CreatersResisterForm = () => {
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
    <section className='section resitrationform'>
        <div className="sign_in">
            <div className="sign-in-form">
                <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="left_continaer">
                    {/* <div className="logo">
                        <img src={logo} alt="" />
                    </div> */}
                    <h1>Register Now!</h1>
                    {step === 1 && (
                        <>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </>
                    )}
                    {step === 2 && (
                        <>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        </>
                    )}
                    {step === 3 && (
                        <>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
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
                        
                    </ProgressBar>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right_continaer">
                   
                    {/* Form Steps */}
                    {!showStepForm && (
                        <>
                        {step === 1 && (
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Enter your name"
                            className="mb-3 form-floating-lb"
                            >
                            <Form.Control
                                className="form-float"
                                type="text"
                                placeholder="Enter your name"
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
                                type="email"
                                placeholder="Enter your email id"
                            />
                            </FloatingLabel>
                        )}

                     

                        
                       
                        {step === 3 && (
                            <>
                           <FloatingLabel
                            controlId="floatingInput"
                            label="Enter your phone no."
                            className="mb-3 form-floating-lb"
                            >
                            <Form.Control
                                className="form-float"
                                type="text"
                                placeholder="Enter your phone no."
                            />
                            </FloatingLabel>
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
                            {/* {step === 1 && (
                            <Link
                                to="/sign-in"
                                className="text-button fw-semibold me-3"
                            >
                                Sign In
                            </Link>
                            )} */}
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
                            // <Button variant="success">Submit</Button>
                            <a href="/pay-now" className="button2">Submit</a>
                            )}
                        </div>
                        </>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreatersResisterForm