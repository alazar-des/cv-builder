import React from "react";
import uuid from "react-uuid";

import Textarea from "./TextArea";
import DateRange from "./DateRange";
import TextareaList from "./TextareaList";
import "./Education.css";
import "./Projects.css";

import { CgAdd } from "react-icons/cg";
import { BsTrash } from "react-icons/bs";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.addProject = this.addProject.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, index) {
    const name = e.target.name;
    const value = e.target.value;
    let projects = [...this.props.projects];
    projects[index] = { ...this.props.projects[index], [name]: value };
    this.props.onContentChange("projects", projects);
  }

  addProject(index) {
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
      ...this.props.projects.slice(0, index + 1),
      newProject,
      ...this.props.projects.slice(index + 1),
    ];
    this.props.onContentChange("projects", projectList);
  }

  deleteProject(index) {
    const projectList = [
      ...this.props.projects.slice(0, index),
      ...this.props.projects.slice(index + 1),
    ];
    this.props.onContentChange("experiences", projectList);
  }

  render() {
    return (
      <div className="education">
        <h1 className="title">Personal Projects</h1>
        {this.props.projects.map((project, index) => (
          <fieldset className="education-form" key={project.id}>
            <div className="project">
              <input
                type="text"
                placeholder="Project Name"
                className="study"
                name="projectName"
                value={project.projectName}
                onChange={(e) => this.onChange(e, index)}
              />
            </div>
            <DateRange
              placeholder="dd/mm/yyyy"
              startDate={project.startDate}
              endDate={project.endDate}
              present={project.present}
              index={index}
              onChange={this.onChange}
            />
            <TextareaList
              cols="120"
              placeholder="Aad your achievment"
              name="achievments"
              textAreaList={project.achievments}
              onChange={this.onChange}
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
                onChange={this.onChange}
                index={index}
              />
            </div>
            <div className="icons">
              <CgAdd
                className="add-icon"
                onClick={() => this.addProject(index)}
              />
              <BsTrash
                className="remove-icon"
                onClick={() => this.deleteProject(index)}
              />
            </div>
          </fieldset>
        ))}
      </div>
    );
  }
}
