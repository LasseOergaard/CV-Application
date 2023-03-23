import React, { Component } from "react";
import "../styles/practical.css"

export default class Practical extends Component {
  render() {
    return (
      <div className="practical-form">
        <div className="practical-form-title">Experience</div>
        <div className="practical-form-section">
          <div className="practical-form-job-title">Job Title</div>
          <input
            className="practical-form-job-title-input"
            type="text"
            placeholder="Job-title"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="practical-form-section">
          <div className="practical-form-company">Company</div>
          <input
            className="practical-form-company-input"
            type="text"
            placeholder="Company"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="practical-form-section">
          <div className="practical-form-date">Date Worked</div>
          <input
            className="practical-form-date-input"
            type="text"
            placeholder="Date Worked"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="practical-form-section">
          <div className="practical-form-location">Location</div>
          <input
            className="practical-form-location-input"
            type="text"
            placeholder="Location"
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}
