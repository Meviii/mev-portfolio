import code from "../assets/images/About Me/code.png";
import github_social from "../assets/images/Footer/github.png";
import background from "../assets/images/Main/bg.png";

export const config = {
    header: {
        name: 'Mevlut "Mev" Saluk',
        title: "Software Engineer",
        nav_bar: {
            about_me: {
                text: "About",
                link: "about-me"
            },
            projects: {
                text: "Projects",
                link: "projects"
            },
            contact: {
                text: "Contact",
                link: "contact"
            }
        },
        background: background
    },
    aboutMe: {
        title: "About Me",
        description: `As a current software engineering student at RMIT, I am excited to combine my previous IT degree and passion for programming to pursue a career in web development or backend engineering. With experience in languages such as Python, C++, and Java, I have a strong foundation in programming and a proven ability to deliver high-quality projects.
        
        \nI am particularly interested in backend development and have experience working with REST APIs.In my university projects and personal projects, I have demonstrated my ability to design and implement efficient and scalable solutions, and I am always looking for opportunities to learn and grow as a software engineer.
        
        \nIn the future, I hope to work with a team of talented engineers to create innovative and impactful software solutions.I am eager to apply my skills and knowledge to challenging projects and continue to develop my expertise in web development and backend engineering.`,
        test: "test hello",
        image: code
    },
    projects: {
        workout_visualizer: {
            title: "Workout Visualizer",
            description: "A useful workout visualizer that formats and displays workout data from a SQLite database.",
            tools: ["Python", "PyQT5", "MVC", "SQLite", "GUI"],
            link: "https://github.com/Meviii/Workout-Visualizer"
        },
        scrabble_game: {
            title: "Scrabble Game",
            description: "A text based scrabble game that allows multiple players.",
            tools: ["C++", "Linked List", "ADT", "Blackbox Testing"],
            link: "https://github.com/Meviii/APT-Assignment-2"
        },
        scrabble_game_extension: {
            title: "Scrabble Game Extension",
            description: "This is a personal extension to the Scrabble Game with more advanced features.",
            tools: ["C++", "Custom Algorithms", "Linked List", "ADT", "Blackbox Testing"],
            link: "https://github.com/Meviii/APT-Assignment2-Individual"
        },
        md_online: {
            title: "MD Online - Telemedicine Applicaiton",
            description: "An application designed for a private clinic providing doctor/patient communications and a medical and appointment booking system.",
            tools: ["REST API", "MySQL", "Flutter", "Java", "Spring Boot"],
            link: "https://github.com/Meviii/SEPT2022"
        }
    },
    footer: {
        copyright: "© All rights are reserved | 2022 | Made with 💖 by Mev",
        socials: {
            github: {
                image: github_social,
                alt: "Github",
                link: "https://github.com/Meviii"
            }
        }
    }
}