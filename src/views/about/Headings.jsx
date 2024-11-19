import React from 'react';
import Typewriter from 'typewriter-effect';
import about_img from './../../assets/images/about_img.png';

export const Headings = () => {
    return (
        <>
            <div className="about_section section">
                <div className="container">
                    <div className="about_content">
                        <div className="section_heading" style={{ minHeight: '66vh' }}>
                            {/* Set minHeight based on the expected full height */}
                            <h1 className="heading_title title">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        // delay: 50,
                                        deleteSpeed: 150,
                                        typeSpeed: 50,
                                        showCursor: true
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(`<span class="current">Best people.</span><br/>`)
                                            .pauseFor(800)
                                            .typeString(`<span class="current">Best experience.</span><br/>`)
                                            .pauseFor(800)
                                            .typeString(`<span class="current">Best results.</span>`)
                                            .start();
                                    }}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_image">
                <img src={about_img} alt="About_img" className='img-fluid' />
            </div>

        </>
    );
};
