import React, { useState } from "react";

const Input = (props) => {
  const [width, setWidth] = useState(props.defaultSize);

  const onChange = (e) => {
    const value = e.target.value;
    setWidth(value.length > props.defaultSize ? value.length : props.defaultSize);
    props.onInputChange(e, props.index);
  };

  const { type, name, placeholder } = props;
  const style = {
    width: width + "ch",
    textAlign: props.alignText,
  };
  return (
    <input
      type={type}
      name={name}
      id={props.id}
      placeholder={placeholder}
      value={props.value}
      onChange={onChange}
      style={style}
    />
  );
};

export default Input;
