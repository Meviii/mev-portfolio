import React, { useState } from 'react';
import '../styles/header.css';
import { config } from '../data/config';

function Header() {

    const [homePageURL, setHomePageURL] = useState("/");

    const handleClick = (location: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        console.log(location);
        const division = document.getElementById(location);
        console.log(division);
        if (division) {
            division.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href={homePageURL}>
                        <img width="50" src={config.header.logo} alt={config.header.title} />
                    </a>
                </div>
                <div className="nav-bar">
                    <nav>
                        <ul>
                            {Object.entries(config.header.nav_bar).map(([key, value]) => (
                                <a onClick={handleClick.bind(self, value.link)} href={value.link}>
                                    <li>{value.text}</li>
                                </a>
                            ))}
                        </ul>
                    </nav>
                    <a href={config.header.connect_button.link} target="_blank">
                        <button>{config.header.connect_button.text}</button>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
