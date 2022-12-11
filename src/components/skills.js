
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
          Skills & Tech
        </p>
        <p className="subtitle is-size-6">
          (Ratings relative only to myself)
        </p>
      </div>
    </div>

    <div className="hero-body">
      <div className="container">

        <div className="columns">
          <div className="column is-3 is-narrow has-permanent-marker-font is-size-3">
            Languages
          </div>
          <div className="column">
            <Skill name="C#" value={9.5} max={10} />
            <Skill name="TypeScript" value={8} max={10} />
            <Skill name="JavaScript" value={8} max={10} />
            <Skill name="C" value={6} max={10} />
            <Skill name="Python" value={6} max={10} />
            <Skill name="SQL" value={6} max={10} />
            <Skill name="English" value={4} max={10} />
            <Skill name="CSS" value={4} max={10} />
            <Skill name="Java" value={3} max={10} />
            <Skill name="C++" value={2} max={10} />
            <Skill name="Delphi" value={0.1} max={10} />
          </div>
        </div>

        <div className="columns">
          <div className="column is-3 is-narrow has-permanent-marker-font is-size-3">
            Databases
          </div>

          <div className="column">
            <Skill name="SQL Server" value={7} max={10} color="info" />
            <Skill name="MySQL / MariaDB" value={5} max={10} color="info" />
            <Skill name="MongoDB" value={5} max={10} color="info" />
            <Skill name="SQLite" value={2} max={10} color="info" />
          </div>
        </div>

        <div className="columns">
          <div className="column is-3 has-permanent-marker-font is-size-3">
            Frameworks
          </div>
          <div className="column">
            <Skill name="ASP.NET" value={9} max={10} />
            <Skill name="React" value={8} max={10} />
            <Skill name="WPF" value={8} max={10} />
            <Skill name="Angular" value={7} max={10} />
            <Skill name="NUnit" value={6} max={10} />
            <Skill name="Gatsby" value={6} max={10} />
            <Skill name="express" value={6} max={10} />
            <Skill name="Flask" value={3} max={10} />
            <Skill name="xUnit" value={3} max={10} />
          </div>
        </div>

      </div>
    </div>
  </section>
  );
