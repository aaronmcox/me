import * as React from "react"
import { StaticImage} from "gatsby-plugin-image";

export function Showcase() {
  return (
    <div className="columns is-vcentered has-background-dark is-2 p-6 mt-6">
      <div className="column">
        <figure className="image">
          <StaticImage
            src="../images/me-jenga.jpg"
            alt="Me, perching against a giant Jenga set"
            className="has-ratio"
            style={{borderRadius: "1rem"}}
          />
        </figure>
      </div>
      <div className="column">
        <div className="box">
          <h1 className="title is-1">Hello!</h1>
          <h3 className="subtitle is-3">I'm Aaron Cox and I develop software.</h3>
          <p className="block">Curabitur pellentesque, enim at placerat ullamcorper, sem felis molestie purus, nec lobortis orci nisl nec orci. Vestibulum tempus leo nisi, quis cursus diam rhoncus vitae. Curabitur molestie tristique nulla ut egestas. Aenean eu condimentum tortor. Maecenas gravida nec velit quis eleifend. Donec dignissim pharetra velit eget convallis. Sed gravida, ante at tempus tincidunt, felis magna accumsan nisi, a porttitor mi quam ut nisl. Integer ac metus pulvinar, imperdiet dolor et, placerat nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam blandit odio in ex porta rutrum. Aliquam ac fermentum lorem. Fusce bibendum posuere urna vitae vestibulum.</p>
          <p className="block">Sed condimentum lectus sit amet tellus ultrices, ut maximus magna tempus. Sed ac molestie nisl. Nulla vulputate, lorem eu volutpat tempor, ante metus aliquet risus, sit amet tincidunt magna lectus tempor lectus. Nam id gravida odio. Donec risus lorem, placerat quis nunc quis, pellentesque imperdiet felis. Morbi rutrum lectus justo, eu porttitor quam suscipit vel. Phasellus a fringilla turpis. Aenean lacinia aliquam lobortis.</p>
        </div>
      </div>
    </div>
  );
}
//      <div className="box">
//        <h1 className="title is-2 has-text-info">Hello!</h1>
//        </div>
//      </div>

      // <div className="container bg-primary showcase">
//   <div className="columns">
//     <div className="column col-xs-12 col-mx-auto flex-centered">
//       <img src="https://source.unsplash.com/random/400x600" className="img-responsive s-rounded" />
//     </div>
//     <div className="column col-xs-12 col-mx-auto flex-centered">
//       <StaticImage
//         src="../images/me-jenga.jpg"
//         alt="Me, perching against a giant Jenga set"
//         className="img-responsive s-rounded showcase-center"
//       />
//     </div>
//     <div className="column col-xs-12 col-mx-auto flex-centered">
//       <StaticImage
//         src="../images/me-with-coffee.jpg"
//         alt="Me, holding coffee and grinning"
//         className="img-responsive s-rounded showcase-flank"
//       />
//     </div>
//   </div>
// </div>
//