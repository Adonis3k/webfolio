import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

class Header extends Component {
  handleNavLinkClick = () => {
    // Force a re-render of the component
    this.forceUpdate();
  };

  render() {
    return (
      <div className="Banner">
        <div className="navitems">
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
