import React from 'react';
import '../styles/projects.css';
import { config } from '../data/config';

function Projects() {

    return (
        <div id='projects' className='projects'>
            <h2>Projects</h2>
            <div className='card-container'>
                {Object.entries(config.projects).map(([key, value]) => (
                    <div className='card' onClick={() => window.open(value.link)}>
                        <h4 className='card__title'>{value.title}</h4>
                        <p className='card__description'>{value.description}</p>
                        <div className='card__tools'>
                            <ul>
                                {value.tools.map(tools => (
                                    <li key={tools}>{tools}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Projects;
