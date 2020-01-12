import React, { Component } from "react";
import SammySchool from "./../../../images/Sammy_School_Image.jpg"

export default class JrKindergarden extends Component {

  render() {

    return(
      <div className="info">
			<p className="fun">Junior Kindergarden</p>
			<p><b>LCDS Preschool & Kindergarden</b> offers a Junior Kindergarden program for those children who are academically ready to attend Kindergarden <b>but will not be old enough to attend Kindergarden in the coming school year due to their birth date occurring after the Alberta Education cut off date for entering Kindergarden by March 1st.</b></p>

			<p>Children who are <b>4 years old and will turn 5 between March 1st and June 1st of the coming school year</b> are eligible to participate in the Junior Kindergarden program at LCDS.  Children enrolled in the Junior Kindergarden Program will attend 4 or 5 half days / week with the Kindergarden children. </p>

			<p><b>**Junior Kindergarden is not funded by the Alberta Government</b>, regular monthly fees for 4 or 5 half days / week will apply.</p>
			<p><b>Junior Kindergarden</b> children <b>begin class 20 minutes earlier</b> than the preschool children to work on specific Junior Kindergarden curriculum goals; more class time is provided for extra work (if needed) throughout the half day schedule.
				The children will be introduced to the Kindergarden curriculum goals and will begin to develop their educational skills at there own pace. With early exposure to the Kindergarden curriculum, these children will be able to master the curriculum concepts in their Kindergarden year.
				<b>The daily classroom routine is designed to introduce all of the children to the Kindergarden Curriculum Guidelines.</b></p>

			<p>Junior Kindergarden children will be introduced to the concepts provided in the Kindergarden curriculum set out by Alberta Education.  The Kindergarden curriculum overlaps the goals and guidelines laid out for the Preschool children; the expectation is the Junior Kindergarden & Kindergarden children have already had exposure to these goals or will have by the end of the school year.  Our goal for all children in our program is to be Kindergarden ready.</p>
			<p>A <b>maximum of 7 combined Kindergarden  & Junior Kindergarden children</b> are enrolled in each daily class; mixed with the preschool children to a <b>maximum of 17 children/day/class</b>. The Kindergarden and Junior Kindergarden children attend together in a small group setting with a maximum 1:7 teacher to child ratio. </p>

			<p><i>*If there is a demand for more Junior Kindergarden or Kindergarden spots, the maximum number of children may change without notice.</i></p>

			<p><b>Please see <a className= "green" href={this.props.state.site_urls["PreschoolDevSkills"]}>Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

			<p><b>Please note:
			<i>Alberta Education will be changing the date for Kindergarden eligibility for the {this.getYear() +1} - {this.getYear() +2} school year.
				Children will need to turn 5 before December 31st of {this.getYear() +1} in order to be eligible for Kindergarden.</i></b></p>

			<p className= "green"><b>More information on curriculum and education guidelines can be found on the Alberta Education Website, <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">Kindergarden Curriculum</a></b></p>

			<img src={SammySchool} alt="" />
			</div>
    )
  }

  getYear(){
    return new Date().getFullYear();
  }

}