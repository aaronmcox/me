import * as React from "react"
import { StaticImage} from "gatsby-plugin-image";

export function Showcase() {
  return (
    <div className="has-background-dark p-6">
      <div className="container has-background-light">
        <div className="columns is-vcentered p-6 mt-6 mb-6 is-desktop">
          <div className="column is-7-desktop is-8-widescreen">
            <figure className="image">
              <StaticImage
                src="../images/me-jenga-square.jpg"
                alt="Me, in my backyard, learning on a giant Jenga set, grinning like a fool."
                className="has-ratio"
                style={{borderRadius: "1rem"}}
              />
            </figure>
          </div>
          <div className="column">
            <div className="box has-background-dark">
              <h1 className="title is-1 has-text-info has-permanent-marker-font pb-1">Hello!</h1>
              <h3 className="subtitle is-3 has-text-light has-text-weight-bold pb-3">I'm Aaron and I develop software.</h3>
              <p className="block has-text-light is-size-5">
                I currently do it for&nbsp;<a href="https://www.beckman.com" target="_blank" className="has-text-danger">Beckman Coulter</a>&nbsp;
                in Indianapolis, Indiana. The mission of the position is to integrate medical research devices with our liquid-handling
                robotic automation platforms. I also get to spend a significant chunk of my time working with modern web development
                projects, mostly with modern technologies.
              </p>
              <p className="block has-text-light is-size-5">
                I attended&nbsp;<a href="https://www.indstate.edu" target="_blank" className="has-text-primary">Indiana State University</a>&nbsp;
                in Terre Haute, Indiana. I studied computer science and received M.S. and B.S. degrees for my efforts.
                I gravitated to multidisciplinary work, participating in bioinformatics and physics projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
