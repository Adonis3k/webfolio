import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'; 
import About from './components/About/About';
import Work from './components/Work/Work';
import SocialMedia from './components/SocialMedia/SocialMedia';


const App = () => {
  const navItems = [
    { id: 'About', label: 'About' },
    { id: 'Work', label: 'Work-Section' },
    { id: 'Experience', label: 'Experience' },
    { id: 'Contact', label: 'Contact' },
];

return (
  <div>
    <Header />
    <Hero />
    <About />
    <Work />
   <SocialMedia />
  </div> 
);}
export default App;