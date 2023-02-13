import React from "react";
import uuid from "react-uuid";

import Textarea from "./TextArea";
import DateRange from "./DateRange";
import TextareaList from "./TextareaList";
import "./Education.css";
import "./Projects.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

const Project = (props) => {
  const onChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    let projects = [...props.projects];
    projects[index] = { ...props.projects[index], [name]: value };
    props.onContentChange("projects", projects);
  };

  const addProject = (index) => {
    const newProject = {
      id: uuid(),
      projectName: "",
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
      techologies: [],
    };
    const projectList = [
      ...props.projects.slice(0, index + 1),
      newProject,
      ...props.projects.slice(index + 1),
    ];
    props.onContentChange("projects", projectList);
  };

  const deleteProject = (index) => {
    const projectList = [
      ...props.projects.slice(0, index),
      ...props.projects.slice(index + 1),
    ];
    props.onContentChange("experiences", projectList);
  };

  return (
    <div className="education">
      <h1 className="title">Personal Projects</h1>
      {props.projects.map((project, index) => (
        <fieldset className="education-form" key={project.id}>
          <div className="project">
            <input
              type="text"
              placeholder="Project Name"
              className="study"
              name="projectName"
              value={project.projectName}
              onChange={(e) => onChange(e, index)}
            />
          </div>
          <DateRange
            placeholder="dd/mm/yyyy"
            startDate={project.startDate}
            endDate={project.endDate}
            present={project.present}
            index={index}
            onChange={onChange}
          />
          <TextareaList
            cols="120"
            placeholder="Aad your achievment"
            name="achievments"
            textAreaList={project.achievments}
            onChange={onChange}
            index={index}
          />
          <div className="technologies">
            <span>Technologies: </span>
            <Textarea
              name="technologies"
              placeholder="Technologies used"
              cols="100"
              id="technologis"
              value={project.technologies}
              onChange={onChange}
              index={index}
            />
          </div>
          <div className="icons">
            <CgAdd className="add-icon" onClick={() => addProject(index)} />
            <BsTrash
              className="remove-icon"
              onClick={() => deleteProject(index)}
            />
          </div>
        </fieldset>
      ))}
    </div>
  );
};

export default Project;
