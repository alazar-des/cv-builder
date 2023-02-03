import React from "react";
import "./Profile.css";

import Textarea from "./TextArea";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      professionalTitle: "",
      professionalSummery: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <fieldset className="profile">
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="professionalTitle"
          placeholder="Professional Title"
          id="professional-title"
          value={this.state.professionalTitle}
          onChange={this.onChange}
        />
        <br />
        <Textarea
          name="professionalSummery"
          placeholder="professional summery"
          cols="120"
          id="summery"
          value={this.state.professionalSummery}
          onChange={this.onChange}
        />
      </fieldset>
    );
  }
}
