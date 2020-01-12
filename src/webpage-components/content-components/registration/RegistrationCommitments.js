import React, { Component } from "react";

export default class RegistrationCommitments extends Component {
  render() {

    return(
      <div className="info">
				<p className="fun">Registration Requirements</p>
				<p className="subTitle">Upon registering with LCDS Preschool & Kindergarten, each registered family agrees to participate in the following commitments:</p>
				<ul>
				<li><b>1 Classroom Cleaning per registered child</b> (Dates are provided at registration for families to sign up)</li>
				<li>
				<b>2 Bingo Shifts per registered child</b> (the number of bingo shifts may change depending on enrollment numbers each year. Dates are provided at registration)
				</li>
				<li><b>1 Casino Shift per family</b> (Only on a casino year; there are a limited number of shifts available, those families who do not get a shift will be required to fulfill the commitment with an extra bingo shift)</li>
				<li><b>Parent Helper Duty</b> - One representative from each family will be scheduled approximately once per month for a Parent Helper Day.  Families provide their availability to LCDS and will be scheduled on the calendar to the best of the schedulers abilities.  On the scheduled Parent Helper Day, the parent is responsible for bringing the scheduled Healthy snack and beverage for 17 children (ie. Fruit & Crackers, Veggies and Crackers, Muffins, Sandwiches, or Cheese & Crackers), some daily cleaning duties and assistance with project preparations.  It is also a special day for your child, they get to be the helping hand on that day and have some special leadership responsibilities.</li>
				<li><b>Fundraising</b> - LCDS families have chosen to pay a one time family fundraising fee per year instead of running numerous fundraisers each year.  Each family will submit a $300.00 fee at the beginning of September and will receive a tax donation receipt for the amount of $300.00.  There are options to this fee, please see <a href={this.props.state.site_urls["Fundraising"]}>Fundraising</a> for more information.</li>
				<li><b>Attend Society Meetings</b> - LCDS Preschool & Kindergarten is required by regulation to hold regular meetings to ensure members are informed of the current status of the society. 3 General Meetings are held each year (September, January and May). One member per family is asked to attend each scheduled meeting to stay informed.  This also ensures quorum is met if there is need for a membership vote and ensures society operations are being carried out accordingly.</li>
				</ul>
			</div>
    )
  }
}