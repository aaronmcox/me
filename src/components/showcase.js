import Layout from "./layout"
import * as React from "react"

export function Showcase() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="parallax">
            <div className="parallax-top-left" tabIndex="1"></div>
            <div className="parallax-top-right" tabIndex="2"></div>
            <div className="parallax-bottom-left" tabIndex="3"></div>
            <div className="parallax-bottom-right" tabIndex="4"></div>
            <div className="parallax-content">
              <div className="parallax-front">
                <h2>tvOS parallax demo</h2>
              </div>
              <div className="parallax-back">
                <img src="https://source.unsplash.com/random/600x400" className="img-responsive rounded"/>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <img src="https://source.unsplash.com/random/600x400" className="img-fit-contain"/>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-image">
              <img src="https://source.unsplash.com/random/400x300" className="img-fit-contain"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}