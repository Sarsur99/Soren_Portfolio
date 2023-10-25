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
                    I am Soren Sonstein, a skilled Frontend Web Developer based in Oceanside, California. My journey into the world of software engineering began unconventionally, forced to adapt to new means of education due to the pandemic. Known for my relentless commitment to excellence, I've developed efficient solutions that not only meet user needs but also drive business success. My recent project, Battlelab Oceanside, showcases my expertise in user-centric site development and real-world implications. With experience in e-commerce efficiency, organizational methods, and a strong track record in client-facing roles, I thrive in collaborative environments. My skills span frontend and backend development, database management, API integration, and security, while my projects demonstrate a dedication to optimization and user engagement. I've also worked in Internet sales and have a background in psychology, making me a well-rounded professional.
                </p>
              </div>
            </div>
          </div>
          {/* Background */}
          <div className="about-me-background">
            <h3>Background</h3>
            <p>
            My work experience is backed by a strong foundation in client-facing roles, which has honed my adaptability and collaborative skills. In this role, I've excelled in e-commerce efficiency, optimizing inventory management and contributing to increased conversion rates and customer satisfaction. My background spans a range of technical skills, including frontend and backend development, database management, API integration, and a deep knowledge of security best practices.

In my projects, such as Shopbattlelab.com, I've spearheaded e-commerce site revitalization, improving the user experience and achieving a 15% increase in conversion rates. In FastFoodies Reviews, I engineered an efficient React.js front end, resulting in 30% reduced load times and a 40% increase in user engagement. With the Costume Shop project, I built custom Ruby on Rails methods for an add-to-cart functionality, enhancing user security and delivering a dynamic React.js frontend design.

My work experience extends to my role as a Webmaster at Battlelab Oceanside, where I revitalized the e-commerce site by implementing cutting-edge functionalities. I deepened my expertise in e-commerce efficiencies, optimizing inventory management processes. In my previous role as an Internet Manager at Bob Baker Subaru, I achieved an exceptional 58% conversion rate and contributed to the #1 selling BDC department for Subaru USA in 2020, helping customers locate specific vehicles and increasing sales by 15%.

I've also furthered my education by completing the Fullstack Software Engineering program at Flatiron School, building upon my foundation in psychology from the University of California, Riverside. My journey as a software engineer is defined by my unconventional background and relentless commitment to delivering exceptional results.
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
  