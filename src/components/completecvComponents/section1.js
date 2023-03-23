import React, { Component } from "react";

export default class Section1 extends Component {

  render() {
    return (
      <div className="cv-section cv-section1">
        <div className="personal-name">{this.props.general.name}</div>
        <img
          src={require("../.././profilepic.webp")}
          alt=""
          className="personal-picture"
        />
      </div>
    );
  }
}
