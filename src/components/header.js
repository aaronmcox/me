
import * as React from 'react';
import { Link } from "gatsby"

export const Header = () => (
  <header className="navbar">
    <section className="navbar-section">
      <Link className="navbar-brand" to="/">Aaron Cox</Link>
    </section>
    <section className="navbar-section">
      <a className="btn btn-link" href="https://github.com/aaronmcox">Github</a>
      <a className="btn btn-link" href="https://www.linkedin.com/in/aaroncox-dev/">LinkedIn</a>
    </section>
  </header>
);
