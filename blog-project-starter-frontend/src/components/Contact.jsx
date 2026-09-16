import React from 'react'
import Footer from './common/Footer'

function Contact() {
  return (
    <div className='page-container inner-page contact-page'>
        <div className='contact-heading'><p className='eyebrow'>01 / Start a conversation</p><h1 className='section-heading'>Let’s make something<br /><span className='accent'>worth talking about.</span></h1></div>
        <p className='section-intro contact-intro'>
            I'm open to freelance work, collaborations, and full-time opportunities.
            Feel free to reach out through any of the channels below.
        </p>

        <div className='contact-grid'>
            <a href="mailto:bercislisan569@gmail.com" className='contact-card surface'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" />
                <h3>Email</h3><p>bercislisan569@gmail.com</p>
            </a>

            <a href="https://github.com/Bercis-Lisan" target="_blank" rel="noreferrer" className='contact-card surface'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <h3>GitHub</h3><p>Bercis-Lisan</p>
            </a>

            <a href="https://www.linkedin.com/in/bercis-lisan-s" target="_blank" rel="noreferrer" className='contact-card surface'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                <h3>LinkedIn</h3><p>bercis-lisan-s</p>
            </a>
        </div>

        <div className='contact-cta'>
            <a href="mailto:bercislisan569@gmail.com" className='button-style'>Send me an email <span>↗</span></a>
        </div>

        <Footer/>
    </div>
  )
}

export default Contact
