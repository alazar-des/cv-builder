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
    this.state = {
      email: {value: "", width: 8},
      telephone: {value: "", width: 8},
      github: {value: "", width: 8},
      website: {value: "", width: 8},
      linkedin: {value: "", width: 8},
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(target, width) {
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: {
        value,
        width
      },
    });
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
            size={this.state.email.width}
            value={this.state.email.value}
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
            size={this.state.telephone.width}
            value={this.state.telephone.value}
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
            size={this.state.github.width}
            value={this.state.github.value}
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
            size={this.state.website.width}
            value={this.state.website.value}
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
            size={this.state.linkedin.width}
            value={this.state.linkedin.value}
            onInputChange={this.onChange}
            defaultSize={8}
          />
        </div>
      </fieldset>
    );
  }
}
