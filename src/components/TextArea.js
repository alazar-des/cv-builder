import React, { useState } from "react";

const Textarea = (props) => {
  const [value, setValue] = useState("");
  const [textareaRows, setTextAreaRows] = useState("1");

  const { name, id, cols, placeholder } = props;

  const onTextareaChange = (e) => {
    let value = e.target.value;
    let cols = e.target.cols;
    let rows = 0;
    value.split("\n").forEach((line) => {
      let r = Math.ceil(line.length / cols);
      r = r === 0 ? 1 : r;
      rows += r;
    });
    setValue(value);
    setTextAreaRows(rows + "");
    props.onChange(e, props.index);
  };

  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={textareaRows}
      placeholder={placeholder}
      value={value}
      onChange={onTextareaChange}
    ></textarea>
  );
};

export default Textarea;
