import * as React from "react"

export function Showcase() {
  return (
    <div className="container bg-primary showcase">
      <div className="columns">
        <div className="column col-xs-12 col-mx-auto flex-centered">
          <img src="https://source.unsplash.com/random/400x600" className="img-responsive s-rounded" />
        </div>
        <div className="column col-xs-12 col-mx-auto flex-centered">
          <img src="https://source.unsplash.com/random/400x600" className="img-responsive" />
        </div>
        <div className="column col-xs-12 col-mx-auto flex-centered">
          <img src="https://source.unsplash.com/random/400x600" className="img-responsive" />
        </div>
      </div>
    </div>
  );
}