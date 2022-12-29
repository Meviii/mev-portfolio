import React from 'react';
import '../styles/header.css';
import { config } from '../data/config';

function Header() {

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
            <div className="logo">
                <a href='/'>
                    <img width="40" src={config.header.logo} alt={config.header.title} />
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
            </div>
        </header>
    );
}

export default Header;
