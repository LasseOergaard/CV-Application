import React, { Component } from "react";

export default class Section3 extends Component {
  render() {
    return (
      <div className="cv-section cv-section3">
        <div className="education-title">Education</div>
        {this.props.educations.map((education) => {
          return (
            <div className="education-wrapper" key={education.id}>
              <ul>
                <li>
                  School:
                  <span className="education-info">{education.school}</span>
                </li>
                <li>
                  Date:
                  <span className="education-info">{education.date}</span>
                </li>
                <li>
                  Degree:
                  <span className="education-info">{education.degree}</span>
                </li>
                <li>
                  Field:
                  <span className="education-info">{education.field}</span>
                </li>
                <li>
                  Location:
                  <span className="education-info">{education.location}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
