import React from "react";
import uuid from "react-uuid";

import "./TextareaList.css";

const TextareaList = (props) => {
  const onChange = (event, id) => {
    const value = event.target.value;
    if (value[value.length - 1] !== "\n") {
      const textArea = props.textAreaList.map((t) => {
        if (t.id === id) {
          t.value = value;
          t.rows = Math.ceil(value.length / props.cols);
        }
        return t;
      });
      const e = {
        target: {
          name: props.name,
          value: textArea,
        },
      };

      props.onChange(e, props.index);
    }
  };

  const onEnter = (event, id) => {
    const index = props.textAreaList.findIndex((ta) => ta.id === id) + 1;

    const li = {
      id: uuid(),
      rows: "1",
      value: "",
    };
    let newArr = [
      ...props.textAreaList.slice(0, index),
      li,
      ...props.textAreaList.slice(index),
    ];
    const e = {
      target: {
        name: props.name,
        value: newArr,
      },
    };

    props.onChange(e, props.index);
  };

  const onBackspace = (event, id) => {
    if (props.textAreaList.length > 1) {
      const index = props.textAreaList.findIndex((ta) => ta.id === id);

      let newArr = [
        ...props.textAreaList.slice(0, index),
        ...props.textAreaList.slice(index + 1),
      ];
      const e = {
        target: {
          name: props.name,
          value: newArr,
        },
      };

      props.onChange(e, props.index);
    }
  };

  return (
    <ul className="textarea-list">
      {props.textAreaList.map((ta) => {
        return (
          <li key={ta.id}>
            <textarea
              id={ta.id}
              cols={props.cols}
              rows={ta.rows}
              value={ta.value}
              placeholder={props.placeholder}
              onChange={(e) => onChange(e, ta.id)}
              onKeyDown={(e) =>
                e.key === "Enter" && e.target.value
                  ? onEnter(e, ta.id)
                  : e.key === "Backspace" && !e.target.value
                  ? onBackspace(e, ta.id)
                  : null
              }
            >
              {props.placeholder}
            </textarea>
          </li>
        );
      })}
    </ul>
  );
};

export default TextareaList;
