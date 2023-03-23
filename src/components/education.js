import React, { Component } from "react";
import "../styles/education.css";

export default class Education extends Component {
  render() {
    return (
      <div className="education-form">
        <div className="education-form-title">Education</div>
        <div className="education-form-section">
          <div className="education-form-school">School</div>
          <input
            className="education-form-school-input"
            type="text"
            placeholder="School"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="education-form-section">
          <div className="education-form-date">Date Attended</div>
          <input
            className="education-form-date-input"
            type="date"
            placeholder="Date"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="education-form-section">
          <div className="education-form-degree">Degree</div>
          <input
            className="education-form-degree-input"
            type="text"
            placeholder="Degree"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="education-form-section">
          <div className="education-form-field">Field of Study</div>
          <input
            className="education-form-field-input"
            type="text"
            placeholder="Field of Study"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="education-form-section">
          <div className="education-form-location">Location</div>
          <input
            className="education-form-location-input"
            type="text"
            placeholder="Location"
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}
