
import * as React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faChalkboardTeacher, faHome, faTerminal } from "@fortawesome/free-solid-svg-icons"

export const Header = () => (
  <header className="navbar">
    <section className="navbar-section">
      <Link className="navbar-brand" to="/">
        <span className="text-large"><FontAwesomeIcon icon={faChalkboardTeacher} />&nbsp;Aaron Cox</span>
      </Link>
    </section>
    <section className="navbar-center">
    </section>
    <section className="navbar-section">
      <a className="btn btn-link" href="https://github.com/aaronmcox">
        <FontAwesomeIcon icon={faGithub} size="2x" className=""/>
      </a>
      <a className="btn btn-link" href="https://www.linkedin.com/in/aaroncox-dev/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className=""/>
      </a>
    </section>
  </header>
);
