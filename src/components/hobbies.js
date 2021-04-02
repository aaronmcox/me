
import * as React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons"

export const Hobbies = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title is-size-1 has-permanent-marker-font">
          Some Hobbies
        </p>
      </div>
    </div>

    <div className="hero-foot">
      <nav className="level is-mobile">
        <div className="box level-item has-text-centered">
          <div>
            <p className="heading">Basketball</p>
            <p className="title has-text-dark"><FontAwesomeIcon icon={faBasketballBall}></FontAwesomeIcon></p>
          </div>
        </div>
        <div className="box has-background-dark level-item has-text-centered">
          <div>
            <p className="heading has-text-light">Following</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
            <p className="title">456K</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
          </div>
        </div>
      </nav>
    </div>
  </section>
);
