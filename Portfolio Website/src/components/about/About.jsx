import React from 'react'

import './about.css'

import ME from '../../assets/ARYAN.jpeg'

import { FaAward } from 'react-icons/fa'

import { FiUsers } from 'react-icons/fi'

import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
    return (

        <section id="about">

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">



                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt="about image" />
                    </div>
                </div>



                <div className="about-content">

                    <div className="about-cards">

                        <article className="about-card">
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>

                        {/* <article className="about-card">
                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article> */}

                        <article className="about-card">
                            <AiFillFolderOpen className='about-icon' />
                            <h5>Projects</h5>
                            <small>80+</small>
                            <a href="https://github.com/AryanShukla108">Click Here</a>
                        </article>


                    </div>

                    <p>Ambitious, career-focused jobseeker, anxious to obtain an entry-level Front End Developer position to help launch career while achieving company goals also adept at creating successful websites that meet customer needs. Specializing in collaborating with customers to gather requirements, produce plans and improve designs for usability and functionality. Fully proficient in JavaScript, ReactJs.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>




            </div>
        </section>
    )
}

export default About