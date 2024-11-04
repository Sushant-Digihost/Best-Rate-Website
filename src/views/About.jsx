import React, { useEffect } from 'react';
import { Headings } from './about/Headings';
import { Content } from './about/Content';
import { Values } from './about/Values';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 0);
    }, []);

    return (
        <>
            <Headings />
            <Content />
            <Values />
        </>
    );
};