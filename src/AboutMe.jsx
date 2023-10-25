// AboutMe.js
import React from 'react';
import './AboutMe.css'; // Create a corresponding CSS file
import headshotImage from './assets/headshot.jpg';

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
                  Hello, I'm Soren Sonstein! I'm a passionate web developer with a love for creating beautiful and functional websites.
                </p>
              </div>
            </div>
          </div>
          {/* Background */}
          <div className="about-me-background">
            <h3>Background</h3>
            <p>
              I hold a degree in [Your Degree] from [Your University]. Over the years, I've gained experience working on [Relevant Experiences]. These experiences have shaped my journey and instilled in me a strong work ethic.
            </p>
          </div>
          {/* Skills */}
          <div className="about-me-skills">
            <h3>Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>[Add more skills]</li>
            </ul>
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
  