
import * as React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faChalkboardTeacher, faHome, faTerminal } from "@fortawesome/free-solid-svg-icons"


export const Header = () => (
    <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="text-large"><FontAwesomeIcon icon={faChalkboardTeacher} />&nbsp;Aaron Cox</span>
        </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" href="https://github.com/aaronmcox">
            <FontAwesomeIcon icon={faGithub} size="2x" className=""/>
          </a>
          <a className="navbar-item mr-2" href="https://www.linkedin.com/in/aaroncox-dev/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className=""/>
          </a>
        </div>
      </div>

    </nav>
);
