import React from 'react';
import '/src/css/pages/About.css';
import FounderImage from '/images/members/founder.png';

const About = () => {
  return (
    <section className="about">
      <div>
        <h1 className="h3">About Us</h1>
        <div className="about-content">
          <p>Welcome to Lerrium Solutions, your trusted partner in web development and digital solutions.</p>
          <p>We are a team of passionate developers dedicated to creating innovative and user-friendly websites.</p>
          <p>Our mission is to help businesses establish a strong online presence and achieve their digital goals.</p>
          <p><span className='strikethrough'>With years of experience in the industry</span>, we pride ourselves on delivering high-quality solutions tailored to our client's needs.</p>
          <p>Whether you need a simple website or a complex web application, we have the <span className='strikethrough'>expertise</span> *will to bring your vision to life.</p>
          <p>Thank you for considering Lerrium Solutions for your web development needs. We look forward to working with you!</p>
        </div>
        <div className="about-quote">
          <p>"Empowering your digital journey with innovative solutions."</p>
        </div>
      </div>
      <div className="about-team">
        <h2 className="h4">The Lerrium Team</h2>
        <div className="team-members">
          <div className="about-image">
            <img src={FounderImage} alt="Founder" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;