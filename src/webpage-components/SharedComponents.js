import React from "react"
import {
	Panel,
	ListGroup,
	ListGroupItem,
	FormGroup,
	ControlLabel,
	FormControl,
	Checkbox,
	Button,
	Image,

} from "react-bootstrap";
import "./../index-src/css/SharedComponents.css"
import MainContent from "./content-components/MainContent";

import eventButton from './../images/events.png'
import programsButton from './../images/programs.png'
import registerButton from './../images/register.png'
import resourcesButton from './../images/resources.png'
import sammy1 from './../images/Sammy1.jpg'
import sammy3 from './../images/Sammy-Resources-3.jpg'
import aisca from './../images/aisca_wave_logo.jpg'
import epa from './../images/EPA_Logo.png'

export function ButtonsPanel(props){
	return (
			<ListGroup>
				<ListGroupItem href="#">
					<Image src={eventButton} alt="" rounded />
				</ListGroupItem>
				<ListGroupItem href="#">
					<Image src={programsButton} alt="" rounded />
				</ListGroupItem>
				<ListGroupItem href="#">
					<Image src={registerButton} alt="" rounded />
				</ListGroupItem>
				<ListGroupItem href="#">
					<Image src={resourcesButton} alt="" rounded />
				</ListGroupItem>
			</ListGroup>
	);

}

export function QuotePanel(props){
	return (
		<SidebarPanel>
			<blockquote>
				    "{props.quote.Text}"
				<br />
				    -{props.quote.Author}
                </blockquote>
		</SidebarPanel>
	);
}

export function LoginPanel(props){

	let email = "";
	let password = "";

	function submit(){
		const url = "http://localhost:8888/auth/check";
		fetch(url, {
    	method : "POST",
    	body: new FormData(document.getElementById("inputform")),
    	// -- or --
    	// body : JSON.stringify({
        // user : document.getElementById('user').value,
        // ...
    	// })
		}).then(
    		response => response.text() // .json(), etc.
    		// same as function(response) {return response.text();}
		).then(
   		 html => console.log(html)
		);
	}


	return (
		<TitledSidebarPanel>
			<p className="small-fun">Members Log In</p>
			<p>*Only registered families of LCDS may create an account.</p>
			<form id="inputform">
				<FormGroup>
					<ControlLabel>User Name</ControlLabel>
					<FormControl id="user-form-control" type="text" name="email"/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Password</ControlLabel>
					<FormControl id="password-form-control" type="text" name="password"/>
				</FormGroup>
				<Checkbox>Remember Me</Checkbox>
				<Button type="button" id="loginButton">Log In</Button><br />
				<a href="#">Forgot your password?</a><br />
				<a href="#">Forgot your username?</a><br />
			</form>
		</TitledSidebarPanel>
	);
}

export function KidsCornerPanel(props){
	return (
		<TitledSidebarPanel title="Kids Corner">
			<p>
				Kool-Aid Play Dough<br /><br />

				Ingredients:<br /><br />

				4-5 cups flour<br />
				4 pkgs Kool-Aid (not grape or lemonade)<br />
				1 cup salt<br />
				6 Tbsp. oil<br />
				4 cups boiling water<br /><br />

				Directions:<br /><br />

				Whisk together dry ingredients.<br />
				Add wet ingredients and stir until cool enough to knead.<br />
				Knead completely until cool.<br />
				Store in a sealed container or Ziploc bag in the fridge.<br />
			</p>
		</TitledSidebarPanel>
	);
}

export function SquirrelPanel(props){
	return (
		<SidebarPanel>
			<div id="logo">
				<Image src={sammy1} alt="" thumbnail />
            </div>
		</SidebarPanel>
	);
}

export function AboutUsPanel(){
	return (
		<SidebarPanel>
		<div>
			<p className="small-fun">About Us</p>
			<p><a href="#/about-us/our-staff">Our Staff</a></p>
			<p><a href="#/about-us/our-board">Our Board and Committee Members</a></p>
			<p><a href="#/about-us/Testimonials">Testimonials</a></p>
			<p><a href="#/about-us/History">History</a></p>
		</div>
		</SidebarPanel>
	);
}

export function SidebarPanel(props){
	return (
		<Panel className="sidebar-panel">
			{props.children}
		</Panel>
	);
}

export function TitledSidebarPanel(props){
	return (
		<Panel className="sidebar-panel">
			<Panel className="sidebar-panel-title">
				{props.title}
			</Panel>
				{props.children}
		</Panel>
	);
}

export function RegistrationPanel() {
	return (
		<SidebarPanel>
			<div>
				<p className="small-fun">Registration</p>
				<p><a href="#/register/parent-involvement">Parent Involvement</a></p>
				<p><a href="#/register/registration-requirements">Registration Requirements</a></p>
				<p><a href="#/register/program-fees">Program Fees</a></p>
			</div>
		</SidebarPanel>
	);
}

export function ProgramsCard() {
	return (
		<SidebarPanel>
			<div>
				<p className="small-fun">Programs</p>
				<p><a href= "#/programs"></a></p>
				<p><a href= "#/programs/kindergarten">Kindergarten</a></p>
				<p><a href= "#/programs/junior-kindergarten">Junior Kindergarten</a></p>
				<p><a href= "#/programs/preschool">Preschool</a></p>
				<p><a href= "#/programs/learning-supports">Learning Supports</a></p>
				<p><a href= "#/programs/field-trips">Field Trips</a></p>
				<p><a href= "#/programs/daily-snack">Daily Snack</a></p>
			</div>
		</SidebarPanel>
	);
}

export function PictureFrame() {
	return (
		<SidebarPanel>
			<div>
				<Image src= {sammy3} alt = "" rounded/>
			</div>
		</SidebarPanel>
	);
}

export function UpcomingEvents() {
	return (
		<SidebarPanel>
			<div>
				<p className="small-fun">UpcomingEvents</p>
				<a href="#/events/open-house-registration">Open House and Registration</a>
				<br/>
				<a href="#/events/trial-classes">Free Trial Class</a>
			</div>
		</SidebarPanel>
	);
}

export function CoSponsors() {
	return (
		<SidebarPanel>
			<div>
				<p>Member of:</p>
				<Image src={epa} alt="" rounded width="225" height="110"/>
				<p></p>
				<Image src={aisca} alt="" rounded width="225" height="110"/>
			</div>
		</SidebarPanel>
	);
}

export function AboutInfo(site_urls) {

	return(
		<div className="info">
			<p className="fun"><a className="funLink" href={ site_urls["AboutUs"] }>About us</a></p>
			<p><b>LCDS Preschool & Kindergarden (formerly Londonderry Child Development Society)</b> was established in North Edmonton in 1972 by a group of parents who wanted an early learning program in their community for their young children.  They wanted to be actively involved in their children's education and they believed that learning should be fun.</p>

			<p>LCDS is a <a href={ site_urls["ParentInvolvement"] }>Parent Cooperative</a>, program and is a registered not-for-profit organization established under the Societies Act of Alberta.  We are licensed and registered with Alberta Child and Family Services, Alberta Education and the City of Edmonton.  We are proud to be members of the Association of Independent Schools & Colleges in Alberta and the Northern Alberta Preschool Teachers Association.</p>
			<p>Check out all of the fun things we do at school by visiting our Facebook page.  Like and follow us on Facebook!</p>
		</div>
		)
}

export function Facebook(site_urls) {

	return(
	<div className="info">
		<p className="fun"><a className="funLink" href={ site_urls["Facebook"] }>LCDS on Facebook</a></p>
		<p><a className="green" href="https://www.facebook.com/lcdskids">LCDS Preschool & Kindergarden.</a></p>
		<p>See all of the fun activities, events and crafts the children have done this year!</p>
	</div>
	);
}

export function OpenHouseInfo(site_urls){

	return(
	<div className="info">

	<p className="fun"><a className="funLink" href={site_urls["OpenHouse"]}>Open House & Registration for {getYear()}&#47;{getYear() +1}</a></p>
	<p className="green">Is Your Child 3, 4 or 5 Years Old? Are They Ready to Start School?</p>
	<p>Register Your Child Today!</p>
	<p><b>LCDS Preschool & Kindergarden has an awesome program for your child.
				We offer Kindergarden, Jr. Kindergarden and Preschool for children 3 to 5 years old.
				We are now accepting new Registrations for Kindergarden, Jr. Kindergarden and Preschool for September {getYear()}.  The AM Class is tentatively full at this time but you are welcome to put your name on our wait list; we still have lots of room in the PM Class.</b></p>
	<p><b>Registration Forms are available from our school office.</b></p>

	<p>To be eligible for Kindergarden for the {getYear()} - {getYear() +1} school year, your child must be 5 years old before March 1st {getYear() +1}.</p>

	<p>**The entry age for Kindergarden will be changing for the {getYear() +1}-{getYear() +2} school year.
		To be eligible for Kindergarden for September {getYear() +1}, your child must turn 5 before December 31st, {getYear() +1}.</p>
	<p>Please speak with our office if you have any questions.</p>
	</div>
	)
}

export function TrialClasses(site_urls){
	return(
		<div className="info">
			<p className="fun"><a className="funLink" href={site_urls["TrialClasses"]}>Free Trial Classes</a></p>
			<p className="green">Not Sure If Your Child Is Ready For School Or If They Will Like It?</p>
			<p><b>LCDS Preschool & Kindergarden offers free Trial classes for you and your child to experience preschool.</b></p>
			<p><b>Trial Classes are by appointment, they may be arranged for a class any day of the week (subject to availability)</b>; only two spots are available per class each day. Bring your child to class for 9:15 am or 1:05 pm and participate in the classroom experience until 10:30 am or 2:35 pm.</p>
			<p><b>Children must be at least 3 years old and fully toilet trained.</b></p>
			<p><b>Come play with us and enjoy the fun of learning!</b></p>
		</div>
	);
}

export function SubstituteTeachers(site_urls){
	return(
		<div className="info">
			<p className="fun"><a className="funLink" href={site_urls["JobOpportunities"]}> Substitute teachers and Subtitute Educational Assistants</a></p>
			<p><b>We have need for Substitute Teachers, and Substitute Educational Assistants throughout the school year</b>. If you are interested in having your name added to our Substitute Lists, please email your resume to our school office and we will contact you for an Interview.</p>
			<p>Substitute Teachers should have a valid Teaching Certificate, permanent or temporary.</p>

			<p>Substitute Teachers and Substitute Educational Assistants should have a Child Care Worker certificate from Edmonton & Region Child & Family Services (can be applied for if you do not have), a current criminal records check with vulnerable sector search and first aid.</p>
		</div>

	);
}

export function AdminFees(){
	return(
		<div className="info">
			<p className="subTitle">Society Membership & Admin Fees</p>
			<p>A <b><u>non-refundable</u> $75 Society Membership and Administration fee </b> is charged when you submit your child’s registration (The membership fee is <b>PER FAMILY</b> if you are registering more than one child). This cheque will be dated with the same date as the day your child’s registration is accepted.</p>
		</div>
	);
}

export function RegistrationCommitmentDepositCheques(){
	return(
		<div className="info">
			<p className="subTitle">Registration Commitment Deposit Cheques:</p>

			<p><b>Each family will submit a deposit cheque with their child's registration form to ensure fulfillment of the following registration commitments: </b></p>
			<ul>
				<li>1 Bingo and Classroom Cleaning Deposit Cheque, PER CHILD, $250.00 each (undated) (Each family is required to work 2 Bingo shifts and 1 classroom cleaning night)</li>
				<li>1 Casino Deposit Cheque, PER FAMILY, $200.00 (Only required on a Casino year)(undated)</li>
				<li>LCDS families have chosen to submit a one-time family fundraising fee of $300.00 per school year instead of doing fundraisers.  This payment may be paid in 2 payment, $150.00 in September and $150.00 in January.  A Donation Tax receipt in the amount of $300.00 will be issued for this fee.   Please see Fundraising for more options. </li>
			</ul>
			<p>**Deposit cheques are not cashed unless the member fails to meet their scheduled commitments. </p>

		</div>
	);
}

function getYear(){
	return new Date().getFullYear();
}
