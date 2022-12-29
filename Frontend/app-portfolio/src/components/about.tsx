import React, { useState, useEffect } from 'react';
import '../styles/about.css';
import { config } from "../data/config";

function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1000);
    }, []);

    return (
        <div id='about-me' className='about-me'>
            <div className={`slide-in-from-left ${isVisible ? 'visible' : ''}`}>
                <h1 >{config.aboutMe.title}</h1>
                <p >{config.aboutMe.description}</p>
            </div>
            <div className='about-me-image'>
                <img className={`slide-in-from-right ${isVisible ? 'visible' : ''}`} width="400" src={config.aboutMe.image} alt='about-me' />
            </div>
        </div>
    );
}

export default AboutMe;
