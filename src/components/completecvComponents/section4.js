import React, { Component } from "react";

export default class Section4 extends Component {
  render() {
    return (
      <div className="cv-section4">
        <div className="experience-title">Experience</div>
        {this.props.experiences.map((experience) => {
          return (
              <div className="experience-wrapper" key={experience.id}>
                <ul>
                  <li>
                    Job:
                    <span className="experience-info">{experience.jobTitle}</span>
                  </li>
                  <li>
                    Company:
                    <span className="experience-info">{experience.company}</span>
                  </li>
                  <li>
                    Date:
                    <span className="experience-info">{experience.date}</span>
                  </li>
                  <li>
                    Location:
                    <span className="experience-info">{experience.location}</span>
                  </li>
                </ul>
              </div>
          );
        })}
      </div>
    );
  }
}
