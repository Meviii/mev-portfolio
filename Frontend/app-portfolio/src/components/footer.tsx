import React from 'react';
import '../styles/footer.css';
import { config } from '../data/config';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="copyright">
                    <p>{config.footer.copyright}</p>
                </div>
                <div className="social-container">
                    {Object.entries(config.footer.socials).map(([key, value]) => (
                        <div className='social-buttons'>
                            <a href={value.link} target="_blank">
                                <img width="30" src={value.image} alt={value.alt} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;