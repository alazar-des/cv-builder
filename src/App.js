import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import uuid from "react-uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        profile: { name: "", professionalTitle: "", professionalSummery: "" },
        contacts: {
          email: "",
          telephone: "",
          github: "",
          website: "",
          linkedin: "",
        },
        skills: { [uuid()]: "" },
        educations: [
          {
            id: uuid(),
            studyProgram: "",
            institution: "",
            startDate: null,
            endDate: null,
            present: false,
          },
        ],
        experiences: [
          {
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
          },
        ],
        projects: [
          {
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
            techologies: "",
          },
        ],
      },
    };
    this.onContentChange = this.onContentChange.bind(this);
  }

  onContentChange(contentName, vlaue) {
    this.setState((prevState) => ({
      content: {
        ...prevState.content,
        [contentName]: vlaue,
      },
    }));
  }

  render() {
    return (
      <div className="App">
        <Nav content={this.state.content} />
        <form className="content">
          <Profile
            onContentChange={this.onContentChange}
            profile={this.state.content.profile}
          />
          <Contact
            onContentChange={this.onContentChange}
            contacts={this.state.content.contacts}
          />
          <Skills
            onContentChange={this.onContentChange}
            skills={this.state.content.skills}
          />
          <Education
            onContentChange={this.onContentChange}
            educations={this.state.content.educations}
          />
          <Experience
            onContentChange={this.onContentChange}
            experiences={this.state.content.experiences}
          />
          <Projects
            onContentChange={this.onContentChange}
            projects={this.state.content.projects}
          />
        </form>
      </div>
    );
  }
}

export default App;
