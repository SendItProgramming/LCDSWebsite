import { render } from "react-dom";
import React, { Component } from "react";

import SammyRegistration from "./../../images/Sammy_Registration_Fees.jpg"

export default class ProgramFees extends Component {

  constructor() {
    super();
  }
    render() {
      console.log(this.props.state)
      return(
        <div className="info">
          <p className="fun">Program Fees</p>
          <p><i><b>LCDS is a not-for-profit, parent cooperative preschool and independent kindergarten program.</b>
          We  pay rent for our classroom and office space to Gateway Alliance Church.
          As we are an independent program, we have fixed operational costs in which we rely upon parent involvement and participation in the program to assist in keeping these costs attainable.
          Parents provide the necessary support for the success of our quality education program.  Without the support of our members through working bingo, casino, classroom cleaning and other volunteer commitments, the society would not be able to support many of the opportunities provided to the children and their families.</i></p>
          <p className="subTitle">The fees below apply to the {this.getYear()} - {this.getYear() + 1} school year.</p>

          <p><a href={this.props.state.site_urls["PreschoolFees"]}  className="redLink">Preschool Fees</a></p>
          <p><a href={this.props.state.site_urls["JrKindergardenFees"]}  className="blueLink">Junior Kindergarten Fees</a></p>
          <p><a href={this.props.state.site_urls["KindergardenFees"]}  className="redLink">Kindergarten Fees</a></p>
          <p><a href={this.props.state.site_urls["RegCommit"]} className="blueLink">Registration Commitments</a></p>
          <p><a href="" className="greenLink">Alberta Parent Stay-At-Home Subsidy Program</a></p>

          <blockquote>
            "We just wanted to say thank you so much for everything this year!! R. has come so far and we are so proud and thankful for all you have done for R. and our family. The things he has learned are incredible but mostly the tools and feedback you have provided to us will go a long way. The attention and care that all of you have shown towards R. throughout this year is amazing and surpassed every expectation we had for R's first school experience. Please pass on our thank you to all of the staff members and have a great summer!!"
          </blockquote>
          <p><b>-Melanie G. Edmonton</b></p>
          <img src={SammyRegistration} alt="" />
        </div>
      );
    }
    getYear(){
      return new Date().getFullYear();
    }
}
