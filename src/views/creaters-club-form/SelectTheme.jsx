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
import theme1 from "./../../assets/images/theme/theme1.png";
import theme2 from "./../../assets/images/theme/theme2.png";
import theme3 from "./../../assets/images/theme/theme3.png";
import theme4 from "./../../assets/images/theme/theme4.png";
import theme5 from "./../../assets/images/theme/theme5.png";
import Select from 'react-select'



const SelectTheme = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  const themes = [
    {
      id: 1,
      name: "Corporate",
      img: theme1,
      catagory: ["Education", "Business"],
    },
    {
      id: 2,
      name: "Beauty & Wellness",
      img: theme2,
      catagory: ["Business"],
    },
    {
      id: 3,
      name: "Dentist",
      img: theme3,
      catagory: ["Business"],
    },
    {
      id: 4,
      name: "Blog",
      img: theme4,
      catagory: ["Blog"],
    },
    {
      id: 5,
      name: "Education",
      img: theme5,
      catagory: ["Education", "Blog"],
    },
    // {
    //   id: 6,
    //   name: "Beauty & Wellness",
    //   img: theme2,
    //   catagory: ["eCommerce", "Restaurant"],
    // },
    // {
    //   id: 7,
    //   name: "Dentist",
    //   img: theme3,
    //   catagory: ["eCommerce"],
    // },
    // {
    //   id: 8,
    //   name: "Blog",
    //   img: theme4,
    //   catagory: ["Health", "Restaurant"],
    // },
    // {
    //   id: 9,
    //   name: "Education",
    //   img: theme5,
    //   catagory: ["Blog"],
    // },
    // {
    //   id: 10,
    //   name: "Health",
    //   img: theme3,
    //   catagory: ["Health"],
    // },
  ];
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <>
      <div className="section themelist-container pt-0 select-theme">
        {/* Step Progress Bar */}
        <div className="container">
          <h3 className="heading1">Create website</h3>
       
        <div className="stepper">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`step ${step >= num ? "active" : ""}`}>
              <div className="circle">{num}</div>
              <p className="step-label">
                {num === 1 ? "Select Template" : num === 2 ? "Customize" : "Review"}
              </p>
              {num < 3 && <div className={`line ${step > num ? "completed" : ""}`}></div>}
            </div>
          ))}
        </div>

        {/* Step 1: Select Theme */}
        {step === 1 && (
          <div className="listbody pt-2">
          
            
            <div className="body-main">
            
              <div className="theme-container">
                <div className="row gx-4">
                  {themes.map((item) => (
                    <div
                      className="Themes col-lg-4"
                      
                    >
                      <a className="theme-box" href="#!">
                        <div className="themeimg">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="theme-card">
                          <div className="theme-card-body">
                            <div className="themeheading">
                              <h3>{item.name}</h3>
                              <div className="arrow">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="56"
                                  height="56"
                                  viewBox="0 0 56 56"
                                  fill="none"
                                >
                                  <path
                                    d="M36.6978 18.7308C36.6974 18.7308 36.697 18.7307 36.6966 18.7307L29.6257 18.7478C29.096 18.7491 28.6675 19.1795 28.6688 19.7093C28.6701 20.2391 29.1005 20.6675 29.6303 20.6662L34.3776 20.6547L20.0137 35.0186C19.6391 35.3932 19.6391 36.0005 20.0137 36.3751C20.3883 36.7496 20.9956 36.7496 21.3702 36.3751L35.734 22.0112L35.7226 26.7585C35.7213 27.2882 36.1497 27.7187 36.6795 27.7199C37.2093 27.7212 37.6397 27.2927 37.641 26.763L37.6581 19.6922C37.6581 19.6918 37.658 19.6914 37.6581 19.6909C37.6586 19.1602 37.2269 18.7302 36.6978 18.7308Z"
                                    fill="#42FFFF"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="readmore">
                              <h5>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M10 13.125C5.875 13.125 5.875 6.875 10 6.875C14.0781 6.875 14.2544 13.125 10 13.125ZM10 8.125C7.5 8.125 7.5 11.875 10 11.875C12.5 11.875 12.5 8.125 10 8.125Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M9.99875 15.625C6.90563 15.625 3.94375 13.9819 1.87375 11.1162C1.63843 10.7916 1.51172 10.4009 1.51172 10C1.51172 9.59906 1.63843 9.20837 1.87375 8.88375C3.94375 6.01812 6.90563 4.375 9.99875 4.375C13.0919 4.375 16.0538 6.01812 18.1238 8.88375C18.3591 9.20837 18.4858 9.59906 18.4858 10C18.4858 10.4009 18.3591 10.7916 18.1238 11.1162C16.0538 13.9819 13.0919 15.625 9.99875 15.625ZM2.88438 10.3837C4.74563 12.9575 7.27188 14.375 9.99875 14.375C12.7256 14.375 15.2519 12.9575 17.1131 10.3837C17.1941 10.2721 17.2377 10.1376 17.2377 9.99969C17.2377 9.86174 17.1941 9.72732 17.1131 9.61563C15.2519 7.0425 12.7256 5.625 9.99875 5.625C7.27188 5.625 4.74563 7.0425 2.88438 9.61625C2.80341 9.72794 2.75982 9.86236 2.75982 10.0003C2.75982 10.1383 2.80341 10.2721 2.88438 10.3837Z"
                                    fill="white"
                                  />
                                </svg>
                                Preview
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="checkbox">
                        <input type="checkbox" name="" id="" />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
         
        </div>
        )}

        {/* Step 2: Customize (Placeholder) */}
        {step === 2 && (
          <div className="selectthemeform">
            <form >
              <div className="row">
                <div className="col-lg-6">
                  <FloatingLabel
                        controlId="floatingInput"
                        label="Company Name Or Business Name"
                        className="mb-3 form-floating-lb"
                      >
                        <Form.Control
                          className="form-float"
                          type="email"
                          placeholder="name@example.com"
                        />
                    </FloatingLabel>
                </div>
                <div className="col-lg-6">
                  
                    <Select options={options} />
                </div>
              </div>
              <div className="col-lg-6">

              </div>

            </form>
          </div>
        )}

        {/* Step 3: Review (Placeholder) */}
        {step === 3 && (
          <div className="text-center">
            <h3>Review Your Choice</h3>
            <p>Confirm your theme selection before proceeding.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="button-group text-end mt-3">
          {step > 1 ? (
            <button onClick={prevStep} className="me-2 button2">
              Previous
            </button>
          ):(
            <button className="button2" onClick={nextStep}>
              Next
            </button>
          )}
        </div>
      </div>
      </div>
    </>
  )
}

export default SelectTheme