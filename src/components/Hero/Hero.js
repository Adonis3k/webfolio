import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <h3>Hi, my name is</h3>
      <h1 className="big-heading">Adonis Madera</h1>
      <h3 className="big-heading">I work on software projects across various technologies.</h3>
      <p>
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, patient health care-centered products
        at{' '}
        <a href="https://settlementhealth.org/" target="_blank" rel="noreferrer">
          SettlementHealth.
        </a>
      </p>
    </div>
  );
};

export default Hero;
