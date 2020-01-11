import React, { Component } from "react";

export default class Registration extends Component {

  render(){

    return(
      <div>
        <p className = "fun">Registration Requirements</p>
        <p><b>All children must be at least 3 years of age and fully toilet trained in order to register with LCDS.</b>
        Fully toilet trained means your child <b>can recognize</b> when they have to go to the washroom and <b>are able to pull their clothes down and up</b>; they must <b>be able to wipe themselves</b> and flush the toilet.
        They <b>must be fully functioning</b> in the bathroom stall.
        Staff may assist with buttons or snaps.</p>
        <br/>

        <p><b>Sending a child to school in “Pull-Ups” is not accepted.</b></p>
        <p className="subTitle">Registration Priority</p>
        <p>All families who have <b>previously</b> registered with <b>LCDS</b> have <b>first priority</b> for registration in the program and are <b>eligible to register in February</b> on the designated registration date for the following year.</p>
        <br/>


        <p>Children who are <b>new</b> to the program are <b>eligible to register in March </b>on the designated registration date.
        Ask about our Free Trial Classes if you are not sure if your child is ready for school.
        <b>Currently registered families</b> will be entered into <b>a random draw for an appointment time</b> to determine the order in which registrants are able to register.
        This gives an equal opportunity for members to pick their choice of days and program time.
        A<b><u>complete</u></b> registration form, fees, all deposit cheques and any supporting documentation <b><u>must</u></b> be submitted to the registrar at the given appointment time. </p>
        <br/>

        <p><b>Previous members</b> who do not have a child currently registered will be able to register <b>after the current families have registered</b>.
        <b>New Families</b> are invited to attend the designated Open House and Registration Night.  </p>
        <br/>

        <p>Open House is a casual drop in format where parents can attend with their children, experience the classroom, meet the Teacher, other staff members and other LCDS Parents. Prospective new Families may direct any of their questions to the LCDS Staff Members or Parents in attendance.
        <b>Those who wish to register in the program will be invited to pick up a registration package and may register at that time providing there are still spots available.</b>
        <b>A wait list is formed when the program is full.  If there are any withdrawals prior to September, the wait list will be accessed by the date in which families were added to the list.</b></p>

        <p>A <b><u>complete</u></b> registration form, fees, all deposit cheques and any supporting documentation <b><u>must</u></b> be submitted to the registrar at the time of registration in order to be considered <b><u>registered</u></b> in the program.</p>
        <br/>

        <a href={this.props.state.site_urls["LearningSupport"]} className="green">Registration Requirements For Learning Support</a>
        <br/>
        <a href={this.props.state.site_urls["RegCommit"]}  className="green">Registration Commitments</a>
        <br/>
        <a href={this.props.state.site_urls["ParentInvolvement"]}className="green">Parent Involvement</a>
      </div>
    );
  }
}