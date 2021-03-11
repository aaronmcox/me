import * as React from "react"
import { StaticImage} from "gatsby-plugin-image";

export function Showcase() {
  return (
    <div className="container bg-primary showcase">
      <div className="columns">
        <div className="column col-xs-12 col-mx-auto flex-centered">
          <img src="https://source.unsplash.com/random/400x600" className="img-responsive s-rounded" />
        </div>
        <div className="column col-xs-12 col-mx-auto flex-centered">
          <StaticImage
            src="../images/me-jenga.jpg"
            alt="Me, perching against a giant Jenga set"
            className="img-responsive s-rounded showcase-center"
          />
        </div>
        <div className="column col-xs-12 col-mx-auto flex-centered">
          <StaticImage
            src="../images/me-with-coffee.jpg"
            alt="Me, holding coffee and grinning"
            className="img-responsive s-rounded showcase-flank"
          />
        </div>
      </div>
    </div>
  );
}