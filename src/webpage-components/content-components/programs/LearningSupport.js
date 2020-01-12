import React, { Component } from "react";
import SammyReading from "./../../../images/Sammy_Reading_Image.jpg"


export default class LearningSupport extends Component {
  render() {

    return(
      <div className="info">
				<p className="fun">Registration Requirements For Learning Support</p>
				<p><b>New registrations should inquire whether there will be openings for the upcoming school year before submitting their application for registration.</b>
					You will need to fill out <u><b>all</b></u> of the information on the registration form and submit any assessments or documents which will support the application to Alberta Education for funding support.</p>

				<p><b>All applications will be reviewed by the LCDS Board and Learning Team, in order to determine whether or not the LCDS program will have sufficient resources available to support the needs of the prospective student.
				LCDS policy will apply in the decision making process.</b>
				An LCDS representative will notify all applicants as to the status of their application.</p>


				<p><b><i>*Please note - sufficient resources may include but are not limited to available funding, qualified and available staffing, facility requirements, program limitations, student numbers, student body make-up,etc.  All areas are considered in regards to the needs of each prospective student.</i></b></p>
				<ul>
					<li>Due to the high number of inquiries for Learning Support, <b>all reviewed applications will be subject to random draw; there are no guarantees for placement.</b></li>
					<li>Choice of attendance days may be limited to the availability at the time of registration and the availability of support staff and specialists on certain days.</li>
				</ul>

				<p><b>If you have any further questions about Learning Support at LCDS, please email  <a href = "lcds@telus.net">lcds@telus.net</a> or contact us during office hours.</b></p>
				<img src= {SammyReading} alt="" />
			</div>
    )
  }
}