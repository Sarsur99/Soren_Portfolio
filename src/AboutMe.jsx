// AboutMe.js
import React from 'react';
import './AboutMe.css'; // Create a corresponding CSS file
import headshotImage from './assets/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import cssImage from './assets/css.jpeg';
import javascriptLG from './assets/javascript.jpeg';



function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        {/* Introduction */}
        <div className="about-me-intro">
          <div className="about-me-header">
            <img src={headshotImage} alt="Soren Sonstein" className="headshot" />
            <div className="intro-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I am Soren Sonstein, a skilled Frontend Web Developer based in Oceanside, California. My journey into the world of software engineering began unconventionally, forced to adapt to new means of education due to the pandemic. Known for my relentless commitment to excellence, I've developed efficient solutions that not only meet user needs but also drive business success. My recent project, Battlelab Oceanside, showcases my expertise in user-centric site development and real-world implications. With experience in e-commerce efficiency, organizational methods, and a strong track record in client-facing roles, I thrive in collaborative environments. My skills span frontend and backend development, database management, API integration, and security, while my projects demonstrate a dedication to optimization and user engagement. I've also worked in Internet sales and have a background in psychology, making me a well-rounded professional.
              </p>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="about-me-skills">
          <h3>
            Skills <FontAwesomeIcon icon={faLightbulb} className="icon" />
          </h3>
          <div className="skill-logos">
            <i class="ri-html5-line"></i>
            <i class="ri-css3-line"></i>
            <i class="ri-javascript-line"></i>
            <i class="ri-reactjs-line"></i> 
          </div>
        </div>
        {/* Work Ethic */}
        <div className="about-me-ethic">
          <h3>Work Ethic</h3>
          <p>
            I'm committed to delivering high-quality results and continuously improving my skills. My work philosophy is centered on [Your Work Philosophy], and I value [Your Values].
          </p>
        </div>
        {/* Achievements */}
        <div className="about-me-achievements">
          <h3>Achievements</h3>
          <p>
            I've been honored with [Awards or Honors] for my contributions to [Your Field].
          </p>
        </div>
        {/* Projects */}
        <div className="about-me-projects">
          <h3>Projects</h3>
          <ul>
            <li>
              <a href="[Project Link]">[Project Title]</a> - [Brief Description]
            </li>
            <li>
              <a href="[Project Link]">[Project Title]</a> - [Brief Description]
            </li>
          </ul>
        </div>
        {/* Passions and Interests */}
        <div className="about-me-interests">
          <h3>Passions and Interests</h3>
          <p>
            Outside of coding, I enjoy [mention your interests or hobbies, e.g., hiking, photography, gaming].
          </p>
        </div>
        {/* Testimonials */}
        <div className="about-me-testimonials">
          <h3>Testimonials</h3>
          <blockquote>
            "[Client or Colleague Name] has been an absolute pleasure to work with. Their dedication and expertise are remarkable."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
