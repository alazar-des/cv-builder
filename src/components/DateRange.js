import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataRange.css";

export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (name, value) => {
    const e = {
      target: {
        name,
        value,
      },
    };
    this.props.onChange(e, this.props.index);
  };

  render() {
    return (
      <div className="range-container">
        <div className="datepicker-container">
          <DatePicker
            selected={this.props.startDate}
            placeholderText={this.props.placeholder}
            dateFormat={this.props.dateFormat}
            showMonthYearPicker={this.props.monthYearPicker}
            className={
              this.props.monthYearPicker ? "month-year" : "day-month-year"
            }
            onChange={(date) => this.onChange("startDate", date )}
          />
          <div className="to"> - </div>
          {!this.props.present ? (
            <DatePicker
              selected={this.props.endDate}
              placeholderText={this.props.placeholder}
              dateFormat={this.props.dateFormat}
              showMonthYearPicker={this.props.monthYearPicker}
              className={
                this.props.monthYearPicker ? "month-year" : "day-month-year"
              }
              minDate={this.props.startDate}
              name="endDate"
              onChange={(date) => this.onChange("endDate", date )}
            />
          ) : (
            <input
              type="text"
              value="Present"
              onChange={this.onChange}
              className={
                this.props.monthYearPicker ? "month-year" : "day-month-year"
              }
            />
          )}
        </div>
        <div className="present">
          <input
            type="checkbox"
            checked={this.props.present}
            onChange={(e) => this.onChange("present", e.target.checked )}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            Present
          </label>
        </div>
      </div>
    );
  }
}
