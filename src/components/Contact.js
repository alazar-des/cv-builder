import React from "react";

import "./Contact.css";
import Input from "./Input";

import { HiOutlineMail } from "react-icons/hi";
import { BsPhone, BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const contacts = { ...this.props.contacts, [e.target.name]: e.target.value };
    this.props.onContentChange("contacts", contacts)
  }

  render() {
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
            value={this.props.contacts.email}
            onInputChange={this.onChange}
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
            value={this.props.contacts.telephone}
            onInputChange={this.onChange}
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
            value={this.props.contacts.github}
            onInputChange={this.onChange}
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
            value={this.props.contacts.website}
            onInputChange={this.onChange}
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
            value={this.props.contacts.linkedin}
            onInputChange={this.onChange}
            defaultSize={8}
          />
        </div>
      </fieldset>
    );
  }
}
