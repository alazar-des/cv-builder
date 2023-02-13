import React from "react";

import Input from "./Input";
import "./Education.css";
import "./Skills.css";

import { CgAdd } from "react-icons/cg";
import uuid from "react-uuid";

const Skills = (props) => {
  const onChange = (e) => {
    const skills = { ...props.skills, [e.target.id]: e.target.value };
    props.onContentChange("skills", skills);
  };

  const addSkill = () => {
    const skills = { ...props.skills, [uuid()]: "" };
    props.onContentChange("skills", skills);
  };

  const onFocus = () => {
    const icon = document.querySelector(".skills .add-icon");
    icon.style.display = "block";
  };

  const onBlur = () => {
    const icon = document.querySelector(".skills .add-icon");
    icon.style.display = "none";
  };

  const ids = Object.keys(props.skills);
  return (
    <div className="skills" tabIndex="1" onFocus={onFocus} onBlur={onBlur}>
      <h1 className="title">Skills</h1>
      <div className="container">
        {ids.map((id) => (
          <Input
            type="text"
            id={id}
            placeholder="skill"
            alignText="center"
            key={id}
            value={props.skills[id]}
            onInputChange={onChange}
            defaultSize={6}
          />
        ))}
        <CgAdd className="add-icon" display="none" onClick={addSkill} />
      </div>
    </div>
  );
};

export default Skills;
