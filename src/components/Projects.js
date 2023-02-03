import React from "react";
import uuid from "react-uuid";

import Textarea from "./TextArea";
import DateRange from "./DateRange";
import TextareaList from "./TextareaList";
import "./Education.css";
import "./Projects.css";

import { CgAdd } from "react-icons/cg";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {
          id: uuid(),
          projectName: "",
          dateRange: {
            startDate: null,
            endDate: null,
            present: false,
          },
          acheivment: [],
          techologies: "",
        },
      ],
    };

    this.addProject = this.addProject.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, project) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      educationList: this.state.educationList.map((edu) => {
        if (edu.id === project.id) {
          edu[name] = value;
        }
        return edu;
      }),
    });
  }

  addProject() {
    const newProject = {
      id: uuid(),
      projectName: "",
      dateRange: {
        startDate: null,
        endDate: null,
        present: false,
      },
      acheivment: [],
      techologies: [],
    };
    this.setState({
      projectList: [...this.state.projectList, newProject],
    });
  }

  render() {
    return (
      <div className="education">
        <h1 className="title">Personal Projects</h1>
        {this.state.projectList.map((project) => (
          <fieldset className="education-form" key={project.id}>
            <div className="project">
              <input
                type="text"
                placeholder="Project Name"
                className="study"
                name="projectName"
                value={project.studyProgram}
                onChange={(e) => this.onChange(e, project)}
              />
            </div>
            <DateRange placeholder="dd/mm/yyyy" />
            <TextareaList cols="120" placeholder="Aad your achievment" />
            <div className="technologies">
              <span>Technologies: </span>
              <Textarea
                name="technologies"
                placeholder="Technologies used"
                cols="100"
                id="technologis"
                value={this.state.technologies}
                onChange={this.onChange}
              />
            </div>
          </fieldset>
        ))}
        <CgAdd className="add-icon" onClick={this.addProject} />
      </div>
    );
  }
}
