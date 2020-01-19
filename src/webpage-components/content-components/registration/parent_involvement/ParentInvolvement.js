import React, { Component } from "react";
import SammyParentInvolvement from "./../../../../images/Sammy-ParentInvolvement.jpg"


export default class ParentInvolvmenet extends Component {

  render() {

    return(
			<div className="info">
				<p className="fun">Parent Involvement</p>
				<p className="subTitle">HOW ARE FAMILIES INVOLVED AT LCDS?</p>

				<p>We know community, parents and family play an essential role in childhood development. And we know parents love watching their children learn, grow and have fun- almost as much as kids love showing their parents their new skills.
				As a <b>parent run co-operative</b>, LCDS parents and families are a big part of the kids’ success. Parents and guardians have the opportunity to be hands-on in their little one’s first education experience, supporting their learning, experiencing their excitement on a field trip, and watching them make friends with their peers. 
				We know parent support also helps to show children that the adults in their life are interested in what they are doing and that helping others is important. Plus, we can elevate the quality of education while keeping costs low because of additional help from volunteers. The kids win in a big way, thanks to you! </p>

				<p className="subTitle">WHAT ARE THE ANNUAL REQUIREMENTS?</p>

				<p>We are parents too and we know life can get busy. No problem! LCDS has many ways to help our families, from opting out of fundraising with a cash donation, swapping helper days, or hiring Bingo workers at low cost, we want to help you, so we can all help the kids. </p>

				<p className="subtitle">Here is a snapshot of the annual requirements.</p>


				<ul>
					<li><b>FUNDRAISING –</b><br />
					The LCDS board of Directors understands our members are busy and have replaced mandatory fundraising with a one time Family Fundraising fee per school year as opposed to running numerous fundraising events each year.  The Board of Directors will calculate the yearly fundraising fee each year depending on enrollment.  Members may still choose to fund-raise.
					</li>

					<li>
						<b>PARENT HELPER –</b><br />
						Many parents love this most about their LCDS experience. Each child gets to have their adult come to approximately one class per month to help as needed and bring the snack. Many volunteers are also recruited for each field trip, and our list of helpers tends to fill up fast!
					</li>

					<li>
						<b>CLASSROOM CLEANING –</b><br />
						Volunteering one adult for approximately two hours on a scheduled Monday evening, once through the school year helps us keep the classroom clean and safe for our kids. Recruit any adult in your life willing to roll up their sleeves! Classroom Cleanings are scheduled every second month on the first Monday evening of the month.
					</li>

					<li>
						<b>BINGOS AND CASINOS –</b><br />
						An easy way to raise much needed funds, all we do is provide volunteers. All you do is show up, get training, and have fun. No experience required! Each family needs to complete two bingo shifts and one casino (in a casino year). Bingos are scheduled for Saturday and Sunday afternoons. The number of Bingo events will be determined by the number of families enrolled in the program.
					</li>
				</ul>
				<p>Click Here for <a href={this.props.state.site_urls["RegCommit"]} className="greenLink">Registration Commitments</a></p>

				<p className="fun">WHO RUNS LCDS?</p>
				<p>Who runs LCDS? Well, you do!  Parents are automatically members of the society when you register, and those who volunteer for the Board of Directors or sign-up for a committee position influence the experience for their kids. While we leave the structured education to the experts, volunteers provide important input into school policies, funding, social functions, and more. Please consider getting involved – you and your kids will love it.</p>


				<p className="subTitle">BOARD OF DIRECTORS</p>
				<p>Meeting once per month, the Board is the legal authority for the Society and everything done by LCDS is done in the Board’s name. While considerable authority is appropriately delegated to the Executive Director, Business Manager and Teaching Staff, the source of that authority remains with the Board. This group of parents determines direction for changes in policy, fees, fundraising requirements, and social activities. If you want to make a big impact, consider volunteering for one of the six positions, or feel free to bring your suggestions to any board member or at the board meetings. Great to add to your personal resume.</p>

				<p className= "subTitle">COMMITTEE POSITIONS</p>
				<p>If the board isn’t the right fit, consider volunteering for one or more committee positions. Assisting with everything from classroom parties to yearbooks to laundry and bottle collection, the volunteers on the committees are essential to giving our kids the fantastic experience they are hoping for. Volunteering is easy and many families enjoy the small little extra they get to do for the kids. </p>

				<p className="subTitle">ALL FAMILIES</p>
				<p>Every family that has a child enrolled in LCDS is automatically a member of our exclusive non-profit society. This gives you voting rights for the operation of the program. Families are asked to please send a representative to each of the three required Annual General Meetings which take place in September, January and May. These meetings are your chance to be heard, be informed, and meet fellow parents.</p>

				<p>The following positions are important to the operations of LCDS.  Without volunteers for these positions, LCDS may be forced to offer reduced activities and events for the program.Elections are held at the Annual General Meeting, the Second Tuesday in May.</p>
				<p>Please consider volunteering for any of the positions below.  Please indicate on your registration form the positions you might be interested in assisting with.</p>

				<p><a href={this.props.state.site_urls["BoardDirectors"]} className="green">Board of Directors Positions</a></p>
				<p><a href={this.props.state.site_urls["Committee"]} className="green">Committee Positions</a></p>
				<p><a href={this.props.state.site_urls["MiscPositions"]} className="green">Miscellaneous Positions</a></p>

				<img src={SammyParentInvolvement} alt="" />
			</div>

		);
  }
}