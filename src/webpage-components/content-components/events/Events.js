import React, { Component } from "react";
import { TrialClasses } from "./../../SharedComponents.js"

export default class Events extends Component {
  render() {

    return(
      <div className="info">
      <p className="fun">Open House & Register for {this.getYear()}/{this.getYear() +1}</p>
      <p className="green">Is Your Child 3, 4 or 5 Years Old? Are They Ready to Start School?
        Register Your Child Today!</p>
        <p><b>LCDS Preschool & Kindergarten has an awesome program for your child.
        We offer Kindergarten, Jr. Kindergarten and Preschool for children 3 to 5 years old.</b></p>

        <p><b>We are now accepting new Registrations for Kindergarten, Jr. Kindergarten and Preschool for September {this.getYear()}.  The AM Class is tentatively full at this time but you are welcome to put your name on our wait list; we still have lots of room in the PM Class.</b></p>

        <p><b>Registration Forms are available from our school office.</b></p>

        <p><b>To be eligible for Kindergarten for the {this.getYear()} - {this.getYear() +1} school year, your child must be 5 years old before March 1st {this.getYear() +1}.</b></p>


        <p>**The entry age for Kindergarten will be changing for the {this.getYear() +1} - {this.getYear() +2} school year.
        To be eligible for Kindergarten for September {this.getYear() +1}, your child must turn 5 before December 31st, {this.getYear() +1}.</p>

        <p><b>Trial Classes are also available call the office to book an appointment.</b></p>

        <p>Please speak with our office if you have any questions.</p>
        <TrialClasses site_urls={this.props.state.urls}/>
      </div>
    )
  }

  getYear(){
    return new Date().getFullYear();
  }
}