import React from 'react'
import ProfileImage from "../assets/profile.jpg"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'

const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
]

const projects = [
    {
        title: "Mail MERN App",
        description: "A full-stack email client style application built with the MERN stack, featuring authentication and CRUD operations on messages.",
        link: "https://mail-mern.vercel.app/",
        tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
        title: "Weather App",
        description: "A responsive weather forecast app that fetches live data from a weather API and displays current conditions for any city.",
        link: "https://weather-app-using-api-two.vercel.app/",
        tags: ["JavaScript", "API", "CSS"]
    },
]

function Home() {
    const navigate = useNavigate()
    return (
        <>
        <div className='page-container home-page'>
            <section className='hero-section'>
                <div className="hero-copy">
                    <h1>Hi, I am <span className='accent'>Bercis Lisan.</span></h1>
                    <p className='hero-role'>MERN Stack Developer</p>
                    <p className='section-intro'>I build fast, responsive, and scalable web applications using MongoDB, Express, React, and Node.js. Thoughtful interfaces, dependable systems, and work that feels good to use.</p>
                    <div className='hero-actions'>
                        <button className='button-style' onClick={() => navigate("/contact")}>Hire Me <span>↗</span></button>
                        <a className='button-style button-secondary' href="mailto:bercislisan569@gmail.com">Email Me</a>
                    </div>
                </div>
                <div className='hero-portrait'>
                    <div className='portrait-frame'><img src={ProfileImage} alt="Bercis Lisan" /></div>
                    <p className='portrait-note'>/ Bercis Lisan<br /><span>Full-stack developer</span></p>
                </div>
            </section>


            <section className='stack-section'>
                <div className='section-label'><span className='eyebrow'>/ Toolkit</span><h2 className='section-heading'>Built with the right<br /><span className='accent'>tools for the job.</span></h2></div>
                <div className='skills-grid'>
                    {skills.map((skill) => (
                        <div key={skill.name} className='skill-item'>
                            <img src={skill.icon} alt={skill.name} />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className='proof-section'>
                <div className='stat-list flex ' >
                    <div className='stat-card'><strong>15+</strong><span>Projects<br />completed</span>
                    </div>
                    <div className='stat-card'><strong>12+</strong><span>Technologies<br />learned</span>
                    </div>
                </div>

                <div className='proof-copy'>
                    <p className='eyebrow'>/ The approach</p>
                    <h2 className='section-heading'>Let’s build<br /><span className='accent'>something great.</span></h2>
                    <p className='section-intro'>Want to know more about my background and skills?</p>
                    <button className='button-style button-secondary' onClick={() => navigate("/about")}>More about me <span>↗</span></button>
                </div>
            </section>

            <section className='projects-section'>
                <div className='section-title-row'><div><p className='eyebrow'>/ Selected work</p><h2 className='section-heading'>Things I’ve<br /><span className='accent'>shipped.</span></h2></div><span className='project-count'>02 live projects</span></div>
                <div className='projects-grid'>
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className='project-card surface'
                        >
                            <div className='project-card-top'><span className='eyebrow'>0{projects.indexOf(project) + 1}</span><span className='project-arrow'>↗</span></div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='tag-list'>
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <span className='project-link'>Visit live site <span>↗</span></span>
                        </a>
                    ))}
                </div>
            </section>


            <section className='writing-banner'>
                <div><p className='eyebrow'>/ Field notes</p><h2 className='section-heading'>I like to write<br /><span className='accent'>about tech.</span></h2></div>
                <div><p className='section-intro'>I share practical notes, lessons, and ideas from the work behind the interface.</p><button className='button-style' onClick={() => navigate("/blogs")}>Read my blogs <span>↗</span></button></div>
            </section>

            </div>


            <Footer/>


        
        </>
    )
}

export default Home
