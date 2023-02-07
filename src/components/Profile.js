import React from "react";
import "./Profile.css";

import TextArea from "./TextArea";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const profile = { ...this.props.profile, [e.target.name]: e.target.value };
    this.props.onContentChange("profile", profile);
  }

  render() {
    return (
      <fieldset className="profile">
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={this.props.profile.name}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="professionalTitle"
          placeholder="Professional Title"
          id="professional-title"
          value={this.props.profile.professionalTitle}
          onChange={this.onChange}
        />
        <br />
        <TextArea
          name="professionalSummery"
          placeholder="professional summery"
          cols="120"
          id="summery"
          value={this.props.profile.professionalSummery}
          onChange={this.onChange}
        />
      </fieldset>
    );
  }
}
