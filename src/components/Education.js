import React from "react";
import uuid from "react-uuid";

import DateRange from "./DateRange";
import "./Education.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.addEducation = this.addEducation.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, index) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let educations = [...this.props.educations];
    educations[index] = { ...this.props.educations[index], [name]: value };
    this.props.onContentChange("educations", educations);
  }

  addEducation(index) {
    const education = {
      id: uuid(),
      studyProgram: "",
      institution: "",
      startDate: null,
      endDate: null,
      present: false,
    };
    const educationList = [
      ...this.props.educations.slice(0, index + 1),
      education,
      ...this.props.educations.slice(index + 1),
    ];
    this.props.onContentChange("educations", educationList);
  }

  deleteEducation(index) {
    const educationList = [
      ...this.props.educations.slice(0, index),
      ...this.props.educations.slice(index + 1),
    ];
    this.props.onContentChange("educations", educationList);
  }

  render() {
    return this.props.educations.length ? (
      <div className="education">
        <h1 className="title">Education</h1>
        {this.props.educations.map((education, index) => (
          <fieldset className="education-form" key={education.id}>
            <div className="program">
              <input
                type="text"
                placeholder="Study Program"
                className="study"
                name="studyProgram"
                value={education.studyProgram}
                onChange={(e) => this.onChange(e, index)}
              />
              <br />
              <input
                type="text"
                placeholder="Institution/Study Program"
                name="institution"
                value={education.institution}
                onChange={(e) => this.onChange(e, index)}
              />
            </div>
            <DateRange
              dateFormat="MM/yyyy"
              monthYearPicker={true}
              placeholder="mm/yyyy"
              startDate={education.startDate}
              endDate={education.endDate}
              present={education.present}
              index={index}
              onChange={this.onChange}
            />
            <div className="icons">
              <CgAdd
                className="add-icon"
                onClick={() => this.addEducation(index)}
              />
              <BsTrash
                className="remove-icon"
                onClick={() => this.deleteEducation(index)}
              />
            </div>
          </fieldset>
        ))}
      </div>
    ) : null;
  }
}
