
import * as React from "react";

export interface SkillProps {
  name: string |  undefined,
  value: number |  undefined,
  max: number |  undefined,
  color: "primary" | "light" | "dark" | "info" | undefined
}

export const Skill = (props: SkillProps) => {

  const skill = {
    name: props.name ?? "",
    value: props.value ?? 0,
    max: props.max ?? 10,
    color: props.color ?? "primary"
  };

  return (
    <div className="field is-horizontal">
      <div className="field-label">
        <label className={`has-text-${skill.color}-light`}>{skill.name}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <progress style={{width: "85%"}} className={`progress is-${skill.color} has-background-dark is-small`} value={skill.value} max={skill.max}>{skill.value}</progress>
        </div>
      </div>
    </div>
  );
}
