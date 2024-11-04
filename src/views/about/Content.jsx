import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Content = () => {
    const [clutter, setClutter] = useState("");
    let contentScrollTrigger = null;

    useEffect(() => {
        const titleText = "BestRate makes building your website effortless. With our user-friendly tools, stunning designs, and SEO-ready features, your site will stand out and grow your business fast.";

        const clutteredText = titleText.split("").map((char) => (
            `<span className="span_text">${char}</span>`
        )).join("");

        setClutter(clutteredText);
    }, []);

    useEffect(() => {
        const titleElement = document.querySelectorAll('#about_Content .title_wrap #page2 .span_text');

        if (titleElement.length) {
            // Store the ScrollTrigger instance in a variable
            contentScrollTrigger = ScrollTrigger.create({
                trigger: "#about_Content",
                start: '-100% top ',
                end: '150% bottom ',
                scroller: "body",
                scrub: 5,
                // markers: true,
                animation: gsap.to(titleElement, {
                    stagger: 0.3,
                    color: '#000000',
                    opacity: 1,
                    duration: 9.5,
                    ease: "slow(9.5, 9.5)",
                })
            });
        }

        return () => {
            if (contentScrollTrigger) {
                contentScrollTrigger.kill();
            }
        };
    }, [clutter]);

    return (
        <>
            <div className="about_Content section" id='about_Content'>
                <div className="container">
                    <div className="title_wrap">
                        <h1 className="title" id="page2" dangerouslySetInnerHTML={{ __html: clutter }} />
                    </div>

                </div>
            </div>
            <div className="content_wrap section pt-0">
                <div className="container">
                    <h2 className="heading text-start mb-3">
                        The BestRate Story: Where Vision Meets Reality
                    </h2>
                    <p>
                        Once upon a time, in a small creative studio tucked away in a bustling city, a group of dreamers came together. Each had their own talent design, development, storytelling but they shared a common frustration: the online world was growing fast, yet so many businesses were left behind, struggling to create websites that matched their potential.
                    </p>
                    <p>
                        One rainy evening, over coffee and big ideas, they set out on a mission to change that. They envisioned a place where anyone regardless of tech skills could build a website that looked stunning and worked perfectly. But they wanted more than just another website builder. They wanted to create an experience, where creativity met functionality, and where businesses could thrive.
                    </p>
                    <p>That night, BestRate was born.</p>
                    <p>
                        Armed with ambition and a belief in the power of simplicity, they set out to create a platform that gave entrepreneurs, small businesses, and creatives the tools to design, build, and launch their own websites. It wasn’t just about templates and features it was about crafting a digital space where businesses could grow, connect, and stand out.
                    </p>
                    <p>
                        The journey wasn’t always easy. There were challenges, setbacks, and a few sleepless nights. But their passion never wavered. With every obstacle, they learned, adapted, and innovated transforming BestRate into a platform trusted by thousands of businesses around the world.
                    </p>
                    <p>
                        Today, BestRate isn’t just a tool it’s a community of creators. It’s where ideas come to life, where visions turn into reality, and where the ordinary becomes extraordinary. And while the story of BestRate started with a small team of dreamers, it continues with you. Every website built, every business launched, is a part of our story.
                    </p>
                    <p>
                        So, what’s next in our journey? Let’s find out together.
                    </p>
                </div>
            </div>
        </>
    );
};
