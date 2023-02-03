import React from "react";

import Input from "./Input";
import "./Education.css";
import "./Skills.css";

import { CgAdd } from "react-icons/cg";
import uuid from "react-uuid";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: uuid(),
          value: "",
          size: 6,
        },
      ],
    };
    this.addSkill = this.addSkill.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(target, size) {
    const id = target.id;
    const value = target.value;
    this.setState({
      skills: this.state.skills.map((skill) => {
        if (skill.id === id) {
          return {
            id,
            value,
            size,
          };
        }
        return skill;
      }),
    });
  }

  addSkill() {
    this.setState({
      skills: [...this.state.skills, { id: uuid(), value: "", size: 6 }],
    });
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
    return (
      <div
        className="skills"
        tabIndex="1"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        <h1 className="title">Skills</h1>
        <div className="container">
          {this.state.skills.map((skill) => (
            <Input
              type="text"
              id={skill.id}
              placeholder="skill"
              size={skill.size}
              alignText="center"
              key={skill.id}
              value={skill.value}
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
