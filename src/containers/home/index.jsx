// src/containers/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // LeetCode icon
import AnimatedBackground from './AnimatedBackground'; // Import the new component
import './index.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="home">
      <AnimatedBackground /> {/* Add animated background */}
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Kavya
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: 'translateY(550px)' }}
        end={{ transform: 'translateX(0px)' }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContact}>Hire Me</button>
        </div>
      </Animate>
      <Animate
        play
        duration={1.5}
        delay={1.5}
        start={{ transform: 'translateY(550px)' }}
        end={{ transform: 'translateX(0px)' }}
      >
        <div className="home__social-icons">
          <a href="https://www.linkedin.com/in/varanasi-kavya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Kavya-2023" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://leetcode.com/u/k_a_v_y_a/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={30} />
          </a>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
