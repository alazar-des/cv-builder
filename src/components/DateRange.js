import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataRange.css";

export default class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      present: false,
    };
  }

  render() {
    return (
      <div className="range-container">
        <div className="datepicker-container">
          <DatePicker
            selected={this.state.startDate}
            placeholderText={this.props.placeholder}
            dateFormat={this.props.dateFormat}
            showMonthYearPicker={this.props.monthYearPicker}
            className={
              this.props.monthYearPicker ? "month-year" : "day-month-year"
            }
            onChange={(date) => this.setState({ startDate: date })}
          />
          <div className="to"> - </div>
          {!this.state.present ? (
            <DatePicker
              selected={this.state.endDate}
              placeholderText={this.props.placeholder}
              dateFormat={this.props.dateFormat}
              showMonthYearPicker={this.props.monthYearPicker}
              className={
                this.props.monthYearPicker ? "month-year" : "day-month-year"
              }
              minDate={this.state.startDate}
              onChange={(date) => this.setState({ endDate: date })}
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
            checked={this.state.present}
            onChange={(e) => this.setState({ present: e.target.checked })}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            Present
          </label>
        </div>
      </div>
    );
  }
}
