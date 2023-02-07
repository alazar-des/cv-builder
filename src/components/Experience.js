import React from "react";
import uuid from "react-uuid";

import Input from "./Input";
import DateRange from "./DateRange";
import TextareaList from "./TextareaList";
import "./Education.css";
import "./Experience.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.addExperience = this.addExperience.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  onChange(e, index) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let experiences = [...this.props.experiences];
    experiences[index] = { ...this.props.experiences[index], [name]: value };
    this.props.onContentChange("experiences", experiences);
  }

  addExperience(index) {
    console.log(this.props.experiences)
    const experience = {
      id: uuid(),
      position: "",
      company: "",
      startDate: null,
      endDate: null,
      present: false,
      achievments: [
        {
          id: uuid(),
          rows: "1",
          value: "",
        },
      ],
      contactName: "",
      contactEmail: "",
    };
    const experienceList = [
      ...this.props.experiences.slice(0, index + 1),
      experience,
      ...this.props.experiences.slice(index + 1),
    ];
    this.props.onContentChange("experiences", experienceList);
  }

  deleteExperience(index) {
    const experienceList = [
      ...this.props.experiences.slice(0, index),
      ...this.props.experiences.slice(index + 1),
    ];
    this.props.onContentChange("experiences", experienceList);
  }

  render() {
    return this.props.experiences.length ? (
      <div className="education">
        <h1 className="title">Experience</h1>
        {this.props.experiences.map((experience, index) => (
          <fieldset className="education-form" key={experience.id}>
            <div className="program">
              <input
                type="text"
                placeholder="Position"
                name="position"
                className="study"
                value={experience.position}
                onChange={(e) => this.onChange(e, index)}
              />
              <br />
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={experience.company}
                onChange={(e) => this.onChange(e, index)}
              />
            </div>
            <DateRange
              dateFormat="MM/yyyy"
              monthYearPicker={true}
              placeholder="mm/yyyy"
              startDate={experience.startDate}
              endDate={experience.endDate}
              present={experience.present}
              index={index}
              onChange={this.onChange}
            />
            <p className="sub-title">Achievements/Tasks</p>
            <TextareaList
              cols="120"
              placeholder="Aad your achievment"
              name="achievments"
              textAreaList={experience.achievments}
              onChange={this.onChange}
              index={index}
            />
            <div className="contact-person">
              <span>Contact: </span>
              <Input
                type="text"
                placeholder="Name"
                name="contactName"
                defaultSize={5}
                alignText="center"
                value={experience.contactName}
                onInputChange={this.onChange}
                index={index}
              />
              <span> - </span>
              <Input
                type="text"
                placeholder="Email"
                name="contactEmail"
                defaultSize={5}
                alignText="center"
                value={experience.contactEmail}
                onInputChange={this.onChange}
                index={index}
              />
            </div>
            <div className="icons">
              <CgAdd
                className="add-icon"
                onClick={() => this.addExperience(index)}
              />
              <BsTrash
                className="remove-icon"
                onClick={() => this.deleteExperience(index)}
              />
            </div>
          </fieldset>
        ))}
      </div>
    ) : null;
  }
}
