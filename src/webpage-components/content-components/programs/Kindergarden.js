import React, { Component } from "react";
import SammySchool from "./../../../images/Sammy_School_Image.jpg"

export default class Kindergarden extends Component {

  render() {

    return(
      <div className="info">
				<p className= "fun">Kindergarden</p>
				<p><b>LCDS Preschool & Kindergarden</b> offers a small class setting for Kindergarden children with a maximum 1:7 teacher to child ratio.</p>
				<p>A <b>maximum</b> of <b>7 Kindergarden students</b> are enrolled in each daily class; combined with the preschool students to a <b>maximum of 17 students/day/class</b>.</p>
				<p><b>Kindergarden curriculum is provided and funded by Alberta Education.</b>
				The Kindergarden curriculum overlaps the goals and guidelines laid out for the Preschool students; the expectation is the Kindergarden students have already had exposure to these goals or will have by the end of the school year.
				Our goal for all children in our program is to be Kindergarden ready.</p>

				<p><b>Please see <a className= "green" href={this.props.state.site_urls["PreschoolDevSkills"]}> Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

				<p><b>Children who turn 5 before March 1st in the upcoming school year (September - May)</b> are eligible to <b>attend Kindergarden in Alberta</b>.
				Students who qualify for Kindergarden attend 5 half days /week, unless an alternate path has been approved by the teacher and parents.</p>

				<p><b>Please note:</b></p>
				<p><b><i>Alberta Education will be changing the date for Kindergarden eligibility for the {this.getYear() +1} - {this.getYear() +2} school year.</i></b>
				<b><i>Children will need to turn 5 before December 31st of {this.getYear() +1} in order to be eligible for Kindergarden.</i></b></p>

				<p><b>If your child is eligible for enrolment in Kindergarden</b>, and you feel he/she is <b>not ready</b> to attend, please <b>contact the office</b> with your concerns; learning alternatives may be available.</p>
				<p><b>Kindergarden</b> students <b>begin class 20 minutes earlier</b> than the preschool students to work on specific Kindergarden curriculum goals; more class time is provided for Kindergarden work throughout the half day schedule.</p>
				<p><b>The daily classroom routine is designed to follow the Kindergarden Curriculum Guidelines.</b></p>

				<p className="green"><b>More information on curriculum and education guidelines can be found on the Alberta Education Website, <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">Kindergarden Curriculum Guidelines</a></b></p>

				<img src={SammySchool} alt="" />

			</div>
    )
	}

  getYear(){
    return new Date().getFullYear();
  }
}