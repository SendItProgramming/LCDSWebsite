import React, { Component } from "react";
import SammyMiscImages from "./../../../../images/Sammy_Misc_Positions_Image.jpg"

export default class Events extends Component {
  render() {

    return(
      <div className="info">
			<p className="fun"> Miscellanenous Positions</p>
			<ul>
				<li>
					<p> <b className="subTitle">Gym Equipment Transportation Committee</b> <br />
					About 4-5 volunteers are needed from each class to assist in transporting gym equipment to and from the location for Gym Day field trips.  AM will pick up the equipment from the school and take to the Hall.  PM will take the equipment back to the school.  All Gym Committee members will assist with cleaning the equipment before the first scheduled gym day.</p>
				</li>
				<li>
					<p><b className="subTitle">Maintenance Committee</b> <br />
					Volunteer will need to assist with minor repairs and enhancements in the classroom not requiring specialized equipment or training.  May coordinate extra volunteers if needed for a particular job.  Example: Fixing cabinet door handles, minor painting, checks the fluid levels on the dishwasher, maintains locks on the shed, etc.  May also be involved in coordinating activities with contracted trades or professionals. Will look after occasional requests by school staff members to assist with retrieving or putting heavy or large items from/on upper shelving in the storage room or shed.  This position will also retrieve and set up seasonal items for the classroom, such as the Christmas tree or mailbox. May be required to coordinate volunteers to assist with moving furniture for party set ups.</p>
				</li>
				<li>
					<p> <b className="subTitle">AM Scheduling</b> <br/>
					Plans and publishes monthly Parent Helper roster.  Submits a copy to the Executive Director and the newsletter.</p>
				</li>
				<li>
					<p><b className="subTitle">PM Scheduling  </b> <br/>
					Plans and publishes monthly Parent Helper roster. Submits a copy to the Executive Director and the newsletter.</p>
				</li>
				<li>
					<p><b className="subTitle">Librarian </b><br/>
					Circulates information from the Scholastic Book Club, collects and sends in orders and distributes books. Assists with filing books in the school library and cataloging books.</p>
				</li>
				<li>
					<p><b className="subTitle">AM Yearbook Committee</b> <br />
					Coordinates with the Executive Director, compiles, and creates a yearly scrapbook for the AM class. </p>
				</li>
				<li>
					<p><b className="subTitle">PM Yearbook Committee </b> <br />
					Coordinates with the Executive Director, compiles, and creates a yearly scrapbook for the PM class.</p>
				</li>
				<li>
					<p><b className="subTitle">Laundry</b><br />
					Collects the dirty laundry on Friday, washes, dries and folds. Returns the clean folded laundry to the classroom on Monday morning and distributes it to the proper locations. </p>
				</li>
			</ul>
			<img src={SammyMiscImages}  alt="" />
			</div>
    )

  }
}