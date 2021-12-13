
import * as React from "react";

export interface SkillProps {
  name: string | null | undefined,
  value: number | null | undefined,
  max: number | null | undefined
}

export const Skill = (props: SkillProps) => {

  const skill = {
    name: props.name ?? "",
    value: props.value ?? 0,
    max: props.max ?? 10,
  };

  return (
    <div className="field is-horizontal">
      <div className="field-label">
        <label className="has-text-primary-light">{skill.name}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <progress style={{width: "85%"}} className="progress is-primary is-inline-block" value={skill.value} max={skill.max}>{skill.value}</progress>
        </div>
      </div>
    </div>
  );
}
