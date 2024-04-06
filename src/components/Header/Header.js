import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div className="Banner">
        <button className="nav-toggle" onClick={this.toggleNav}>☰</button>
        <div className={`navitems ${this.state.isOpen ? 'open' : ''}`}> 
          <ul>
            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="work-section"
                smooth={true}
                duration={1000}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="Projects-section"
                smooth={true}
                duration={1000}
                
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={1000}
               
              >
                Contact
              </Link>
            </li>
            <li>
            <a
                href='https://drive.google.com/file/d/1mVGqEBJEU6QcD7wdoc3XDHB1rvx4Zif4/view'
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
