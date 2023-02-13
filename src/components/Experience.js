import React from "react";
import uuid from "react-uuid";

import Input from "./Input";
import DateRange from "./DateRange";
import TextareaList from "./TextareaList";
import "./Education.css";
import "./Experience.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

const Experience = (props) => {
  const onChange = (e, index) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let experiences = [...props.experiences];
    experiences[index] = { ...props.experiences[index], [name]: value };
    props.onContentChange("experiences", experiences);
  };

  const addExperience = (index) => {
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
      ...props.experiences.slice(0, index + 1),
      experience,
      ...props.experiences.slice(index + 1),
    ];
    props.onContentChange("experiences", experienceList);
  };

  const deleteExperience = (index) => {
    const experienceList = [
      ...props.experiences.slice(0, index),
      ...props.experiences.slice(index + 1),
    ];
    props.onContentChange("experiences", experienceList);
  };

  return props.experiences.length ? (
    <div className="education">
      <h1 className="title">Experience</h1>
      {props.experiences.map((experience, index) => (
        <fieldset className="education-form" key={experience.id}>
          <div className="program">
            <input
              type="text"
              placeholder="Position"
              name="position"
              className="study"
              value={experience.position}
              onChange={(e) => onChange(e, index)}
            />
            <br />
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={experience.company}
              onChange={(e) => onChange(e, index)}
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
            onChange={onChange}
          />
          <p className="sub-title">Achievements/Tasks</p>
          <TextareaList
            cols="120"
            placeholder="Aad your achievment"
            name="achievments"
            textAreaList={experience.achievments}
            onChange={onChange}
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
              onInputChange={onChange}
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
              onInputChange={onChange}
              index={index}
            />
          </div>
          <div className="icons">
            <CgAdd className="add-icon" onClick={() => addExperience(index)} />
            <BsTrash
              className="remove-icon"
              onClick={() => deleteExperience(index)}
            />
          </div>
        </fieldset>
      ))}
    </div>
  ) : null;
};

export default Experience;
