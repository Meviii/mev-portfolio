import React, { useState, useEffect } from 'react';
import '../styles/overview.css';
import { config } from "../data/config";

function Overview() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1000);
    }, []);

    return (
        <div id="overview" className="overview">
            <div className={`slide-in-from-left ${isVisible ? 'visible' : ''}`}>
                <div className="overview-details">
                    <h1 className="title">{config.overview.title}</h1>
                    <p className="description">{config.overview.description}</p>
                </div>
            </div>
            <div className='overview-image'>
                <img className={`slide-in-from-right ${isVisible ? 'visible' : ''}`} width="500" src={config.overview.image} alt='about-me' />
            </div>
        </div>
    );
}

export default Overview;
