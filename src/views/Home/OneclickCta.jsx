import React from 'react'
import clickarrow from './../../assets/images/clickarrow.png'
import oneclick from './../../assets/images/oneclick.png'

function OneclickCta() {
    return (
        <div className="section oneclick">
            <div className="fluid-container px-5">
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
                        <div className="circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                            >
                                <path
                                    d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                                    fill="#0026AC"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                                className="svg2"
                            >
                                <path
                                    d="M26.2138 14.8108C26.2136 14.8108 26.2133 14.8107 26.213 14.8107L21.1623 14.8229C20.784 14.8239 20.4779 15.1313 20.4788 15.5097C20.4797 15.8881 20.7872 16.1941 21.1656 16.1932L24.5565 16.185L14.2966 26.4449C14.0291 26.7125 14.0291 27.1463 14.2966 27.4138C14.5642 27.6814 14.998 27.6814 15.2656 27.4138L25.5254 17.154L25.5172 20.5448C25.5163 20.9232 25.8224 21.2307 26.2007 21.2316C26.5792 21.2325 26.8866 20.9264 26.8875 20.5481L26.8998 15.4975C26.8998 15.4972 26.8997 15.4969 26.8997 15.4966C26.9001 15.1175 26.5918 14.8103 26.2138 14.8108Z"
                                    fill="#0026AC"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneclickCta