import React, { Component } from "react";

/* Style */

import "../styles/completecv.css";
import Section1 from "./completecvComponents/section1";
import Section2 from "./completecvComponents/section2";
import Section3 from "./completecvComponents/section3";
import Section4 from "./completecvComponents/section4";

export default class CompleteCv extends Component {


  render() {
    return (
      <div className="complete-cv">
        <Section1 general={this.props.general}/>
        <Section2 general={this.props.general}/>
        <div className="complete-cv-split" >
          <Section3 educations={this.props.educations} />
          <Section4 experiences={this.props.experiences}/>
        </div>
        


      </div>
    );
  }
}
