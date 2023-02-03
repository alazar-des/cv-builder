import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        profile: { name: "", professionalTitle: "", professionalSummery: "" },
        contacts: {email: "", telephone: "", github: "", website: "", linkedin: ""},
        skills: {},
        education: {},
        experience: {},
        projects: {},
      },
    };
    this.onContentChange = this.onContentChange.bind(this);
  }

  onContentChange(contentName, vlaue) {
    this.setState(prevState => ({
      content: {
        ...prevState.content,
        [contentName]: vlaue
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <Nav content={this.state.content}/>
        <form className="content">
          <Profile onContentChange={this.onContentChange}/>
          <Contact onContentChange={this.onContentChange}/>
          <Skills onContentChange={this.onContentChange}/>
          <Education onContentChange={this.onContentChange}/>
          <Experience onContentChange={this.onContentChange}/>
          <Projects onContentChange={this.onContentChange}/>
        </form>
      </div>
    );
  }
}

export default App;
