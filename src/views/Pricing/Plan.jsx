import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

// Define a separate PlanItem component to avoid redundancy
function PlanItem({ title, description, price, features, isActive, onMouseEnter, onMouseLeave }) {
    return (
        <div
            className={`pricing_item ${isActive ? 'active' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {isActive && (
                <div className="svg-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="282" viewBox="0 0 350 282" fill="none">
                        <g filter="url(#filter0_f_1489_3689)">
                            <path d="M356.992 32.8156C337.431 103.903 246.431 152.781 175.344 133.219C104.256 113.658 -46.6516 -23.05 -27.0898 -94.1376C-7.528 -165.225 175.095 -143.773 246.183 -124.212C317.271 -104.65 376.554 -38.272 356.992 32.8156Z" fill="#DDFFFD" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1489_3689" x="-172.824" y="-287.25" width="677.596" height="568.812" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_1489_3689" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            )}
            <div className="ps-2">
                <h3 className="item_title">{title}</h3>
                <p className="item_desc">{description}</p>
                <div className="price_value">
                    <h1><span>₹</span>{price}</h1>
                </div>
            </div>
            <a href="#!" className="bd-btn-link">Get Started</a>
            <ul className="icon_list unordered_list_block">
                {features.map((feature, index) => (
                    <li key={index}>
                        <span className="list_item_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_674_2101)">
                                    <path d="M9 0C4.0372 0 0 4.0372 0 9C0 13.9628 4.0372 18 9 18C13.9628 18 18 13.9628 18 9C18 4.0372 13.9628 0 9 0Z" fill="#5E5E5E" />
                                    <path d="M13.5617 7.09271L8.68666 11.9676C8.54041 12.1139 8.34842 12.1875 8.15643 12.1875C7.96445 12.1875 7.77246 12.1139 7.62621 11.9676L5.18875 9.53017C4.89542 9.23697 4.89542 8.76291 5.18875 8.46971C5.48195 8.17638 5.95587 8.17638 6.24921 8.46971L8.15643 10.3769L12.5013 6.03226C12.7944 5.73892 13.2684 5.73892 13.5617 6.03226C13.8549 6.32545 13.8549 6.79938 13.5617 7.09271Z" fill="#FAFAFA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_674_2101">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className="list_item_text">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Plan() {
    // Set initial state to 1 to make the Premium plan active by default
    const [hoveredIndex, setHoveredIndex] = useState(1);

    const pricingPlans = [
        {
            title: "Basic",
            description: "Best for organizations or personalities looking for a dynamic presence.",
            price: "2,099/-",
            features: ["Website Designing", "Full new features access", "Up to 5 Static Pages"],
        },
        {
            title: "Premium",
            description: "Ideal for those needing enhanced features and customization options.",
            price: "1,199/-",
            features: ["Website Designing", "Full new features access", "Up to 10 Static Pages"],
        },
        {
            title: "Enterprise",
            description: "Best for organizations or personalities looking for a dynamic presence.",
            price: "11,199/-",
            features: ["Website Designing", "Full new features access", "Up to 5 Static Pages"],
        }
    ];

    return (
        <div className="section pricing_plan plan">
            <Container>
                <div className="section_heading position-relative z-1">
                    <h2 className="heading text-dark">Pricing Plans</h2>
                </div>
                <div className="pricing_items_group">
                    {pricingPlans.map((plan, index) => (
                        <PlanItem
                            key={index}
                            title={plan.title}
                            description={plan.description}
                            price={plan.price}
                            features={plan.features}
                            isActive={hoveredIndex === index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(1)}
                        />
                    ))}
                </div>
                
            </Container>
        </div>
    );
}

export default Plan;
