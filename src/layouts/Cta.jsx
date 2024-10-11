import React from 'react'
import blog1 from './../../src/assets/images/blog1.png'
import blog2 from './../../src/assets/images/blog2.png'
import blog3 from './../../src/assets/images/blog3.png'
import clickarrow from './../../src/assets/images/clickarrow.png'
import oneclick from './../../src/assets/images/oneclick.png'
import { FaArrowUpLong } from "react-icons/fa6";

export const Cta = () => {
    return(
        <div className="section mission">
          <div className="content">
            <div className="container text-center">
              <h2>Your Success is Our Mission</h2>
              <a href="#!" className="button btn-2">Get Started</a>
            </div>
          </div>
          <div className="back-text">
            <h2>
              INCIPERE
              </h2>
          </div>
        </div>
      )
}

export const Blogsection = () =>{
   return(
    <div className="section blogsection">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="content">
                        <h2 className="blog-heading">
                            A Holistic Ecosystem Build for Business to Start, Nourish & Prosper
                        </h2>
                    
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="content">
                     
                        <div className="blog-img-container">
                            <div className="blog-img">
                                <a href="#!">
                                    <img src={blog1} alt="" />
                                    <div className="title">
                                        <h4>Personalization in Digital Marketing: Strategies and Tools...</h4>
                                    </div>
                                    <div className="arrow" >
                                        <FaArrowUpLong />
                                    </div>
                                </a>
                            </div>
                            <div className="blog-img">
                              <a href="#!">
                                <img src={blog2} alt="" />
                                <div className="title">
                                    <h4>The Power of Social Proof: How to Use Customer Testimonials...</h4>
                                </div>
                                <div className="arrow">
                                    <FaArrowUpLong />
                                </div>
                              </a>
                            </div>
                            <div className="blog-img  side-blog">
                              <a href="#!">
                              <img src={blog3} alt="" />
                                <div className="title">
                                    <h4>Role of Artificial Intelligence in Digital Marketing: Opportunities and Challenges in India </h4>
                                </div>
                                <div className="arrow">
                                    <FaArrowUpLong />
                                </div>
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
   )
}

export const Oneclick = () =>{
    return(
        <div className="section oneclick">
            <div className="container">
                <div className="oneclick-container">
                    <div className="onetext">
                        <div className="oneday">
                            <img src={oneclick} alt="" />
                        </div>
                        <div className="oneclick-para">
                            <p>Take the first step to your success.</p>
                        </div>
                    </div>
                    <div className="click-arrow">
                        <img src={clickarrow} alt="" />
                    </div>
                    <div className="arrow">
                        <FaArrowUpLong />
                    </div>
                </div>
            </div>
        </div>
    )
}