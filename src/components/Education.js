import React from "react";
import uuid from "react-uuid";

import DateRange from "./DateRange";
import "./Education.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

const Education = (props) => {
  const onChange = (e, index) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let educations = [...props.educations];
    educations[index] = { ...props.educations[index], [name]: value };
    props.onContentChange("educations", educations);
  };

  const addEducation = (index) => {
    const education = {
      id: uuid(),
      studyProgram: "",
      institution: "",
      startDate: null,
      endDate: null,
      present: false,
    };
    const educationList = [
      ...props.educations.slice(0, index + 1),
      education,
      ...props.educations.slice(index + 1),
    ];
    props.onContentChange("educations", educationList);
  };

  const deleteEducation = (index) => {
    const educationList = [
      ...props.educations.slice(0, index),
      ...props.educations.slice(index + 1),
    ];
    props.onContentChange("educations", educationList);
  };

  return props.educations.length ? (
    <div className="education">
      <h1 className="title">Education</h1>
      {props.educations.map((education, index) => (
        <fieldset className="education-form" key={education.id}>
          <div className="program">
            <input
              type="text"
              placeholder="Study Program"
              className="study"
              name="studyProgram"
              value={education.studyProgram}
              onChange={(e) => onChange(e, index)}
            />
            <br />
            <input
              type="text"
              placeholder="Institution/Study Program"
              name="institution"
              value={education.institution}
              onChange={(e) => onChange(e, index)}
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
            onChange={onChange}
          />
          <div className="icons">
            <CgAdd className="add-icon" onClick={() => addEducation(index)} />
            <BsTrash
              className="remove-icon"
              onClick={() => deleteEducation(index)}
            />
          </div>
        </fieldset>
      ))}
    </div>
  ) : null;
};

export default Education;
