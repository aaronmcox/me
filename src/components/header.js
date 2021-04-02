
import * as React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faChalkboardTeacher, faHome, faTerminal } from "@fortawesome/free-solid-svg-icons"


export const Header = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item has-permanent-marker-font is-header-element is-header-brand">
              Aaron Cox
            </div>
            <span className="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end is-header-element">
              <a className="navbar-item" href="https://github.com/aaronmcox">
                <FontAwesomeIcon icon={faGithub} size="2x" className=""/>
              </a>
              <a className="navbar-item mr-2" href="https://www.linkedin.com/in/aaroncox-dev/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className=""/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
);
