import React from "react";
import uuid from "react-uuid";

import "./TextareaList.css";

export default class TextareaList extends React.Component {
  constructor(props) {
    super(props);
    this.listTextArea = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onBackspace = this.onBackspace.bind(this);
  }

  onChange(event, id) {
    const value = event.target.value;
    if (value[value.length - 1] !== "\n") {
      const textArea = this.props.textAreaList.map((t) => {
        if (t.id === id) {
          t.value = value;
          t.rows = Math.ceil(value.length / this.props.cols);
        }
        return t;
      });
      const e = {
        target: {
          name: this.props.name,
          value: textArea,
        },
      };
      this.props.onChange(e, this.props.index);
    }
  }

  onEnter(event, id) {
    const index = this.props.textAreaList.findIndex((ta) => ta.id === id) + 1;
    this.listTextArea.current = index;
    const li = {
      id: uuid(),
      rows: "1",
      value: "",
    };
    let newArr = [
      ...this.props.textAreaList.slice(0, index),
      li,
      ...this.props.textAreaList.slice(index),
    ];
    const e = {
      target: {
        name: this.props.name,
        value: newArr,
      },
    };
    this.props.onChange(e, this.props.index);
  }

  onBackspace(event, id) {
    if (this.props.textAreaList.length > 1) {
      const index = this.props.textAreaList.findIndex((ta) => ta.id === id);
      this.listTextArea.current = index - 1;
      let newArr = [
        ...this.props.textAreaList.slice(0, index),
        ...this.props.textAreaList.slice(index + 1),
      ];
      const e = {
        target: {
          name: this.props.name,
          value: newArr,
        },
      };
      this.props.onChange(e, this.props.index);
    }
  }

  /*
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.textAreaList.length !== this.props.textAreaList.length) {
      return this.listTextArea.current;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (snapShot !== null) {
      const nodeList = document.querySelectorAll(".textarea-list li textarea");
      nodeList[snapShot].focus();
    }
  }*/

  render() {
    return (
      <ul className="textarea-list">
        {this.props.textAreaList.map((ta) => {
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
              >
                {this.props.placeholder}
              </textarea>
            </li>
          );
        })}
      </ul>
    );
  }
}
