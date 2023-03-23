/* React */
import React, { Component } from "react";
import General from "./components/general";
import CompleteCv from "./components/completecv";
import Education from "./components/education";
import Practical from "./components/practical";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        name: "",
        email: "",
        phone: "",
        description: "",
        location: "",
      },

      education: {
        school: "",
        date: "",
        degree: "",
        field: "",
        location: "",
        id: uniqid(),
      },

      educations: [],

      experience: {
        jobTitle: "",
        company: "",
        date: "",
        location: "",
        id: uniqid(),
      },

      experiences: [],
    };

    this.createCv = this.createCv.bind(this);
    this.UpdateCv = this.UpdateCv.bind(this);
  }

  UpdateCv() {
    this.setState({
      education: {
        school: document.querySelector(".education-form-school-input").value,
        date: document.querySelector(".education-form-date-input").value,
        degree: document.querySelector(".education-form-degree-input").value,
        field: document.querySelector(".education-form-field-input").value,
        location: document.querySelector(".education-form-location-input")
          .value,
      },

      experience: {
        jobTitle: document.querySelector(".practical-form-job-title-input")
          .value,
        company: document.querySelector(".practical-form-company-input").value,
        date: document.querySelector(".practical-form-date-input").value,
        location: document.querySelector(".practical-form-location-input")
          .value,
      },
    });
  }

  createCv() {
    this.setState({
      general: {
        name: document.querySelector(".general-form-name-input").value,
        email: document.querySelector(".general-form-email-input").value,
        phone: document.querySelector(".general-form-phone-input").value,
        description: document.querySelector(".general-form-description-input").value,
        location: document.querySelector(".general-form-location-input").value
      },  
      educations: this.state.educations.concat(this.state.education),
      experiences: this.state.experiences.concat(this.state.experience),
    });
  }

  render() {
    return (
      <div className="app">
        <div className="cv-form">
          <General />
          <Education handleChange={this.UpdateCv} />
          <Practical handleChange={this.UpdateCv} />
          <button className="submit-button" onClick={this.createCv}>
            Create CV
          </button>
        </div>
        <CompleteCv experiences={this.state.experiences} educations={this.state.educations} general={this.state.general} />
      </div>
    );
  }
}

export default App;
