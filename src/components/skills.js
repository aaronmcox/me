
import * as React from 'react';

export const Skills = () => (
  <section className="hero is-dark p-6">
    <div className="hero-head">
      <div className="container has-text-centered p-6">
        <p className="title is-size-1 has-permanent-marker-font has-text-light">
          Skills
        </p>
      </div>
    </div>

    <div className="hero-body">
      <div className="container">

        <div className="columns">
          <div className="column is-narrow has-permanent-marker-font is-size-3">
            Languages
          </div>

          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="has-text-primary-light">C#</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <progress style={{width: "85%"}} className="progress is-primary is-inline-block" value="8" max="10">70</progress>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="has-text-primary-light">JavaScript</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <progress style={{width: "85%"}} className="progress is-primary is-inline-block" value="8" max="10">70</progress>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  </section>
  );
