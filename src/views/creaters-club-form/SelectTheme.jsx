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
import { HexColorPicker } from "react-colorful";
import PhoneInput from "react-phone-number-input";
import "react-phone-input-2/lib/bootstrap.css";
import { h3 } from "framer-motion/client";



const SelectTheme = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [selectedFile, setSelectedFile] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("#6A5ACD"); // SlateBlue
  const [secondaryColor, setSecondaryColor] = useState("#90C258"); // Greenish shade
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);
  const [showSecondaryPicker, setShowSecondaryPicker] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

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
    { value: 'Web deleopment', label: 'Web deleopment' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Real Estate', label: 'Real Estate' }
  ]


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValid(validateEmail(inputValue));
  };



  const country = [
    { label: "+1", value: "US" },
    { label: "+44", value: "UK" },
    { label: "+91", value: "IN" },
    { label: "+61", value: "AU" },
    { label: "+81", value: "JP" },
  ];
  const state = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Haryana", value: "Haryana" },
    { label: "Manipur", value: "Manipur" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Maharastra", value: "Maharastra" },
  ];
  const [tags, setTags] = useState([
    'Fruits and vegetables',
    'Dairy',
    'Livestock',
    'Pulses',
    'Oilseeds',
    'Honey'
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue)) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };


  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only numbers
    setPhone(value);
  };

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

                    <Select options={options} placeholder="Industry Select or Enter" />
                  </div>

                  <div className="col-lg-6">
                    <div className="logo-upload-container">
                      <h5>Logo/Color Combination Preferences</h5>
                      <div className="file-upload-box">
                        <label className="file-upload-label">
                          <input type="file" onChange={handleFileChange} hidden />
                          <div className="upload-area d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                              <path d="M22.2 13.7996C24.8509 13.7996 27 15.9487 27 18.5996C27 21.2505 24.8509 23.3996 22.2 23.3996H16.2V17.8966L16.5515 18.2481C17.0201 18.7167 17.7799 18.7167 18.2485 18.2481C18.7171 17.7795 18.7171 17.0197 18.2485 16.5511L15.8485 14.1511C15.6151 13.9177 15.3095 13.8006 15.0035 13.7996H15H14.9964C14.835 13.8001 14.6812 13.8324 14.5406 13.8907C14.3992 13.9492 14.2666 14.036 14.1515 14.1511L11.7515 16.5511C11.2828 17.0197 11.2828 17.7795 11.7515 18.2481C12.2201 18.7167 12.9799 18.7167 13.4485 18.2481L13.8 17.8966V23.3996H9C5.6863 23.3996 3 20.7133 3 17.3996C3 14.3604 5.25979 11.8488 8.19082 11.4537C9.16379 8.62903 11.8449 6.59961 15 6.59961C18.9764 6.59961 22.2 9.82316 22.2 13.7996Z" fill="#A7B0BA" />
                            </svg> <div className="mx-2">
                              <span>Choose a file or drag & drop it here.</span>
                              <p className="file-types">JPEG, PNG, and SVG formats, up to 20 MB.</p>
                            </div>

                          </div>
                          <Button className="file-btn">Browse files</Button>
                        </label>
                      </div>

                      <Form.Check
                        type="checkbox"
                        label="Use business name as a logo"
                        className="business-name-checkbox"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="color-picker-container">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="color-box">
                            <label>Primary color:</label>
                            <div className="color-input" onClick={() => setShowPrimaryPicker(!showPrimaryPicker)}>
                              <div className="color-title">
                                <span className="color-preview" style={{ backgroundColor: primaryColor }}></span>
                                <span className="color-name">{primaryColor.toUpperCase()}</span>

                              </div>

                              <span className="color-icon" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M25.5937 7.57054C25.5937 6.75002 25.2742 5.97853 24.694 5.39831C23.4963 4.20065 21.5473 4.20048 20.3494 5.39831L17.3902 8.35755L16.0466 7.01399C15.8178 6.78517 15.4468 6.78517 15.2179 7.01399L13.46 8.77189C13.2312 9.00071 13.2312 9.37174 13.46 9.60062L14.8036 10.9442L6.32791 19.4198C6.26358 19.4842 6.21512 19.5626 6.18635 19.6489L5.64415 21.2755L5.15598 21.7637C4.28137 22.6384 4.28131 24.0616 5.15598 24.9363C6.03065 25.811 7.45385 25.8109 8.32852 24.9363L8.81669 24.4481L10.4433 23.9059C10.5296 23.8772 10.608 23.8287 10.6724 23.7644L19.1481 15.2887L20.4917 16.6322C20.7205 16.861 21.0915 16.861 21.3204 16.6322L23.0783 14.8743C23.3071 14.6455 23.3071 14.2745 23.0783 14.0456L21.7347 12.702L24.694 9.74278C25.2742 9.16255 25.5937 8.39113 25.5937 7.57054ZM14.8036 17.9757H9.42938L15.6323 11.7729L18.3194 14.4599L14.8036 17.9757ZM20.906 15.3891L14.7031 9.18623L15.6322 8.257L21.8351 14.4599L20.906 15.3891ZM23.8652 8.91411L20.906 11.8734L18.2189 9.18623L21.1781 6.22698C21.919 5.48614 23.1245 5.48609 23.8652 6.22698C24.6024 6.93424 24.6023 8.20684 23.8652 8.91411Z" fill="#122C65" />
                              </svg></span>
                            </div>
                            {showPrimaryPicker && <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          {/* Secondary Color Section */}
                          <div className="color-box">
                            <label>Secondary color:</label>
                            <div className="color-input" onClick={() => setShowSecondaryPicker(!showSecondaryPicker)}>
                              <div className="color-title">
                                <span className="color-preview" style={{ backgroundColor: secondaryColor }}></span>
                                <span className="color-name">{secondaryColor.toUpperCase()}</span>

                              </div>

                              <span className="color-icon" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M25.5937 7.57054C25.5937 6.75002 25.2742 5.97853 24.694 5.39831C23.4963 4.20065 21.5473 4.20048 20.3494 5.39831L17.3902 8.35755L16.0466 7.01399C15.8178 6.78517 15.4468 6.78517 15.2179 7.01399L13.46 8.77189C13.2312 9.00071 13.2312 9.37174 13.46 9.60062L14.8036 10.9442L6.32791 19.4198C6.26358 19.4842 6.21512 19.5626 6.18635 19.6489L5.64415 21.2755L5.15598 21.7637C4.28137 22.6384 4.28131 24.0616 5.15598 24.9363C6.03065 25.811 7.45385 25.8109 8.32852 24.9363L8.81669 24.4481L10.4433 23.9059C10.5296 23.8772 10.608 23.8287 10.6724 23.7644L19.1481 15.2887L20.4917 16.6322C20.7205 16.861 21.0915 16.861 21.3204 16.6322L23.0783 14.8743C23.3071 14.6455 23.3071 14.2745 23.0783 14.0456L21.7347 12.702L24.694 9.74278C25.2742 9.16255 25.5937 8.39113 25.5937 7.57054ZM14.8036 17.9757H9.42938L15.6323 11.7729L18.3194 14.4599L14.8036 17.9757ZM20.906 15.3891L14.7031 9.18623L15.6322 8.257L21.8351 14.4599L20.906 15.3891ZM23.8652 8.91411L20.906 11.8734L18.2189 9.18623L21.1781 6.22698C21.919 5.48614 23.1245 5.48609 23.8652 6.22698C24.6024 6.93424 24.6023 8.20684 23.8652 8.91411Z" fill="#122C65" />
                              </svg></span>
                            </div>
                            {showSecondaryPicker && <HexColorPicker color={secondaryColor} onChange={setSecondaryColor} />}
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                  <div className="col-lg-6">
                    <FloatingLabel
                      controlId="floatingInput"
                      // label="Company Overview/Brief"
                      className="mb-3 form-floating-lb w-100"
                    >
                      <textarea
                        className="form-float w-100 textarea"
                        type="text"
                        placeholder="Company Overview/Brief"
                        rows={2}
                      />
                    </FloatingLabel>
                  </div>
                </div>
                <div className="row contact-details">
                  <h3>Contact Details</h3>
                  <div className="col-lg-6">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email id"
                      className="mb-3 form-floating-lb email"
                    >
                      <Form.Control
                        className="form-float"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleChange}
                      />
                      {email && (
                        <div className="validation">
                          {isValid ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <g clip-path="url(#clip0_3619_4848)">
                                <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#122C65" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.08992 10.171L2.77245 7.76758C2.45518 7.43853 2.47339 6.91793 2.81297 6.61049C3.15254 6.30305 3.6898 6.32074 4.00707 6.64974L5.79467 8.50366L8.62419 5.9419C8.64964 5.91883 8.67623 5.89771 8.70373 5.87827L10.0343 4.67361C10.3739 4.36617 10.9112 4.38387 11.2285 4.71292C11.5457 5.04192 11.5275 5.56257 11.1879 5.87L7.12389 9.54945L7.11955 9.54496L5.71374 10.8177L5.08992 10.171Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_3619_4848">
                                  <rect width="14" height="14" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ) : (
                            <span className="error-text">Invalid email</span>
                          )}
                        </div>
                      )}
                    </FloatingLabel>
                  </div>
                  <div className="col-lg-6">
                    <div className="phone-cont">

                      <Select options={country} placeholder="+91" />

                      {/* Phone Number Input */}
                      <FloatingLabel
                        controlId="floatingInput"
                        // label="Company Name Or Business Name"
                        className="mb-3 form-floating-lb email"
                      >
                        <Form.Control
                          className="form-float"
                          type="text"
                          placeholder="Enter phone number"
                          value={phone}
                          onChange={handlePhoneChange}
                          maxLength={10}

                        />
                        <div className="validation">
                       
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_3619_4848)">
                              <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#122C65" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.08992 10.171L2.77245 7.76758C2.45518 7.43853 2.47339 6.91793 2.81297 6.61049C3.15254 6.30305 3.6898 6.32074 4.00707 6.64974L5.79467 8.50366L8.62419 5.9419C8.64964 5.91883 8.67623 5.89771 8.70373 5.87827L10.0343 4.67361C10.3739 4.36617 10.9112 4.38387 11.2285 4.71292C11.5457 5.04192 11.5275 5.56257 11.1879 5.87L7.12389 9.54945L7.11955 9.54496L5.71374 10.8177L5.08992 10.171Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_3619_4848">
                                <rect width="14" height="14" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        
                      </div>
                      </FloatingLabel>
                      <p>Phone no.</p>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Select options={state} placeholder="Select state *" />
                  </div>
                  <div className="col-lg-6">
                    <Select options={state} placeholder="Select city *" />
                  </div>
                  <div className="col-lg-12">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter address"
                      className="mb-3 form-floating-lb"
                    >
                      <Form.Control
                        className="form-float"
                        type="text"
                        placeholder="Enter address"
                      />
                    </FloatingLabel>
                  </div>
                </div>
                <div className="row contact-details other-details">
                  <h3>Others details</h3>
                  <div className="col-lg-12">
                    <h4>Name of the top 3 products or services</h4>
                    <div className="d-flex gap-3">
                      <Form.Check
                        type="radio"
                        label="Product"
                        name="businessType"
                        className="business-name-radio"
                      />
                      <Form.Check
                        type="radio"
                        label="Services"
                        name="businessType"
                        className="business-name-radio"
                      />
                      <Form.Check
                        type="radio"
                        label="Product/Service"
                        name="businessType"
                        className="business-name-radio"
                      />
                    </div>
                  </div>
                  <div className="tagslist">

                    <div className="tag-seract">

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Company Name Or Business Name"
                        className="mb-3 form-floating-lb"
                      >
                        <Form.Control
                          className="form-float"
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="E.g. Cereals, Fruits and vegetables, etc.  "
                        />
                      </FloatingLabel>
                      <Button onClick={addTag} className="add-btn">
                        Add +
                      </Button>
                    </div>
                    <div className="tag-container">
                      {tags.map((tag, index) => (
                        <h4
                          key={index}
                        >
                          {tag}
                        </h4>
                      ))}
                    </div>

                  </div>


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
            ) : (
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