import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from 'react-bootstrap'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EcosystemBuild = () => {

    const titles = [
        "Personalization in Digital Marketing: Strategies and Tools...",
        "Personalization in Digital Marketing: Strategies and Tools1...",
        "Personalization in Digital Marketing: Strategies and Tools...",
        "Personalization in Digital Marketing: Strategies and Tools...",
        "Personalization in Digital Marketing: Strategies and Tools..."
    ];

    const Ecosystem = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".ecosystem_items_grouped",
            {
                y: -200,
                opacity: 1,
                duration: 3,
                scrollTrigger: {
                    trigger: ".Ecosystem-Build",
                    pin: true,
                    pinSpacing: false,
                    markers: true,
                    scrub: 5,
                    scroller: "body",
                    start: 'top 0%',
                    // end: 'bottom -180%',
                    end : '+200%',
                }
            },
        )
    }, []);

    return (
        <>
            <div className="section Ecosystem-Build" ref={Ecosystem}>
                <Container>
                    <div className="ecosystem_content">
                        <Row className='justify-content-center'>
                            <Col lg={9}>
                                <h2 className="heading mb-2">A Holistic Ecosystem Build for <span className="d-lg-block">  Business to Start, Nourish & Prosper</span></h2>
                            </Col>
                            <Col md={4}>
                                <p className='text-start'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </p>
                            </Col>
                            <Col lg={12}>
                                <div className="big_btn text-center mt-4">
                                    <a href="#!" className="button">Take the next step!</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
            <div className="ecosystem_items_grouped">
                <div className="ecosystem_grid">
                    <div className='grid-item-1'>
                        <div className="ecosystem_item d-flex  flex-column justify-content-between">

                            <div className="ecosystem_item_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <circle cx="22.5" cy="7.5" r="7.5" fill="#B6FFFA" />
                                    <path d="M23.923 25.3125C23.6855 25.3125 23.448 25.225 23.2605 25.05C22.8855 24.6875 22.8855 24.1 23.248 23.725C25.3855 21.55 26.5605 18.675 26.5605 15.625C26.5605 9.25 21.373 4.0625 14.998 4.0625C8.62305 4.0625 3.43555 9.25 3.43555 15.625C3.43555 18.6625 4.59805 21.525 6.72305 23.7C7.08555 24.075 7.07305 24.6625 6.71055 25.025C6.33555 25.3875 5.74805 25.375 5.38555 25.0125C2.92305 22.4875 1.56055 19.15 1.56055 15.625C1.56055 8.2125 7.58555 2.1875 14.998 2.1875C22.4105 2.1875 28.4355 8.2125 28.4355 15.625C28.4355 19.1625 27.073 22.5125 24.5855 25.0375C24.4105 25.225 24.1605 25.3125 23.923 25.3125Z" fill="#122C65" />
                                    <path d="M14.9977 27.8125C12.1602 27.8125 9.84766 25.5 9.84766 22.6625C9.84766 19.825 12.1602 17.5 14.9977 17.5C17.8352 17.5 20.1477 19.8125 20.1477 22.65C20.1477 25.4875 17.8352 27.8125 14.9977 27.8125ZM14.9977 19.375C13.1852 19.375 11.7227 20.85 11.7227 22.65C11.7227 24.45 13.1977 25.925 14.9977 25.925C16.7977 25.925 18.2727 24.45 18.2727 22.65C18.2727 20.85 16.8102 19.375 14.9977 19.375Z" fill="#122C65" />
                                    <path d="M19.998 15.9375H19.0605C18.023 15.9375 17.1855 15.1 17.1855 14.0625V13.125C17.1855 11.575 18.448 10.3125 19.998 10.3125C21.548 10.3125 22.8105 11.575 22.8105 13.125C22.8105 14.675 21.548 15.9375 19.998 15.9375ZM19.998 12.1875C19.4855 12.1875 19.0605 12.6125 19.0605 13.125V14.0625H19.998C20.5105 14.0625 20.9355 13.6375 20.9355 13.125C20.9355 12.6125 20.5105 12.1875 19.998 12.1875Z" fill="#122C65" />
                                </svg>
                            </div>
                            <div className="item_content">
                                <h4 className="item_title">
                                    <a href='#!'>{titles[0]}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item-2'>
                        <div className="ecosystem_item d-flex  flex-column justify-content-between">

                            <div className="ecosystem_item_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <g clipPath="url(#clip0_925_1999)">
                                        <circle cx="7.5" cy="7.5" r="7.5" fill="#B6FFFA" />
                                        <path d="M27.0184 9.56371L19.2699 1.81524C17.8913 0.436588 15.6527 0.436588 14.2741 1.81524C13.7678 2.3215 13.4344 2.95554 13.302 3.64253C11.9155 2.38539 9.76739 2.42592 8.43234 3.7625C7.85598 4.33886 7.52103 5.06485 7.42603 5.81565C6.10813 5.16919 4.46624 5.39191 3.36953 6.48862C2.15759 7.70217 2.01271 9.58394 2.9349 10.9564C2.21834 11.0779 1.55779 11.4175 1.03284 11.9409C-0.344279 13.318 -0.344279 15.5597 1.03284 16.9368L3.51754 19.4215V22.2146C3.51754 26.0795 6.66273 29.2247 10.5276 29.2247H18.2045C20.4929 29.2247 22.6442 28.3336 24.2643 26.7151L27.0185 23.961C28.9408 22.0387 30.0001 19.4823 30.0001 16.7624C30.0001 14.0425 28.9408 11.486 27.0184 9.56371ZM25.9186 22.8595L23.1645 25.6136C21.8387 26.9378 20.0769 27.6668 18.206 27.6668H10.5276C7.5211 27.6668 5.07531 25.2211 5.07531 22.2145V20.9792L6.86055 22.766C7.16432 23.0697 7.65816 23.0697 7.96193 22.766C8.11302 22.6133 8.1894 22.4139 8.1894 22.2145C8.1894 22.0151 8.11462 21.8157 7.96193 21.663L2.13422 15.8353C1.76188 15.463 1.55626 14.9661 1.55626 14.4395C1.55626 13.913 1.76188 13.416 2.13422 13.0437C2.88043 12.2975 4.18116 12.2975 4.92737 13.0437L6.86062 14.977C7.16439 15.2807 7.65824 15.2807 7.96201 14.977C8.11309 14.8243 8.18947 14.6249 8.18947 14.4255C8.18947 14.2261 8.11469 14.0267 7.96201 13.874L4.47099 10.383C3.70141 9.61344 3.70141 8.35944 4.47099 7.58986C5.24056 6.82029 6.49456 6.82029 7.26414 7.58986L10.7552 11.0824C11.0589 11.3862 11.5528 11.3862 11.8565 11.0824C12.0092 10.9297 12.084 10.7304 12.084 10.531C12.084 10.3315 12.0092 10.1322 11.8565 9.9795L9.53387 7.65682C9.16153 7.28448 8.9559 6.78757 8.9559 6.26101C8.9559 5.73445 9.16153 5.23754 9.5354 4.8652C10.305 4.09563 11.559 4.09563 12.3286 4.8652L14.6512 7.18788C14.955 7.49165 15.4488 7.49165 15.7526 7.18788C15.9037 7.03519 15.9801 6.83584 15.9801 6.63642C15.9801 6.437 15.9053 6.23765 15.7526 6.08496L15.3772 5.70955C14.6076 4.93998 14.6076 3.68598 15.3772 2.9164C16.1234 2.17019 17.4242 2.17019 18.1704 2.9164L25.9188 10.6649C27.5467 12.2927 28.444 14.4597 28.444 16.7621C28.444 19.0646 27.5465 21.2315 25.9186 22.8595Z" fill="#122C65" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_925_1999">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="item_content">
                                <h4 className="item_title">
                                    <a href='#!'>{titles[1]}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item-3'>
                        <div className="ecosystem_item d-flex  flex-column justify-content-between">

                            <div className="ecosystem_item_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <circle cx="7.5" cy="8.75" r="7.5" fill="#B6FFFA" />
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M15.25 4.42308C13.3439 4.42308 10.7844 4.63228 8.99428 4.80588C8.25146 4.87791 7.67176 5.46638 7.61426 6.21241C7.43625 8.52193 7.18549 12.266 7.18549 15C7.18549 17.734 7.43625 21.4781 7.61426 23.7876C7.67176 24.5336 8.25146 25.1221 8.99428 25.1941C10.7844 25.3678 13.3439 25.5769 15.25 25.5769C17.1561 25.5769 19.7156 25.3678 21.5058 25.1941C22.2485 25.1221 22.8283 24.5336 22.8857 23.7876C23.0638 21.4781 23.3145 17.734 23.3145 15C23.3145 12.266 23.0638 8.52193 22.8857 6.21241C22.8283 5.46638 22.2485 4.87791 21.5058 4.80588C19.7156 4.63228 17.1561 4.42308 15.25 4.42308ZM8.80627 2.89189C10.6011 2.71784 13.2419 2.5 15.25 2.5C17.2581 2.5 19.8989 2.71784 21.6938 2.89189C23.3786 3.05529 24.6869 4.39506 24.8156 6.06556C24.9936 8.37589 25.25 12.1852 25.25 15C25.25 17.8149 24.9936 21.6241 24.8156 23.9345C24.6869 25.605 23.3786 26.9448 21.6938 27.1081C19.8989 27.2821 17.2581 27.5 15.25 27.5C13.2419 27.5 10.6011 27.2821 8.80627 27.1081C7.12136 26.9448 5.81319 25.605 5.68442 23.9345C5.50635 21.6241 5.25 17.8149 5.25 15C5.25 12.1852 5.50635 8.37589 5.68442 6.06556C5.81319 4.39506 7.12136 3.05529 8.80627 2.89189Z" fill="#122C65" />
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M12.9922 21.4107C12.9922 20.8797 13.4256 20.4492 13.9599 20.4492H16.5407C17.0751 20.4492 17.5084 20.8797 17.5084 21.4107C17.5084 21.9417 17.0751 22.3722 16.5407 22.3722H13.9599C13.4256 22.3722 12.9922 21.9417 12.9922 21.4107Z" fill="#122C65" />
                                    <path d="M16.5417 8.59066C16.5417 9.29871 15.9639 9.87271 15.2513 9.87271C14.5387 9.87271 13.9609 9.29871 13.9609 8.59066C13.9609 7.88259 14.5387 7.30859 15.2513 7.30859C15.9639 7.30859 16.5417 7.88259 16.5417 8.59066Z" fill="#122C65" />
                                </svg>
                            </div>
                            <div className="item_content">
                                <h4 className="item_title">
                                    <a href='#!'>{titles[2]}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item-4'>
                        <div className="ecosystem_item d-flex  flex-column justify-content-between">

                            <div className="ecosystem_item_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <circle cx="8.75" cy="22.5" r="7.5" fill="#B6FFFA" />
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M1.25 3.44936C1.25 2.92505 1.68337 2.5 2.21796 2.5H3.16584C4.95578 2.5 6.4656 3.80725 6.68761 5.54925L6.9443 7.56329H25.241C26.6217 7.56329 27.6794 8.76778 27.4745 10.1071L26.0908 19.1556C25.8301 20.8596 24.3376 22.1203 22.5807 22.1203H10.2486C8.4918 22.1203 6.99932 20.8596 6.73872 19.1556L5.13255 8.65349L5.12931 8.63041L4.76664 5.78475C4.66572 4.99294 3.97944 4.39874 3.16584 4.39874H2.21796C1.68337 4.39874 1.25 3.97369 1.25 3.44936ZM7.21379 9.46203L8.65322 18.874C8.77167 19.6485 9.45008 20.2215 10.2486 20.2215H22.5807C23.3794 20.2215 24.0577 19.6485 24.1763 18.874L25.56 9.82543C25.5893 9.63409 25.4383 9.46203 25.241 9.46203H7.21379Z" fill="#122C65" />
                                    <path d="M24.1574 26.2345C24.1574 26.9336 23.5795 27.5004 22.8668 27.5004C22.154 27.5004 21.5762 26.9336 21.5762 26.2345C21.5762 25.5355 22.154 24.9688 22.8668 24.9688C23.5795 24.9688 24.1574 25.5355 24.1574 26.2345Z" fill="#122C65" />
                                    <path d="M11.2531 26.2345C11.2531 26.9336 10.6753 27.5004 9.96249 27.5004C9.2497 27.5004 8.67188 26.9336 8.67188 26.2345C8.67188 25.5355 9.2497 24.9688 9.96249 24.9688C10.6753 24.9688 11.2531 25.5355 11.2531 26.2345Z" fill="#122C65" />
                                </svg>
                            </div>
                            <div className="item_content">
                                <h4 className="item_title">
                                    <a href='#!'>{titles[3]}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className='grid-item-5'>
                        <div className="ecosystem_item d-flex  flex-column justify-content-between">

                            <div className="ecosystem_item_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <circle cx="22.5" cy="12.5" r="7.5" fill="#B6FFFA" />
                                    <path d="M18.75 4.6875C19.2677 4.6875 19.6875 4.26776 19.6875 3.75C19.6875 3.23224 19.2677 2.8125 18.75 2.8125H14.9435C12.6477 2.81249 10.8483 2.81249 9.4206 2.96716C7.96368 3.12501 6.7832 3.4529 5.7753 4.18519C5.16511 4.62851 4.62851 5.16511 4.18519 5.77529C3.4529 6.7832 3.12501 7.96368 2.96716 9.4206C2.81249 10.8483 2.81249 12.6477 2.8125 14.9435V15.0565C2.81249 17.3523 2.81249 19.1517 2.96716 20.5794C3.12501 22.0364 3.4529 23.2168 4.18519 24.2248C4.62851 24.8349 5.16511 25.3715 5.77529 25.8148C6.7832 26.5471 7.96368 26.875 9.4206 27.0329C10.8482 27.1875 12.6478 27.1875 14.9434 27.1875H15.0566C17.3522 27.1875 19.1517 27.1875 20.5794 27.0329C22.0364 26.875 23.2168 26.5471 24.2248 25.8148C24.8349 25.3715 25.3715 24.8349 25.8148 24.2248C26.5471 23.2168 26.875 22.0364 27.0329 20.5794C27.1875 19.1517 27.1875 17.3522 27.1875 15.0566V11.25C27.1875 10.7322 26.7677 10.3125 26.25 10.3125C25.7323 10.3125 25.3125 10.7322 25.3125 11.25V15C25.3125 17.3645 25.3113 19.0625 25.1688 20.3775C25.0281 21.6749 24.7592 22.4876 24.2979 23.1226C23.9702 23.5736 23.5736 23.9702 23.1226 24.2979C22.4876 24.7592 21.6749 25.0281 20.3775 25.1688C19.0625 25.3113 17.3645 25.3125 15 25.3125C12.6355 25.3125 10.9375 25.3113 9.62255 25.1688C8.32516 25.0281 7.5124 24.7592 6.87739 24.2979C6.42639 23.9702 6.02978 23.5736 5.7021 23.1226C5.24074 22.4876 4.97181 21.6749 4.83125 20.3775C4.68879 19.0625 4.6875 17.3645 4.6875 15C4.6875 12.6355 4.68879 10.9375 4.83125 9.62256C4.97181 8.32516 5.24074 7.5124 5.7021 6.87739C6.02978 6.42639 6.42639 6.02978 6.87739 5.7021C7.5124 5.24074 8.32516 4.97181 9.62256 4.83125C10.9375 4.68879 12.6355 4.6875 15 4.6875H18.75Z" fill="#122C65" />
                                    <path d="M7.90852 18.1598C7.6805 18.6247 7.87248 19.1864 8.33733 19.4144C8.80218 19.6424 9.36387 19.4504 9.5919 18.9856L11.4173 15.2643C11.9831 14.1108 13.6461 14.1672 14.1325 15.3563C15.2315 18.0426 18.9882 18.1698 20.2665 15.5641L22.092 11.8428C22.32 11.3779 22.128 10.8162 21.6631 10.5882C21.1982 10.3602 20.6366 10.5522 20.4085 11.017L18.5831 14.7383C18.0173 15.8918 16.3543 15.8354 15.868 14.6463C14.769 11.96 11.0121 11.8328 9.73393 14.4386L7.90852 18.1598Z" fill="#122C65" />
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M21.875 5C21.875 6.72589 23.2741 8.125 25 8.125C26.7259 8.125 28.125 6.72589 28.125 5C28.125 3.27411 26.7259 1.875 25 1.875C23.2741 1.875 21.875 3.27411 21.875 5ZM23.75 5C23.75 5.69035 24.3096 6.25 25 6.25C25.6904 6.25 26.25 5.69035 26.25 5C26.25 4.30965 25.6904 3.75 25 3.75C24.3096 3.75 23.75 4.30965 23.75 5Z" fill="#122C65" />
                                </svg>
                            </div>
                            <div className="item_content">
                                <h4 className="item_title">
                                    <a href='#!'>{titles[4]}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EcosystemBuild