import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <h4>Hi, my name is</h4>
      <h1 className="big-heading">ADONIS MADERA</h1>
      <h3 className="big-heading">I work on software projects across various technologies.</h3>
      <h4>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, patient health care-centered projects
        at{' '}
        <a href="https://settlementhealth.org/" target="_blank" rel="noreferrer">
          SettlementHealth.
        </a>
      </h4>
    </div>
  );
};

export default Hero;
