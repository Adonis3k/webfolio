import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
  state = {
    navOpen: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  };

  render() {
    return (
      <div className="Banner">
        <button className="nav-toggle" onClick={this.toggleNav}>☰</button>
        <div className={`navitems ${this.state.navOpen ? 'open' : ''}`}>
         
          <ul>
            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={1000}
                onClick={this.handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="work-section"
                smooth={true}
                duration={1000}
                onClick={this.handleNavLinkClick}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="Projects-section"
                smooth={true}
                duration={1000}
                onClick={this.handleNavLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={1000}
                onClick={this.handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/Resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
