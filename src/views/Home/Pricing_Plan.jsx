import React from 'react'
import FixedVideo from "./../../assets/images/video/fixed-btn-animation.mp4";
import { Container, Row, Col } from "react-bootstrap";


const Pricing_Plan = () => {
    return (
        <div className="section pricing_plan">
            <div class="video_wrapper">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={FixedVideo}
                    type="video/mp4"
                ></video>
            </div>
            <Container>
                <div className="section_heading position-relative z-1">
                    <h2 className="heading text-light">Pricing Plans</h2>
                </div>

                <div className="pricing_items_group">
                    <div className="pricing_item">
                        <div className="ps-2">
                            <h3 className="item_title">Basic</h3>
                            <p className="item_desc">
                                Best for organizations or personalities looking for a dynamic
                                presence and constantly.
                            </p>
                            <div className="price_value">
                                <h1>
                                    <span>₹</span>2,099/-
                                </h1>
                            </div>
                        </div>
                        <a href="#!" className="bd-btn-link">
                            Get Started
                        </a>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Website Designing</span>
                            </li>
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Full new features access</span>
                            </li>
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Up to 5 Static Pages</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pricing_item active">
                        <div className="ps-2">
                            <h3 className="item_title">Premium</h3>
                            <p className="item_desc">
                                Best for organizations or personalities looking for a dynamic
                                presence and constantly.
                            </p>
                            <div className="price_value">
                                <h1>
                                    <span>₹</span>1,199/-
                                </h1>
                            </div>
                        </div>
                        <a href="#!" className="bd-btn-link">
                            Get Started
                        </a>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Website Designing</span>
                            </li>
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Full new features access</span>
                            </li>
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Up to 5 Static Pages</span>
                            </li>
                        </ul>
                    </div>
                    <div className="pricing_item">
                        <div className="ps-2">
                            <h3 className="item_title">Enterprise</h3>
                            <p className="item_desc">
                                Best for organizations or personalities looking for a dynamic
                                presence and constantly.
                            </p>
                            <div className="price_value">
                                <h1>
                                    <span>₹</span>11,199/-
                                </h1>
                            </div>
                        </div>
                        <a href="#!" className="bd-btn-link">
                            Get Started
                        </a>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Website Designing</span>
                            </li>
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Full new features access</span>
                            </li>
                            <li>
                                <span className="list_item_icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_674_2101)">
                                            <path
                                                d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z"
                                                fill="#0027B0"
                                            />
                                            <path
                                                d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z"
                                                fill="#FAFAFA"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_674_2101">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="list_item_text">Up to 5 Static Pages</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Pricing_Plan