import React from "react";

import "./Contact.css";
import Input from "./Input";

import { HiOutlineMail } from "react-icons/hi";
import { BsPhone, BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";

const Contact = (props) => {
  const onChange = (e) => {
    const contacts = { ...props.contacts, [e.target.name]: e.target.value };
    props.onContentChange("contacts", contacts);
  };

  return (
    <fieldset className="contacts">
      <div>
        <label htmlFor="email">
          <HiOutlineMail className="icon" />
        </label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={props.contacts.email}
          onInputChange={onChange}
          defaultSize={8}
        />
      </div>
      <div>
        <label htmlFor="tel">
          <BsPhone className="icon" />
        </label>
        <Input
          type="tel"
          name="telephone"
          placeholder="phone"
          value={props.contacts.telephone}
          onInputChange={onChange}
          defaultSize={8}
        />
      </div>
      <div>
        <label htmlFor="github">
          <BsGithub className="icon" />
        </label>
        <Input
          type="link"
          name="github"
          placeholder="Github"
          value={props.contacts.github}
          onInputChange={onChange}
          defaultSize={8}
        />
      </div>
      <div>
        <label htmlFor="website">
          <CgWebsite className="icon" />
        </label>
        <Input
          type="link"
          name="website"
          placeholder="Website"
          value={props.contacts.website}
          onInputChange={onChange}
          defaultSize={8}
        />
      </div>
      <div>
        <label htmlFor="linkedin">
          <CiLinkedin className="icon" />
        </label>
        <Input
          type="link"
          name="linkedin"
          placeholder="Linkedin"
          value={props.contacts.linkedin}
          onInputChange={onChange}
          defaultSize={8}
        />
      </div>
    </fieldset>
  );
};

export default Contact;
