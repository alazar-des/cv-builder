import React from "react";
import uuid from "react-uuid";

import DateRange from "./DateRange";
import "./Education.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationList: [
        {
          id: uuid(),
          studyProgram: "",
          institution: "",
          startDate: null,
          endDate: null,
          present: false,
        },
      ],
    };

    this.addEducation = this.addEducation.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, education) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      educationList: this.state.educationList.map((edu) => {
        if (edu.id === education.id) {
          edu[name] = value;
        }
        return edu;
      }),
    });
  }

  addEducation(index) {
    const education = {
      id: uuid(),
      studyProgram: "",
      institution: "",
      dateRange: {
        startDate: null,
        endDate: null,
        present: false,
      },
    };
    this.setState({
      educationList: [
        ...this.state.educationList.slice(0, index + 1),
        education,
        ...this.state.educationList.slice(index + 1),
      ],
    });
  }

  deleteEducation(index) {
    this.setState({
      educationList: [
        ...this.state.educationList.slice(0, index),
        ...this.state.educationList.slice(index + 1),
      ],
    });
  }

  render() {
    return this.state.educationList.length ? (
      <div className="education">
        <h1 className="title">Education</h1>
        {this.state.educationList.map((education, index) => (
          <fieldset className="education-form" key={education.id} >
            <div className="program">
              <input
                type="text"
                placeholder="Study Program"
                className="study"
                name="studyProgram"
                value={education.studyProgram}
                onChange={(e) => this.onChange(e, education)}
              />
              <br />
              <input
                type="text"
                placeholder="Institution/Study Program"
                name="institution"
                value={education.institution}
                onChange={(e) => this.onChange(e, education)}
              />
            </div>
            <DateRange
              dateFormat="MM/yyyy"
              monthYearPicker={true}
              placeholder="mm/yyyy"
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
