import React from "react";

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaRows: "1",
      value: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let value = event.target.value;
    let cols = event.target.cols;
    let rows = 0;
    value.split("\n").forEach((line) => {
      let r = Math.ceil(line.length / cols);
      r = r === 0 ? 1 : r;
      rows += r;
    });
    this.setState({
      textareaRows: rows + "",
      value: value,
    });
  }

  render() {
    const { name, id, cols, placeholder } = this.props;
    return (
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={this.state.textareaRows}
        placeholder={placeholder}
        value={this.state.value}
        onChange={this.onChange}
      ></textarea>
    );
  }
}
