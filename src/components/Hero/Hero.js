import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='myNameis'>Hi, my name is</div>
      <div className="adonisMadera">ADONIS MADERA</div>
      <div className="big-heading">Experienced Fullstack Web Developer & Software Engineer, PMP®, Disciplined Agile® Scrum Master </div>
      <div className='p'>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, patient health care-centered projects
        at{' '}
        <a href="https://settlementhealth.org/" target="_blank" rel="noreferrer">
          Settlement Health.
        </a>
      </div>
    </div>
  );
};

export default Hero;
