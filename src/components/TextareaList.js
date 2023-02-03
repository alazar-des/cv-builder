import React from "react";
import uuid from "react-uuid";

import "./TextareaList.css";

export default class TextareaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArea: [
        {
          id: uuid(),
          rows: "1",
          value: "",
        },
      ],
    };
    this.listTextArea = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onBackspace = this.onBackspace.bind(this);
  }

  onChange(e, id) {
    const value = e.target.value;
    if (value[value.length - 1] !== "\n") {
      this.setState({
        textArea: this.state.textArea.map((t) => {
          if (t.id === id) {
            t.value = value;
            t.rows = Math.ceil(value.length / this.props.cols);
          }
          return t;
        }),
      });
    }
  }

  onEnter(e, id) {
    const index = this.state.textArea.findIndex((ta) => ta.id === id) + 1;
    this.listTextArea.current = index;
    const li = {
      id: uuid(),
      rows: "1",
      value: "",
    };
    let newArr = [
      ...this.state.textArea.slice(0, index),
      li,
      ...this.state.textArea.slice(index),
    ];
    this.setState({
      textArea: newArr,
    });
  }

  onBackspace(e, id) {
    if (this.state.textArea.length > 1) {
      const index = this.state.textArea.findIndex((ta) => ta.id === id);
      this.listTextArea.current = index - 1;
      let newArr = [
        ...this.state.textArea.slice(0, index),
        ...this.state.textArea.slice(index + 1),
      ];
      this.setState({
        textArea: newArr,
      });
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.textArea.length !== this.state.textArea.length) {
      return this.listTextArea.current;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (snapShot !== null) {
      const nodeList = document.querySelectorAll(".textarea-list li textarea");
      nodeList[snapShot].focus();
    }
  }

  render() {
    return (
      <ul className="textarea-list">
        {this.state.textArea.map((ta) => {
          return (
            <li key={ta.id}>
              <textarea
                id={ta.id}
                cols={this.props.cols}
                rows={ta.rows}
                value={ta.value}
                placeholder={this.props.placeholder}
                onChange={(e) => this.onChange(e, ta.id)}
                onKeyDown={(e) =>
                  e.key === "Enter" && e.target.value
                    ? this.onEnter(e, ta.id)
                    : e.key === "Backspace" && !e.target.value
                    ? this.onBackspace(e, ta.id)
                    : null
                }
              >{this.props.placeholder}</textarea>
            </li>
          );
        })}
      </ul>
    );
  }
}
