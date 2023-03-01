import React, { useState, useEffect } from 'react';
import '../styles/about.css';
import { config } from "../data/config";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Item {
    title: string;
    description: string;
}

const AboutMe = () => {
    const [items, setItems] = useState<Item[]>([
        {
            title: 'Goal',
            description: 'I aim to develop problem-solving skills, critical thinking abilities, and effective communication skills, all of which are essential for working collaboratively in a team environment and delivering software projects that meet the needs of stakeholders. My ultimate goal as a student software engineer is to become a well-rounded professional who can contribute meaningfully to the software development industry.',
        },
        {
            title: 'Interest',
            description: 'I am particularly interested in backend development and have experience working with REST APIs. In my university projects and personal projects, I have demonstrated my ability to design and implement efficient and scalable solutions, and I am always looking for opportunities to learn and grow as a software engineer.',
        },
        {
            title: 'Hobbies',
            description: 'My main excitement comes from writing simple programs that make my life easier and lets me be a little more lazier. Apart from that, I really enjoy working out at the gym, playing video games, watching movies, and listening to music.',
        },
    ]);

    const [currentItemIndex, setCurrentItemIndex] = useState(0);


    const handleLeftClick = () => {
        if (currentItemIndex > 0) {
            setCurrentItemIndex(currentItemIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (currentItemIndex < items.length - 1) {
            setCurrentItemIndex(currentItemIndex + 1);
        }
    };

    return (
        <div id="about-me" className="about-me">

            <h2 className="about-me-title">{config.aboutMe.title}</h2>
            <div className="arrow left-arrow" onClick={handleLeftClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="carousel-item">
                <div className="carousel-card">
                    <h2>{items[currentItemIndex].title}</h2>
                    <p>{items[currentItemIndex].description}</p>
                </div>
            </div>
            <div className="arrow right-arrow" onClick={handleRightClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default AboutMe;
