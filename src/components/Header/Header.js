import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

class Header extends Component {
    render() {
      return (
        <div className="Banner">
        <div classname="Logo">
        <div className="Header"> 
          <ul className="navitems"> 
          <li>
            <Link to="about-section" smooth={true} duration={1000}>About</Link></li>
            <li>
              <Link to="work-section" smooth={true} duration={1000}>Work</Link></li>
            <li><Link to="Projects-section" smooth={true} duration={1000}>Projects</Link></li>
            
            <li><Link to="Contact" smooth={true} duration={1000}>Contact</Link></li>
            <li>
            <a href="/Resume/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-button">Resume</a>
                    </li>
          </ul>
        </div>
        </div>
        </div>
      );
    }
  }
  

export default Header;

  