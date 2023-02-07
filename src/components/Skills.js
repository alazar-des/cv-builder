import React from "react";

import Input from "./Input";
import "./Education.css";
import "./Skills.css";

import { CgAdd } from "react-icons/cg";
import uuid from "react-uuid";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.addSkill = this.addSkill.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(e) {
    const skills = { ...this.props.skills, [e.target.id]: e.target.value };
    this.props.onContentChange("skills", skills);
  }

  addSkill() {
    const skills = { ...this.props.skills, [uuid()]: "" };
    this.props.onContentChange("skills", skills);
  }

  onFocus() {
    const icon = document.querySelector(".skills .add-icon");
    icon.style.display = "block";
  }

  onBlur() {
    const icon = document.querySelector(".skills .add-icon");
    icon.style.display = "none";
  }

  render() {
    const ids = Object.keys(this.props.skills);
    return (
      <div
        className="skills"
        tabIndex="1"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        <h1 className="title">Skills</h1>
        <div className="container">
          {ids.map((id) => (
            <Input
              type="text"
              id={id}
              placeholder="skill"
              alignText="center"
              key={id}
              value={this.props.skills[id]}
              onInputChange={this.onChange}
              defaultSize={6}
            />
          ))}
          <CgAdd className="add-icon" display="none" onClick={this.addSkill} />
        </div>
      </div>
    );
  }
}
