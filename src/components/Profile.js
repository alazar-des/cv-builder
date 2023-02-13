import React from "react";
import "./Profile.css";

import TextArea from "./TextArea";

const Profile = (props) => {
  const onChange = (e) => {
    const profile = { ...props.profile, [e.target.name]: e.target.value };
    props.onContentChange("profile", profile);
  };

  return (
    <fieldset className="profile">
      <input
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        value={props.profile.name}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="professionalTitle"
        placeholder="Professional Title"
        id="professional-title"
        value={props.profile.professionalTitle}
        onChange={onChange}
      />
      <br />
      <TextArea
        name="professionalSummery"
        placeholder="professional summery"
        cols="120"
        id="summery"
        value={props.profile.professionalSummery}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default Profile;
