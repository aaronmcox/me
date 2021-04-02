import * as React from "react"
import { StaticImage} from "gatsby-plugin-image";

export function Showcase() {
  return (
    <div className="has-background-dark">
      <div className="container has-background-light">
        <div className="columns is-vcentered p-6 mt-6 is-desktop">
          <div className="column is-7-desktop is-8-widescreen">
            <figure className="image">
              <StaticImage
                src="../images/me-jenga-square.jpg"
                alt="Me, perching against a giant Jenga set"
                className="has-ratio"
                style={{borderRadius: "1rem"}}
              />
            </figure>
          </div>
          <div className="column">
            <div className="box has-background-dark">
              <h1 className="title is-1 has-text-info has-permanent-marker-font">Hello!</h1>
              <h3 className="subtitle is-3 has-text-light has-text-weight-bold">I'm Aaron and I develop software,</h3>
              <p className="block has-text-light" style={{fontSize: "1.5rem"}}>
                currently for Beckman Coulter in Indianapolis. The primary imperative writing software integrations
                for
                and internal web applications.
              </p>
              <p className="block has-text-light">
              </p>
              <p className="block has-text-light">Curabitur pellentesque, enim at placerat ullamcorper, sem felis molestie purus, nec lobortis orci nisl nec orci. Vestibulum tempus leo nisi, quis cursus diam rhoncus vitae. Curabitur molestie tristique nulla ut egestas. Aenean eu condimentum tortor. Maecenas gravida nec velit quis eleifend. Donec dignissim pharetra velit eget convallis. Sed gravida, ante at tempus tincidunt, felis magna accumsan nisi, a porttitor mi quam ut nisl. Integer ac metus pulvinar, imperdiet dolor et, placerat nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam blandit odio in ex porta rutrum. Aliquam ac fermentum lorem. Fusce bibendum posuere urna vitae vestibulum.</p>
              <p className="block has-text-light">Sed condimentum lectus sit amet tellus ultrices, ut maximus magna tempus. Sed ac molestie nisl. Nulla vulputate, lorem eu volutpat tempor, ante metus aliquet risus, sit amet tincidunt magna lectus tempor lectus. Nam id gravida odio. Donec risus lorem, placerat quis nunc quis, pellentesque imperdiet felis. Morbi rutrum lectus justo, eu porttitor quam suscipit vel. Phasellus a fringilla turpis. Aenean lacinia aliquam lobortis.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="hero-body"/>
      </section>
    </div>
  );
}
