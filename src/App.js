import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'; 
import About from './components/About/About';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer.js';


const App = () => {
  const navItems = [
    { id: 'About', label: 'about-container' },
    { id: 'Work', label: 'Work-Section' },
    { id: 'Experience', label: 'Experience' },
    { id: 'Projects', label: 'Projects' },
    { id: 'Contact', label: 'Contact' },
];

return (
  <div>
    <Logo />
    <Header  navItems={navItems} />
    <Hero />
    <About />
    <Work />
    <Projects />
    <Contact />
   <SocialMedia />
   <Footer />
  </div> 
);}
export default App;