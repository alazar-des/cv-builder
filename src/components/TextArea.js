import React from "react";

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaRows: "1",
      value: "",
    };
    this.onTextareaChange = this.onTextareaChange.bind(this);
  }

  onTextareaChange(e) {
    let value = e.target.value;
    let cols = e.target.cols;
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
    this.props.onChange(e, this.props.index)
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
        onChange={this.onTextareaChange}
      ></textarea>
    );
  }
}
