
import * as React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBasketballBall, faBookReader, faDrumstickBite, faHiking, faBlender } from "@fortawesome/free-solid-svg-icons"

export const Hobbies = () => (
  <section className="hero is-primary p-6 mb-2">
    <div className="hero-head">
      <div className="container has-text-centered p-6">
        <p className="title is-size-1 has-permanent-marker-font has-text-light">
          Some Things I Like
        </p>
      </div>
    </div>

    <div className="hero-body">
      <div className="container p-3">
        <div className="columns is-desktop">
          <div className="column has-text-centered m-1">
            <div className="box has-background-light pt-6 pb-6">
              <p className="heading has-text-dark is-size-3">Hiking</p>
              <p className="title has-text-dark is-size-3">
                <FontAwesomeIcon icon={faHiking}/>
              </p>
            </div>
          </div>
          <div className="column has-text-centered m-1">
            <div className="box has-background-dark pt-6 pb-6">
              <p className="heading has-text-light is-size-3">BBQ</p>
              <p className="title has-text-light is-size-3">
                <FontAwesomeIcon icon={faDrumstickBite}/>
              </p>
            </div>
          </div>
          <div className="column has-text-centered m-1">
            <div className="box pacers-gold-background pt-6 pb-6">
              <p className="heading is-size-3 pacers-blue-color">Basketball</p>
              <p className="title pacers-blue-color is-size-3">
                <FontAwesomeIcon icon={faBasketballBall}/>
              </p>
            </div>
          </div>
          <div className="column has-text-centered m-1">
            <div className="box has-background-dark pt-6 pb-6">
              <p className="heading has-text-light is-size-3">Reading</p>
              <p className="title has-text-light is-size-3">
                <FontAwesomeIcon icon={faBookReader}/>
              </p>
            </div>
          </div>
          <div className="column has-text-centered m-1">
            <div className="box pacers has-background-light pt-6 pb-6">
              <p className="heading is-size-3">Cooking</p>
              <p className="title has-text-dark is-size-3">
                <FontAwesomeIcon icon={faBlender}/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
