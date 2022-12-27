import React from 'react';
import '../styles/about.css';
import { config } from "../data/config";

function AboutMe() {
    return (
        <div id='about-me' className='about-me'>
            <div className='about-me-text'>
                <h1>{config.aboutMe.title}</h1>
                <p>{config.aboutMe.description}</p>
            </div>
        </div>
    );
}

export default AboutMe;
