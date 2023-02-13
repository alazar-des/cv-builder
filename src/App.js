import React, { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import uuid from "react-uuid";

const App = () => {
  const [content, setContent] = useState({
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
  });

  const onContentChange = (contentName, vlaue) => {
    setContent((prevState) => ({
      ...prevState,
      [contentName]: vlaue,
    }));
  };

  return (
    <div className="App">
      <Nav content={content} />
      <form className="content">
        <Profile onContentChange={onContentChange} profile={content.profile} />
        <Contact
          onContentChange={onContentChange}
          contacts={content.contacts}
        />
        <Skills onContentChange={onContentChange} skills={content.skills} />
        <Education
          onContentChange={onContentChange}
          educations={content.educations}
        />
        <Experience
          onContentChange={onContentChange}
          experiences={content.experiences}
        />
        <Projects
          onContentChange={onContentChange}
          projects={content.projects}
        />
      </form>
    </div>
  );
};

export default App;
