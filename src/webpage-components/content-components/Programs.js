import React, { Component } from "react";
import SammyOurProgram from "./../../images/Sammy_Our_Program_Image.jpg"

export default class Programs extends Component {

  render() {
    return(
			<div className="info">
				<p className="fun">
					Programs
				</p>
				<p>
					LCDS Preschool & Kindergarten offers a play based, language rich, structured classroom routine, focusing on Kindergarten readiness five days per week either in the morning or afternoon.
					Preschool children benefit from the early exposure to the Kindergarten curriculum concepts and the classroom setting.
				</p>
				<table className= "Table">
				<tbody>
					<tr>
						<th></th>
						<th className="right"></th>
					</tr>
					<tr>
						<td><b>Morning Class</b></td>
						<td className="right"><b>Times</b></td>
					</tr>
					<tr>
						<td>
							<p>Kindergarden
								<br />
								Preschool
							</p>
						</td>
						<td className="right">
							<p>
								9:00am - 12:00pm
								<br />
								9:15am - 12:00pm
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								<b>Afternoon Class</b>
							</p>
						</td>
						<td className="right">
							<b>Times</b>
						</td>
					</tr>
					<tr>
						<td>
							<p>
								Kindergarden <br />
								Preschool
							</p>
						</td>
						<td className="right">
						<p>
							12:45pm - 3:45pm <br />
							1:00pm - 3:45pm
						</p>
						</td>
					</tr>
				</tbody>
				</table>
				<br />
				<a href={this.props.state.site_urls["GenGuide"]} className="green">Half-Day Program - General Guidelines</a>
				<br />
				<p>
					Our classroom is an integrated classroom where the 3, 4 and 5 year old children attend together in the same classroom.
					Each daily class has a maximum number of 17 students per class per day.
				</p>
				<p>
					Kindergarten and Jr. Kindergarten numbers are limited to 7 students per class (If there is a demand for more Kindergarten or Jr. Kindergarten spots the limit may change without notice); if there are open Kindergarten spots left in September, those spots will be opened for preschool registrations.
				</p>
				<ul>
					<li>
						For 3 year old children, 2 days per week are recommended.
					</li>
					<li>
						For 4 year old children, 2-3 days per week are recommended.
					</li>
					<li>
						Junior Kindergarten children will attend 4 or 5 days per week (See Junior Kindergarten for details).
					</li>
					<li>
						Kindergarten children attend 5 days per week, unless an alternate path has been approved by the teacher and parents.
					</li>
				</ul>

				<p>
					**Parents of preschool children who would like their child to attend extra days may submit their request with their child's registration; extra days are subject to teacher and board approval.
				</p>
				<img src={SammyOurProgram}  alt="" />
			</div>
		);
  }
}
