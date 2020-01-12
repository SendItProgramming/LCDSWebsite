import React, { Component } from "react";
import SammyBoardRoom from "./../../../../images/Sammy_Our_Board_Image.jpg"

export default class BoardDirectors extends Component {

  render() {

    return(
      <div className="info">
			<p className="fun"> Board of Directors Positions</p>
			<p><b>* All Board members attend the 3 General Meetings and all Monthly Board Meetings.</b></p>
			<ul>
				<li>
				<b className="subTitle">President</b><br />

				The President shall call and preside over all Emergency, General and Board meetings.  They must provide active and dynamic leadership, initiate policy, and keep him/her self fully informed of the operations of the LCDS Assists the Executive Director and Business Manager, staff members, other Board Members and Committee members as needed. Is a Signing officer.
				</li>
				<li>
				<b className="subTitle">Vice-President</b> <br />
				Assists the Executive Director with the registration of children in the LCDS program. Advertises for open house/registration events and answers all queries about registration from mid June until mid August. Assists the President, Staff members, other Board members and Committee members as needed.  Is a Signing officer.
				</li>
				<li>
				<b className="subTitle">Treasurer</b> <br />
				Assists the Business Manager when needed for filing financial and educational documents.  Assists Fundraising Chair with deposits when needed from events such as the Silent Auction, Garage Sale and Walk-a-thon. Assists other Board members, Staff members and other committee members as needed. Is a signing officer.
				</li>
				<li>
					<b className="subTitle">Secretary</b> <br />
				Records minutes of all meetings, distributes minutes to all board members, members and staff members. Completes any general correspondence with membership and other organizations when needed, maintains attendance record for General Meetings.  Assists the Executive Director, other Board members, staff members and other Committee members as needed.
				</li>
				<li><b className="subTitle">Fundraising Director</b> <br />
				Initiates and organizes all funding activities and coordinates with the silent auction committee members.  Organizes volunteers when needed for fundraising events.  Provides tax receipts when needed for donations to the society. Prepares deposits from fundraising events.  Assists other Board members, Staff members and other committee members when needed.

				</li>
				<li><b className="subTitle">Liaison</b> <br />
				Coordinates the Board Newsletter Report each month. Books venues for special events.  Assists the Executive Director and Business Manager, other Board members, Staff members and other Committee members as needed Prepares special event and program feedback surveys for the membership.
				</li>
			</ul>
			<img src={SammyBoardRoom} alt="" />
			</div>
    )
  }
}
