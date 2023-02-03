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
    this.state = {
      experienceList: [
        {
          id: uuid(),
          position: "",
          company: "",
          dateRange: {
            startDate: null,
            endDate: null,
            present: false,
          },
          acheivments: [],
          contactName: "",
          contactEmail: "",
        },
      ],
    };

    this.addExperience = this.addExperience.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, experience) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      experienceList: this.state.experienceList.map((exp) => {
        if (exp.id === experience.id) {
          exp[name] = value;
        }
        return exp;
      }),
    });
  }

  addExperience(index) {
    const experience = {
      id: uuid(),
      position: "",
      company: "",
      dateRange: {
        startDate: null,
        endDate: null,
        present: false,
      },
      acheivments: [],
      contactName: "",
      contactEmail: "",
    };
    this.setState({
      experienceList: [
        ...this.state.experienceList.slice(0, index + 1),
        experience,
        ...this.state.experienceList.slice(index + 1),
      ],
    });
  }

  deleteExperience(index) {
    this.setState({
      experienceList: [
        ...this.state.experienceList.slice(0, index),
        ...this.state.experienceList.slice(index + 1),
      ],
    });
  }

  render() {
    return this.state.experienceList.length ? (
      <div className="education">
        <h1 className="title">Experience</h1>
        {this.state.experienceList.map((experience, index) => (
          <fieldset className="education-form" key={experience.id}>
            <div className="program">
              <input
                type="text"
                placeholder="Position"
                name="position"
                className="study"
                value={experience.position}
                onChange={(e) => this.onChange(e, experience)}
              />
              <br />
              <input
                type="text"
                placeholder="Company"
                name="company"
                value={experience.company}
                onChange={(e) => this.onChange(e, experience)}
              />
            </div>
            <DateRange
              dateFormat="MM/yyyy"
              monthYearPicker={true}
              placeholder="mm/yyyy"
            />
            <p className="sub-title">Achievements/Tasks</p>
            <TextareaList cols="120" placeholder="Aad your achievment" />
            <div className="contact-person">
              <span>Contact: </span>
              <Input
                type="text"
                placeholder="Name"
                name="contactName"
                size={5}
                alignText="center"
              />
              <span> - </span>
              <Input
                type="text"
                placeholder="Email"
                name="contactEmail"
                size={5}
                alignText="center"
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
