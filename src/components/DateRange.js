import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataRange.css";

const DateRange = (props) => {
  const onChange = (name, value) => {
    const e = {
      target: {
        name,
        value,
      },
    };
    props.onChange(e, props.index);
  };

  return (
    <div className="range-container">
      <div className="datepicker-container">
        <DatePicker
          selected={props.startDate}
          placeholderText={props.placeholder}
          dateFormat={props.dateFormat}
          showMonthYearPicker={props.monthYearPicker}
          className={props.monthYearPicker ? "month-year" : "day-month-year"}
          onChange={(date) => onChange("startDate", date)}
        />
        <div className="to"> - </div>
        {!props.present ? (
          <DatePicker
            selected={props.endDate}
            placeholderText={props.placeholder}
            dateFormat={props.dateFormat}
            showMonthYearPicker={props.monthYearPicker}
            className={props.monthYearPicker ? "month-year" : "day-month-year"}
            minDate={props.startDate}
            name="endDate"
            onChange={(date) => onChange("endDate", date)}
          />
        ) : (
          <input
            type="text"
            value="Present"
            onChange={onChange}
            className={props.monthYearPicker ? "month-year" : "day-month-year"}
          />
        )}
      </div>
      <div className="present">
        <input
          type="checkbox"
          checked={props.present}
          onChange={(e) => onChange("present", e.target.checked)}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          Present
        </label>
      </div>
    </div>
  );
};

export default DateRange;
