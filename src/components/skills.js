
import * as React from 'react';
import {Skill} from "./skill";

// export interface SkillsProps {
//   children: React.ReactNode
// }

// export const Skills = (props: SkillsProps) => (
export const Skills = () => (
  <section className="hero is-dark p-6 mb-2">
    <div className="hero-head">
      <div className="container has-text-centered p-6">
        <p className="title is-size-1 has-permanent-marker-font has-text-light">
          Skills
        </p>
        <p className="subtitle is-size-6">
          (Ratings relative to myself only)
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
            <Skill name="C#" value={10} max={10} />
            <Skill name="JavaScript" value={8} max={10} />
            <Skill name="TypeScript" value={7} max={10} />
            <Skill name="Python" value={6} max={10} />
            <Skill name="SQL" value={6} max={10} />
            <Skill name="C" value={5} max={10} />
            <Skill name="CSS" value={5} max={10} />
            <Skill name="Java" value={3} max={10} />
            <Skill name="C++" value={2} max={10} />
            <Skill name="Delphi" value={0} max={10} />
            {/*{props.children}*/}
            {/*<div className="field is-horizontal">*/}
            {/*  <div className="field-label">*/}
            {/*    <label className="has-text-primary-light">C#</label>*/}
            {/*  </div>*/}
            {/*  <div className="field-body">*/}
            {/*    <div className="field">*/}
            {/*      <progress style={{width: "85%"}} className="progress is-primary is-inline-block" value="8" max="10">70</progress>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="field is-horizontal">*/}
            {/*  <div className="field-label">*/}
            {/*    <label className="has-text-primary-light">JavaScript</label>*/}
            {/*  </div>*/}
            {/*  <div className="field-body">*/}
            {/*    <div className="field">*/}
            {/*      <progress style={{width: "85%"}} className="progress is-primary is-inline-block" value="8" max="10">70</progress>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

        </div>



      </div>
    </div>
  </section>
  );
