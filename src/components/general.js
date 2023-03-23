import React, { Component } from "react";
import "../styles/general.css";

export default class General extends Component {
  render() {
    return (
      <div className="general-form">
        <div className="general-form-title">General</div>
        <div className="general-form-section">
          <div className="general-form-name">Name</div>
          <input
            className="general-form-name-input"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="general-form-section">
          <div className="general-form-email">Email</div>
          <input
            className="general-form-email-input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="general-form-section">
          <div className="general-form-phone">Phone Number</div>
          <input
            className="general-form-phone-input"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="general-form-section">
          <div className="general-form-location">Location</div>
          <input
            className="general-form-location-input"
            type="text"
            placeholder="Location"
          />
        </div>
        <div className="general-form-section">
          <div className="general-form-description">Description About You</div>
          <textarea
            className="general-form-description-input"
            type="text"
            placeholder="..."
          />
        </div>
      </div>
    );
  }
}
