import React from 'react'
import ProfileImage from "../assets/profile.jpg"
import Footer from './common/Footer'

const skillGroups = [
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Redux Toolkit", "Tailwind CSS", "Responsive Design", "Mobile-First Development"] },
    { title: "Backend", items: ["Node.js", "Express.js", "REST API Development", "JSON", "AJAX"] },
    { title: "Database", items: ["MongoDB", "Mongoose ODM"] },
    { title: "Testing", items: ["Jest", "React Testing Library", "Unit Testing", "Integration Testing", "Snapshot Testing"] },
    { title: "Deployment & DevOps", items: ["Vercel", "Netlify", "Heroku", "Git", "GitHub", "CI/CD", "Environment Configuration"] },
    { title: "Programming Concepts", items: ["DOM Manipulation", "Fetch API", "Form Validation", "Schema Design"] },
]

function About() {
  return (
    <div className='page-container inner-page'>
        <section className='about-intro'>
            <div className='about-photo'><img src={ProfileImage} alt="Bercis Lisan" /></div>
            <div className='about-copy'>
                <p className='eyebrow'>01 / About the developer</p>
                <h1 className='section-heading'>A developer who<br /><span className='accent'>cares about details.</span></h1>
                <p className='section-intro'>
                    Hi, I'm <strong>Bercis Lisan</strong>, a MERN Stack Developer who enjoys turning ideas
                    into clean, functional, and responsive web applications. I work across the full stack —
                    from building intuitive user interfaces with React and Tailwind CSS, to designing robust
                    APIs and databases with Node.js, Express, and MongoDB.
                </p>
                <p className='section-intro'>
                    I'm always exploring new tools and best practices to write efficient, maintainable code,
                    and I love collaborating on projects that solve real problems.
                </p>
                <div className='hero-actions'>
                    <a href="mailto:bercislisan569@gmail.com" className='button-style'>Email me <span>↗</span></a>
                    <a href="https://github.com/Bercis-Lisan" target="_blank" rel="noreferrer" className='button-style button-secondary'>GitHub</a>
                    <a href="https://www.linkedin.com/in/bercis-lisan-s" target="_blank" rel="noreferrer" className='button-style button-secondary'>LinkedIn</a>
                </div>
            </div>
        </section>

        <section className='skills-section'>
            <p className='eyebrow'>02 / Capabilities</p><h2 className='section-heading'>A flexible toolkit<br /><span className='accent'>for real products.</span></h2>
            <div className='skill-groups'>
                {skillGroups.map((group) => (
                    <div key={group.title} className='skill-group surface'>
                        <h3>{group.title}</h3>
                        <ul>
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        <br />

        <Footer/>
    </div>
  )
}

export default About
