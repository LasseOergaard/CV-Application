import React, { Component } from "react";

export default class Section2 extends Component {
  render() {
    return (
      <div className="cv-section cv-section2">
        <div className="general-info">
          <ul>
            <li>
              Phone:
              <span className="general-info-info">
                {this.props.general.phone}
              </span>
            </li>
            <li>
              Email:
              <span className="general-info-info">
                {this.props.general.email}
              </span>
            </li>
            <li>
              Location
              <span className="general-info-info">
                {this.props.general.location}
              </span>
            </li>
          </ul>
        </div>
        <div className="general-info-description">
          <div className="general-info-title">About me</div>
          <div className="general-info-description-text">
            {this.props.general.description}
          </div>
        </div>
      </div>
    );
  }
}
