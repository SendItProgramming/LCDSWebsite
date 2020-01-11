import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom";
import SideBar from "./content-components/SideBar";
import MainContent from "./content-components/MainContent";
import ReactTable from "react-table";
import TextEditor from "./HTMLEditor.js";
import { Helmet } from "react-helmet";

import {
	QuotePanel,
	LoginPanel,
	KidsCornerPanel,
	SquirrelPanel,
	AboutUsPanel,
	Registration,
	Programs,
	PictureFrame,
	UpcomingEvents,
	CoSponsors,
	ButtonsPanel,
} from "./SharedComponents";
import {
	Image,
	Carousel
}from "react-bootstrap"
import "./../index-src/css/Content.css"

import WebFont from 'webfontloader';

import Sammy from "./../images/SammyPage.jpg"
import SammySchool from "./../images/Sammy_School_Image.jpg"
import SammyReading from "./../images/Sammy_Reading_Image.jpg"
import Muttart from "./../images/Muttart_Conservatory_Image.jpg"
import SammyEating from "./../images/Sammy_Daily_Snack_Image.jpg"
import SammyRegistration from "./../images/Sammy_Registration_Fees.jpg"
import SammyParentInvolvement from "./../images/Sammy-ParentInvolvement.jpg"
import SammyBoardRoom from "./../images/Sammy_Our_Board_Image.jpg"
import SammyOurProgram from "./../images/Sammy_Our_Program_Image.jpg"
import SammyMiscImages from "./../images/Sammy_Misc_Positions_Image.jpg"
import SammyHistory from "./../images/Sammy_Our_History_Image.jpg"
import SammyBoard from "./../images/Sammy_Our_Board.jpg"
import SammyJune from "./../images/Sammy_June_Henry.jpg"
import LCDSMap from "./../images/LCDSmapSQ.jpg"
import SammyTestimonials from "./../images/Sammy_Testimonials_Image.jpg"
import Slide1 from "./../images/Slide/slide1.png"
import Slide2 from "./../images/Slide/slide2.png"
import Slide3 from "./../images/Slide/slide3.png"
import Slide4 from "./../images/Slide/slide4.png"
import Slide5 from "./../images/Slide/slide5.png"
import Slide6 from "./../images/Slide/slide6.png"
import Slide7 from "./../images/Slide/slide7.png"
import Slide8 from "./../images/Slide/slide8.png"
import Slide9 from "./../images/Slide/slide9.png"
import MichellFung from "./../images/Staff/Michell_Fung.jpg"
import CarmenBriggs from "./../images/Staff/Carmen_Briggs.jpg"
import CorinaMichetti from "./../images/Staff/Corina_Michetti.jpg"
import SarahQuinton from "./../images/Staff/Sarah_Quinton.jpg"
import ShannonMusic from "./../images/Staff/Shannon_Music.jpg"
import { FaFax } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import ProgramFees from "./content-components/ProgramFees.js"

export default class Content extends Component {

	constructor(props){
		super(props)
		this.state = {
			quote:{
			Author: "Loading...",
			Text: "Loading..."
			},
			news:[],
			board:[],
			yr: ""

		}
		//this.GetQuote = this.GetQuote.bind(this)
		this.news = this.GetNews.bind(this)
		WebFont.load({
			google: {
				families: ['Londrina Sketch']
			}
		});
	}

	componentDidMount(){
		this.GetQuote()
		this.GetNews()
		this.Getboard()
		this.state.yr = this.GetYr()

		function myFunction() {
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
		//document.getElementById("loginButton").addEventListener("click", myFunction);
	}

    render() {
			return (
				<div className="body">
					{this.SideBar()}
					<div className="mainBody">
						<Switch>
							<Route path={this.props.site_urls["Home"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Home"]}</title>
									</Helmet>
									{this.Home()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Resources"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Resources"]}</title>
									</Helmet>
									{this.Resources()}
								</div>
							</Route>
							<Route path={this.props.site_urls["AboutUs"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["AboutUs"]}</title>
									</Helmet>
									{this.About()}
								</div>
							</Route>
							<Route path={this.props.site_urls["OurStaff"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["OurStaff"]}</title>
									</Helmet>
									{this.OurStaff()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Squirrel"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Squirrel"]}</title>
									</Helmet>
									{this.Sammy()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Programs"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Programs"]}</title>
									</Helmet>
									{this.Programs()}
								</div>
							</Route>
							<Route path={this.props.site_urls["News"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["News"]}</title>
									</Helmet>
									{this.News()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Facebook"]} exact>
								{this.Facebook()}
							</Route>
							<Route path={this.props.site_urls["Registration"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Registration"]}</title>
									</Helmet>
									{this.Reg()}
								</div>
							</Route>
							<Route path={this.props.site_urls["OpenHouse"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["OpenHouse"]}</title>
									</Helmet>
									{this.OpenHouseInfo()}
								</div>
							</Route>
							<Route path={this.props.site_urls["TrialClasses"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["TrialClasses"]}</title>
									</Helmet>
									{this.TrialClasses()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Kindergarden"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Kindergarden"]}</title>
									</Helmet>
									{this.Kindergarden()}
								</div>
							</Route>
							<Route path={this.props.site_urls["JrKindergarden"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JrKindergarden"]}</title>
									</Helmet>
									{this.JrKindergarden()}
								</div>
							</Route>
							<Route path={this.props.site_urls["PreSchool"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PreSchool"]}</title>
									</Helmet>
									{this.PreSchool()}
								</div>
							</Route>
							<Route path={this.props.site_urls["LearningSupport"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["LearningSupport"]}</title>
									</Helmet>
									{this.LearningSupport()}
								</div>
							</Route>
							<Route path={this.props.site_urls["FieldTrips"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["FieldTrips"]}</title>
									</Helmet>
									{this.FieldTrips()}
								</div>
							</Route>
							<Route path={this.props.site_urls["DailySnacks"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["DailySnacks"]}</title>
									</Helmet>
									{this.DailySnacks()}
								</div>
							</Route>
							<Route path={this.props.site_urls["JobOpportunities"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JobOpportunities"]}</title>
									</Helmet>
									{this.SubtituteTeachers()}
								</div>
							</Route>
							<Route path={this.props.site_urls["PreschoolDevSkills"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PreschoolDevSkills"]}</title>
									</Helmet>
									{this.PreschoolDevSkills()}
								</div>
							</Route>
							<Route path={this.props.site_urls["IsMyChildReady"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["IsMyChildReady"]}</title>
									</Helmet>
									{this.IsMyChildReady()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Requirements"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Requirements"]}</title>
									</Helmet>
									{this.RequirementsForLearningSupport()}
								</div>
							</Route>
							<Route path={this.props.site_urls["FoodRestrictions"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["FoodRestrictions"]}</title>
									</Helmet>
									{this.FoodRestrictions()}
								</div>
							</Route>
							<Route path={this.props.site_urls["ProgramFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["ProgramFees"]}</title>
									</Helmet>
									<ProgramFees state={this.props} />
								</div>
							</Route>
							<Route path={this.props.site_urls["ParentInvolvement"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["ParentInvolvement"]}</title>
									</Helmet>
									{this.ParentInvolvement()}
								</div>
							</Route>
							<Route path={this.props.site_urls["BoardDirectors"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["BoardDirectors"]}</title>
									</Helmet>
									{this.BoardDirectors()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Committee"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Commitee"]}</title>
									</Helmet>
									{this.Committee()}
								</div>
							</Route>
							<Route path={this.props.site_urls["MiscPositions"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["MiscPositions"]}</title>
									</Helmet>
									{this.MiscPositions()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Contact"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Contact"]}</title>
									</Helmet>
									{this.Contact()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Events"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Events"]}</title>
									</Helmet>
									{this.Events()}
								</div>
							</Route>
							<Route path={this.props.site_urls["History"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["History"]}</title>
									</Helmet>
									{this.OurHistory()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Founder"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Founder"]}</title>
									</Helmet>
									{this.OurFounder()}
								</div>
							</Route>
							<Route path={this.props.site_urls["OurBoard"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["OurBoard"]}</title>
									</Helmet>
									{this.OurBoard()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Testimonials"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Testimonials"]}</title>
									</Helmet>
									{this.Testimonials()}
								</div>
							</Route>
							<Route path={this.props.site_urls["JuneHenry"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JuneHenry"]}</title>
									</Helmet>
									{this.JuneHenry()}
								</div>
							</Route>
							<Route path={this.props.site_urls["Fundraising"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Fundraising"]}</title>
									</Helmet>
									{this.Fundraising()}
								</div>
							</Route>
							<Route path={this.props.site_urls["RegCommit"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["RegCommit"]}</title>
									</Helmet>
									{this.RegistrationCommitments()}
								</div>
							</Route>
							<Route path={this.props.site_urls["PreschoolFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PreschoolFees"]}</title>
									</Helmet>
									{this.PreSchoolFees()}
								</div>
							</Route>
							<Route path={this.props.site_urls["JrKindergardenFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JrKindergardenFees"]}</title>
									</Helmet>
									{this.JuniorKindergardenFees()}
								</div>
							</Route>
							<Route path={this.props.site_urls["KindergardenFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["KindergardenFees"]}</title>
									</Helmet>
									{this.KindergardenFees()}
								</div>
							</Route>
							<Route path={this.props.site_urls["PaymentOptions"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PaymentOptions"]}</title>
									</Helmet>
									{this.PaymentOptions()}
								</div>
							</Route>
							<Route path={this.props.site_urls["GenGuide"]} exact>
								{this.GenGuidelines()}
							</Route>
							<Route path={this.props.site_urls["Admin"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Admin"]}</title>
									</Helmet>
									<TextEditor path={this.props.site_urls} titles={this.props.titles}/>
								</div>
							</Route>
							<Redirect to={this.props.site_urls["NotFound"]} />
						</Switch>
					</div>
				</div>
			)
		}

		Reg(){
			return(
				<div className ="info">
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

					<a href={this.props.site_urls["LearningSupport"]} className="green" >Registration Requirements For Learning Support</a>
					<br/>
					<a href={this.props.site_urls["RegCommit"]}  className="green">Registration Commitments</a>
					<br/>
					<a href={this.props.site_urls["ParentInvolvement"]}className="green">Parent Involvement</a>
				</div>
		);
	}


	SideBar() {
		return(

			<div className="sidebar">
					<SideBar site_urls={this.props.site_urls}
						quote={<QuotePanel quote={this.state.quote}/>}
						custom_buttons={<ButtonsPanel/>}
						member_login={<LoginPanel/>}
						kids_corner={<KidsCornerPanel/>}
						squirrel={<SquirrelPanel/>}
						about_us={<AboutUsPanel/>}
						registration={<Registration/>}
						programs={<Programs/>}
						pic={<PictureFrame/>}
						upcoming_events={<UpcomingEvents/>}
						co_sponsors={<CoSponsors/>}
					/>
				</div>
		);
	}

	Error(){
		return(
			<div>
				<p className="fun">WHOOPS YOU'VE MADE A MISTAKE</p>
				<p className="subTitle">If you're here, you made a mistake, go back</p>
			</div>
		);
	}

	About(){
		return (
			<div className="info">
			{this.AboutInfo()}
			<br />
			<br />
			<p className="fun">Our Beliefs</p>
			<p>Today, LCDS Preschool and Kindergarten still operates with the same values and beliefs established by the founding members of the Society.  Parents have the unique opportunity to be actively involved in their children's education through daily classroom activities, operational committees and management of the school in coordination with the program's teaching staff, Executive Director and Business Manager.</p>

			<p>LCDS Preschool and Kindergarten distinguishes itself from other Edmonton preschools in that the program offers a Kindergarten program and the program is led by a Teacher with a Bachelor Degree in Elementary Education and Psychology along with qualified Educational Assistants.</p>

			<p>LCDS is a distinctive early learning program in that we offer both preschool and kindergarten in a combined classroom setting.  We follow a 'Learning through play" philosophy, in a language rich and fun environment.  Under the guidance of our teachers, children aged 3, 4 and 5 attend together in the same classroom where they are introduced to a daily structured routine, balanced with learning and play.  The program focuses on age appropriate development of the child's language, vocabulary, social, emotional, physical and intellectual growth and development.  The teacher introduces the children to daily kindergarten curriculum concepts and focuses on Kindergarten readiness for all children.  Children develop a strong foundation for future educational success.</p>

			<p>A love of learning is encouraged in every child through structured activities, free play, daily projects, monthly themes and circle time. Special events such as seasonal parties, family events, field trips and in-class presentations are also included to enhance the learning process. Parent involvement plays a key role in the success of the program.</p>
			</div>
		);
	}

	News(){
		const items = this.state.news

		return(
			<div className = "content">
			<table className = "Table">
					<tbody>
						<tr>
							<th></th>
						</tr>
						{items.map(item => (
							<tr>
								<td >
								<p className = "left-fun">
								{item.Title}
								</p>
								<p className="left">{item.Text}</p>
								</td>
							</tr>
						))}
					</tbody>
					</table>
			</div>
		);

	}

	Resources(){
		return(
		<div className ="info">
			<p className ="fun">Resources</p>
			<p className="subTitle">The following are helpful websites for parents</p>
			<table className = "Table">
				<tbody>
					<tr>
						<td>
							<p><a className ="greenLink" href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">
							Kindergarden Curriculum</a></p>
							<p>Alberta Education - Kindergarden Curriculum Guide for Parents</p>
						</td>
					</tr>
					<tr>
						<td>
							<p><a className ="greenLink" href="https://www.alberta.ca/ministry-education.aspx">
							Alberta Education</a></p>
							<p>Alberta Education Website</p>
						</td>
					</tr>
					<tr>
						<td>
							<p><a className ="greenLink" href="http://www.humanservices.alberta.ca/financial-support/15104.html">
							Alberta Government Childcare Subsidy</a></p>
							<p>Information about AB Government Childcare Subsidy</p>
						</td>
					</tr>
					<tr>
						<td>
							<p><a className ="greenLink" href="https://myhealth.alberta.ca/Pages/default.aspx">
							My Health Alberta</a></p>
							<p>Health Information for Parents.  check to make sure your child's immunizations are up to date.</p>
						</td>
					</tr>
					<tr>
						<td>
							<p><a className ="greenLink" href="http://www.napta.ca/">
							Northern Alberta Preschool Teacher's Association</a></p>
							<p>Find a Preschool in your area.</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href = "http://www.humanservices.alberta.ca/services-near-you/edmonton-and-area-child-and-family-services.html">
						Edmonton Region Child & Family Services</a></p>
						<p>Edmonton Region Child & Family Services - Programs and Services</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href="https://www.abcheadstart.org/">
							ABC Headstart</a></p>
							<p>ABC Headstart Program - Preschool Programs and Learning Support for low income families and low income families having children with special learning needs.</p>
						</td>
					</tr>

					<tr>
						<td>
							<p><a className ="greenLink" href="">Eye See...Eye Learn Program</a></p>
							<p>Eye See...Eye Learn Program - The Alberta Association of Optometrists
							Free Eye Examination and Free Glasses for Kindergarden Students in Alberta</p>
						</td>
					</tr>

					<tr>
						<td>
							<p><a className ="greenLink" href="https://www.triplep-parenting.ca/alb-en/triple-p/">Triple P - Positive Parenting</a></p>
							<p>Triple P - Positive Parenting Website</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href="http://www.earlychildhoodedm.ca/northcentral/">North Central Early Years Coalition</a></p>
						<p>North Central Early Years Coalition Website. Parenting information and events.</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href="https://www.edmonton.ca/attractions-events.aspx">City of Edmonton - Attractions and Events</a></p>
						<p>Check out what's happening in the City of Edmonton.</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href="https://www.drugwatch.com/health/children/"> Drugwatch</a></p>
						<p>Children's Health Guide: Newborn to Preteen</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href= "https://www.caringforkids.cps.ca/">
						Canadian Pediatric Society</a></p>
						<p>Information for parents from the Canadian Pediatric Society</p>
						</td>
					</tr>

					<tr>
						<td>
						<p><a className ="greenLink" href="https://edmonton.cmha.ca/">Edmonton Canadian Mental Health Association</a></p>
						<p>Call 211. Great resources for parenting help, newcomers to Edmonton, mental health support, where to go for help with basic needs, etc.</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		);
	}

	AboutInfo(){

		return(
			<div className="info">
				<p className="fun"><a className="funLink" href={ this.props.site_urls["AboutUs"] }>About us</a></p>
				<p><b>LCDS Preschool & Kindergarden (formerly Londonderry Child Development Society)</b> was established in North Edmonton in 1972 by a group of parents who wanted an early learning program in their community for their young children.  They wanted to be actively involved in their children's education and they believed that learning should be fun.</p>

				<p>LCDS is a <a href={ this.props.site_urls["ParentInvolvement"] }>Parent Cooperative</a>, program and is a registered not-for-profit organization established under the Societies Act of Alberta.  We are licensed and registered with Alberta Child and Family Services, Alberta Education and the City of Edmonton.  We are proud to be members of the Association of Independent Schools & Colleges in Alberta and the Northern Alberta Preschool Teachers Association.</p>
				<p>Check out all of the fun things we do at school by visiting our Facebook page.  Like and follow us on Facebook!</p>
			</div>
			)

	}

	SubtituteTeachers(){
		return(
			<div className="info">
				<p className="fun"><a className="funLink" href={this.props.site_urls["JobOpportunities"]}> Substitute teachers and Subtitute Educational Assistants</a></p>
				<p><b>We have need for Substitute Teachers, and Substitute Educational Assistants throughout the school year</b>. If you are interested in having your name added to our Substitute Lists, please email your resume to our school office and we will contact you for an Interview.</p>
				<p>Substitute Teachers should have a valid Teaching Certificate, permanent or temporary.</p>

				<p>Substitute Teachers and Substitute Educational Assistants should have a Child Care Worker certificate from Edmonton & Region Child & Family Services (can be applied for if you do not have), a current criminal records check with vulnerable sector search and first aid.</p>
			</div>

		);
	}

	OpenHouseInfo(){
		return(
		<div className="info">

		<p className="fun"><a className="funLink" href={this.props.site_urls["OpenHouse"]}>Open House & Registration for {this.state.yr}/{this.state.yr +1}</a></p>
		<p className="green">Is Your Child 3, 4 or 5 Years Old? Are They Ready to Start School?</p>
		<p>Register Your Child Today!</p>
		<p><b>LCDS Preschool & Kindergarden has an awesome program for your child.
					We offer Kindergarden, Jr. Kindergarden and Preschool for children 3 to 5 years old.
					We are now accepting new Registrations for Kindergarden, Jr. Kindergarden and Preschool for September {this.state.yr}.  The AM Class is tentatively full at this time but you are welcome to put your name on our wait list; we still have lots of room in the PM Class.</b></p>
		<p><b>Registration Forms are available from our school office.</b></p>

		<p>To be eligible for Kindergarden for the {this.state.yr} - {this.state.yr +1} school year, your child must be 5 years old before March 1st {this.state.yr +1}.</p>

		<p>**The entry age for Kindergarden will be changing for the {this.state.yr +1}-{this.state.yr +2} school year.
			To be eligible for Kindergarden for September {this.state.yr +1}, your child must turn 5 before December 31st, {this.state.yr +1}.</p>
		<p>Please speak with our office if you have any questions.</p>
		</div>
		)
	}

	TrialClasses(){
		return(
			<div className="info">
				<p className="fun"><a className="funLink" href={this.props.site_urls["TrialClasses"]}>Free Trial Classes</a></p>
				<p className="green">Not Sure If Your Child Is Ready For School Or If They Will Like It?</p>
				<p><b>LCDS Preschool & Kindergarden offers free Trial classes for you and your child to experience preschool.</b></p>
				<p><b>Trial Classes are by appointment, they may be arranged for a class any day of the week (subject to availability)</b>; only two spots are available per class each day. Bring your child to class for 9:15 am or 1:05 pm and participate in the classroom experience until 10:30 am or 2:35 pm.</p>
				<p><b>Children must be at least 3 years old and fully toilet trained.</b></p>
				<p><b>Come play with us and enjoy the fun of learning!</b></p>
			</div>
		);
	}

	Facebook() {

		return(
		<div className="info">
			<p className="fun"><a className="funLink" href={ this.props.site_urls["Facebook"] }>LCDS on Facebook</a></p>
			<p><a className="green" href="https://www.facebook.com/lcdskids">LCDS Preschool & Kindergarden.</a></p>
			<p>See all of the fun activities, events and crafts the children have done this year!</p>
		</div>
		);
	}

	GetQuote() {
		fetch("http://localhost:8888/quotes/")
		.then(res => res.json())
		.then(
		  (result) => {
			this.setState({
				quote: result
			})
		  },

		  (error) => {
		  	console.log(error)
			console.log("ERROR!")
            this.setState({
				isLoaded: true,
				error
			});
		  }
		)
		//this.RenderQuote()
	}

	GetNews() {
		fetch("http://localhost:8888/news/")
		.then(res => res.json())
		.then(
		  (result) => {
				console.log("info grabbed")
			this.setState({
				news: result
			})
		  },

		  (error) => {
		  	console.log("Err: " + error)
            this.setState({
				isLoaded: true,
				error
			});
		  }
		)
	}

	RenderQuote() {
		const {error, isLoaded, quote }  = this.state;
		if (error) {
			console.log("ERROR loading backup")
			return (

				<QuotePanel
					quote  = "Life is a garden, dig it"
					author = "Joe Dirt"
				/>
			);
		}
		else if (!isLoaded){
			console.log("Not Loaded... Waiting...")
		}
		else {
		return(

			<QuotePanel
				quote  = {quote.Text}
				author = {quote.Author}
			/>

		);
		}
	}

	OurStaff(){
		return(
			<div>
			<p className="fun">Staff</p>
			<table className = "Table">
			<tbody>
			<tr>
				<th></th>
				<th></th>
			</tr>
			<tr>
				<td><img className="table-image" src={MichellFung} alt="" /></td>
				<td className="left">
				<p className="subTitle">Our Teacher</p>
				<p className="nameTitle">Michell Fung</p>
				<p>I was born and raised here in Edmonton.
				I grew up in the north side of Edmonton and now currently live on the south side with my husband Neil and my cat and dog. I have two degrees.
				My first degree is in Psychology with a minor in Sociology. My second degree is in Elementary Education.
				I have worked with children in a various number of places such as the women’s shelter, YMCA day cares and have taught in a couple of Head Start programs.
				One of my hobbies is singing. I have sung in a mixed community choir for 6 years. 
				Your children will learn many new songs and dances.
				I really love working with children and families.
				I love seeing the growth and development of all children.</p>
				</td>
			</tr>
			<tr>
				<td></td>
				<td className="left">
				<p className="subTitle">Our Educational Assistants:</p>

				</td>
			</tr>
			<tr>
				<td><img className="table-image" src={CorinaMichetti} alt="" /></td>
				<td className="left">
					<p className="nameTitle">Corina Michetti</p>

					<p>Ms. Corina is a former parent of LCDS.
						Her children have graduated from LCDS and are working their way through Elementary School.
						Ms. Corina works with children in the classroom who receive educational support services.
						Ms. Corina enjoys spending time with her husband and two children.
					</p>
				</td>
			</tr>
			<tr>
				<td><img className="table-image" src={SarahQuinton} alt="" /></td>
				<td className="left">
					<p className="nameTitle">Sarah Quinton</p>

					<p>
						Ms. Sarah joined LCDS in the fall of 2017.
						She has been a wonderful addition to our classroom.
						Ms. Sarah helps to create all of the wonderful projects and activities for our preschoolers in the classroom.
						In her spare time she participates in dance classes and fitness programs and enjoys travelling.
					</p>
				</td>
			</tr>
			<tr>
				<td><img className="table-image" src={ShannonMusic} alt="" /></td>
				<td className="left">
					<p className="subTitle">Our Executive Director</p>
					<p className="nameTitle">Shannon Music</p>
					<p>
						Miss Shannon is the LCDS Executive Director.
						Shannon is also a former LCDS parent and former Board Member.
						Miss Shannon has 3 children who graduated from LCDS and are now graduating from Post Secondary school and are starting their own lives.
						She enjoys spending time with her husband, and family and with her little West Highland Terrier named Ben.
					</p>
				</td>
			</tr>
			<tr>
				<td><img className="table-image" src={CarmenBriggs} alt="" /></td>
				<td className="left">
					<p className="subTitle">Our Business Manager</p>
					<p className="nameTitle">Carmen Briggs</p>
					<p>
						Miss Carmen is our Business Manager.
						Carmen is also a former LCDS parent and former Board member.
						Carmen enjoys spending time with her husband, two children and her little Yorkshire Terrier Mazey.
						Carmen's two boys also graduated from LCDS and are now graduating from High School and attending Post Secondary School.
					</p>
				</td>
			</tr>
			</tbody>
			</table>
			</div>
		);
	}

	Sammy(){
		return(
			<div className="info">
				<p className="fun">
					Sammy Squirrel
				</p>
				<p>Sammy is a very mischievous squirrel who lives in the classroom at LCDS.  Sammy loves to interact with the children every day when he isn't foraging for food or off on an exciting adventure. 
				Sometimes things go missing in the classroom, or a mess is left behind and Sammy is usually to blame. 
				He is a very busy little squirrel.
				We enjoy Sammy and all of his crazy adventures.
				The children love to hear about what he has been up to and what he has to say.</p>
				<p id="image"><Image src={Sammy} alt="" /></p>
			</div>
		);
	}

	Home(){
		return(
			<div>
				<div className="Carousel" ></div>
				<Carousel interval={5000}>
					<Carousel.Item>
						<img src={Slide1}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide2}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide3}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide4}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide5}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide6}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
					<img src={Slide7}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide8}  alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={Slide9}  alt="" />
					</Carousel.Item>
				</Carousel>

				{this.AboutInfo()}
				{this.Facebook()}
				{this.OpenHouseInfo()}
				{this.TrialClasses()}
				{this.SubtituteTeachers()}
		</div>
		);
	}

	Kindergarden(){
		return(
			<div className="info">
				<p className= "fun">Kindergarden</p>
				<p><b>LCDS Preschool & Kindergarden</b> offers a small class setting for Kindergarden children with a maximum 1:7 teacher to child ratio.</p>
				<p>A <b>maximum</b> of <b>7 Kindergarden students</b> are enrolled in each daily class; combined with the preschool students to a <b>maximum of 17 students/day/class</b>.</p>

				<p><b>Kindergarden curriculum is provided and funded by Alberta Education.</b>
				The Kindergarden curriculum overlaps the goals and guidelines laid out for the Preschool students; the expectation is the Kindergarden students have already had exposure to these goals or will have by the end of the school year.
				Our goal for all children in our program is to be Kindergarden ready.</p>

				<p><b>Please see <a className= "green" href={this.props.site_urls["Facebook"]}> Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

				<p><b>Children who turn 5 before March 1st in the upcoming school year (September - May)</b> are eligible to <b>attend Kindergarden in Alberta</b>.
				Students who qualify for Kindergarden attend 5 half days /week, unless an alternate path has been approved by the teacher and parents.</p>

				<p><b>Please note:</b></p>
				<p><b><i>Alberta Education will be changing the date for Kindergarden eligibility for the {this.state.yr +1} - {this.state.yr +2} school year.</i></b>
				<b><i>Children will need to turn 5 before December 31st of {this.state.yr +1} in order to be eligible for Kindergarden.</i></b></p>

				<p><b>If your child is eligible for enrolment in Kindergarden</b>, and you feel he/she is <b>not ready</b> to attend, please <b>contact the office</b> with your concerns; learning alternatives may be available.</p>
				<p><b>Kindergarden</b> students <b>begin class 20 minutes earlier</b> than the preschool students to work on specific Kindergarden curriculum goals; more class time is provided for Kindergarden work throughout the half day schedule.</p>
				<p><b>The daily classroom routine is designed to follow the Kindergarden Curriculum Guidelines.</b></p>

				<p className="green"><b>More information on curriculum and education guidelines can be found on the Alberta Education Website, <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">Kindergarden Curriculum Guidelines</a></b></p>

				<img src={SammySchool} alt="" />

			</div>
		);
	}

	JrKindergarden(){
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

			<p><b>Please see <a className= "green" href={this.props.site_urls["PreschoolDevSkills"]}>Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

			<p><b>Please note:
			<i>Alberta Education will be changing the date for Kindergarden eligibility for the {this.state.yr +1} - {this.state.yr +2} school year.
				Children will need to turn 5 before December 31st of {this.state.yr +1} in order to be eligible for Kindergarden.</i></b></p>

			<p className= "green"><b>More information on curriculum and education guidelines can be found on the Alberta Education Website, <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">Kindergarden Curriculum</a></b></p>

			<img src={SammySchool} alt="" />
			</div>
		);
	}
	PreSchool(){
		return(
			<div className="info">
			<p className="fun">Preschool 3 & 4 Year Olds</p>
			<p><b>LCDS offers a small class setting for Preschool aged children.</b></p>
			<p>Preschool and Kindergarten students are combined in the classroom up to a <b>maximum of 17 students/day/class.</b></p>

			<p><b>The LCDS Preschool program is a structured, fun, play oriented program with a focus on family and community, language enrichment, social & personal development skills and development of fine & large motor skills.</b></p>

			<p><b>Preschool students benefit</b> from the inclusion of the Kindergarten students in the classroom by receiving <b>early exposure to Kindergarten curriculum concepts and classroom expectations.</b></p>

			<p>LCDS offers <b>one morning class (9:15 - 11:45 a.m.)</b> and <b>one afternoon class (1:05 - 3:35 p.m.) five days/week. </b></p>
			<p>*Parents may choose the class and days their child attends (subject to availability at registration).</p>
			<ul>
				<li>For 3 year old students, 2 days per week are recommended.</li>
				<li>For 4 year old students, 2-3 days per week are recommended.</li>
			</ul>

			<p>*Parents who would like their child to attend extra days may submit their request with their child's registration; extra days are subject to availability, teacher and board approval.</p>


			<a className="green" href={this.props.site_urls["IsMyChildReady"]}> Is My Child Ready to Begin Preschool or Kindergarten?</a>

			<a className="green" href={this.props.site_urls["PreschoolDevSkills"]}> Preschool Development Skills</a>

			<img src={SammySchool} alt="" />
			</div>
		);
	}
	LearningSupport(){
		return(
			<div className="info">
				<p className="fun">Learning Support</p>
				<p><b>Learning support</b> such as <b>Mild/Moderate Speech & Language Support for children age 3 1/2 on.</b></p>
				<p><b>Sept 1 or PUF funding for children 3 and older (Which includes access to specialists in Speech Language Pathology, Occupational Therapy, Physical Therapy and other services as needed)</b> may be available to registered LCDS students who qualify for funding through Alberta Education.</p>

				<p><b>The LCDS program is not a designated Special Education ECS Program</b> and is only able to offer learning support where the LCDS program has sufficient resources available to support the needs of the prospective student.</p>

				<p><b>LCDS is <u>limited</u> in the number of registration spots available to receive Learning Support.
					2 PUF spots are reserved </b>each year for children <b>who require assistance with Speech and Language Development.
					One spot</b> is held in the <b>AM class</b> and <b>one spot</b> is held in the <b>PM class</b>.</p>

				<a href={this.props.site_urls["Requirements"]} className= "green">Registration Requirements For Learning Support</a>

				<p><b>If your child is not enrolled at LCDS, and you have concerns with your child’s speech</b>, you may contact the <b>Alberta Health Services Preschool Speech and Language Intake</b> line at 780-408-8793.
					Those children attending <b>Kindergarten</b> who are not enrolled at LCDS may contact their child’s school Speech-Language Pathologist or Principal to arrange an assessment.</p>

				<p><b>Try the websites below for additional general information on communication development in children.</b></p>

				<ul>
					<li><a href="http://www.albertahealthservices.ca/">www.albertahealthservices.ca</a></li>
					<li><a href="http://www.parentlinkalberta.ca/">www.parentlinkalberta.ca</a></li>
					<li><a href="http://www.acslpa.ca/">www.acslpa.ca</a></li>
					<li><a href="http://www.caslpa.ca/">www.caslpa.ca</a></li>
					<li><a href="http://www.hanen.org/">www.hanen.org</a></li>
				</ul>
				<img src={SammyReading} alt="" />
			</div>
		);
	}

	FieldTrips(){
		return(
			<div className="info">
				<p className="fun">Field Trips</p>
				<p><b>Field trips are scheduled regularly to enhance the curriculum being taught in the classroom.</b></p>

				<p><u><b>All registered students</b></u> are welcome to attend a scheduled field trip, <b>even if it is scheduled on a day they do not attend class.</b>
				<b><u>Parent volunteers</u></b> are needed and are welcome to attend the scheduled field trips.</p>

				<p>**Due to insurance and licensing purposes LCDS can only take registered LCDS students on the field trips.  We ask that parents find alternate child care for siblings if they are planning to volunteer for a field trip with their registered child. </p>

				<p><b>Field trip costs are <u>included</u> in the monthly material fees.</b></p>



				<p className="subTitle">Examples of previous year’s field trips:</p>
				<p>Prairie Gardens, John Janzen Nature Center, The Royal Alberta Museum, Muttart Conservatory, Kiwanis Safety City, Telus World of Science, The Clay Guys, Puppet Tree House, Bus Safety, Rutherford House and WEM Undersea Caverns (Subject to change from year to year).</p>
				<img src={Muttart} alt="" />
			</div>
		);
	}

	DailySnacks(){
		return(
			<div className="info">
			<p className="fun">Daily Snack</p>
			<p><b>As part of the Child Care Licencing Act, a Daily Snack is to be provided to the students every day. The scheduled Parent Helper is responsible for providing the scheduled Healthy Snack and Beverage (ie. Fruit & Crackers, Veggies & Crackers, Sandwiches, Cheese & Crackers and Parents Choice Day) for 17 children. </b></p>

			<p>LCDS chooses to serve the daily snack in a group setting.</p>

			<p className="subTitle">Serving snack in a group setting:</p>
			<ul>
				<li><b>Ensures all</b> of the children have the <b>same choice of snack</b> on a daily basis.</li>
				<li><b>Allows</b> the children to <b>experience new foods</b> they may not try at home and parents or staff members are able to monitor children’s allergies or food reactions on any given day.</li>
				<li>Eliminates students arriving at school with too much food, food which does not adhere to the allergy restrictions, comparison and competition among peers and between parents to have “The Best Snack”.</li>
			</ul>
			<p className="subTitle">Snack shall have one serving each from 2 or more basic food groups consistent with Canada’s Food Guide.</p>
			<ul>
				<li>For Example – Monday may be Fruit and Cracker day, the parent might bring fruit such as strawberries and oranges with cinnamon pita chips, the beverage might be white or chocolate milk. Tuesday may be cheese and cracker day, the parent might bring cheddar or marble cheese and Ritz crackers, the beverage might be apple juice.  "Healthy Water" is always offered as an alternate choice to whatever the beverage might be.</li>
			</ul>

			<p><b>Each month the snack schedule will rotate to the next day of the week</b> to ensure each family gets a chance to bring something different for snack; for example, Mondays in February might be Cheese & Crackers, the next month Cheese & Crackers will be rotated to Tuesdays.</p>

			<a className="green" href={this.props.site_urls["FoodRestrictions"]}>Allergies, Personal and Religious Food Restrictions</a>

			<img src = {SammyEating} alt="" />

			</div>

		);
	}

	PreschoolDevSkills(){
		return(
			<div className="info">
				<p className="fun">Preschool Development Skills</p>
				<p><b>The LCDS Preschool is a structured play oriented program which focuses on developing the child’s social, motor and personal development skills.</b></p>

				<p className="subTitle">Social Skills are developed by:</p>
				<ul>
					<li>Learning responsibility for personal belongings.</li>
					<li>Cooperating and sharing with others.</li>
					<li>Learning to take turns.</li>
					<li>Learning how to listen when a friend is speaking.</li>
					<li>Practicing to be friendly and helpful.</li>
					<li>Sitting and listening quietly.</li>
					<li>Speaking in a clear, confident, quiet voice, using words to express their feelings.</li>
				</ul>
				<p className="subTitle">Motor Skills are developed by:</p>
				<ul>
					<li>Large muscle control is developed by engaging in activities which include body movement.</li>
					<li>Small muscle control is developed by engaging in activities such as cutting with scissors, gluing & pasting, painting, coloring, etc.</li>
					<li>Learning healthy habits such as hand washing, learning to cover your sneeze or cough, learning to use a tissue and dispose of it appropriately, etc.</li>
				</ul>
				<p className="subTitle">Personal Skills are developed by:</p>
				<ul>
					<li>Learning to adjust and be happy in a group setting when away from home.</li>
					<li>Learning to make new friends and not be shy.</li>
					<li>Learning to control their emotions (tempers, tears, anger, jealousy, frustration, etc.)</li>
					<li>Learning to be proud of their accomplishments.</li>
					<li>Developing language and listening skills.</li>
					<li>Awareness of the world and people around them.</li>
					<li>Being able to think for themselves and share ideas in a group.</li>
					<li>Developing curiosity, creativity and imagination.</li>
					<li>Understanding and enjoying holidays and seasons.</li>
					<li>Learning to use different mediums to create projects (paper, glue, fabric, crayons, paint, play dough or clay, etc.)</li>
					<li>Learn to follow steps to re create an example for a craft or project.</li>
				</ul>
				<p className="subTitle">Language Skills are developed by:</p>
				<ul>
					<li>Observing appropriate vocabulary and language use modeled by staff members.</li>
					<li>Interaction with staff members through out class time.</li>
					<li>Introducing Songs and Rhymes.</li>
					<li>Repetition of sounds and words during class activities.</li>
					<li>Introduction to Letters & Numbers (Letters of the week, calendar, etc.)</li>
					<li>Staff members use fun strategies (games, songs, stories, group conversation) to assist in developing language and vocabulary use.</li>
				</ul>



				<p className= "subTitle">The above goals are achieved through the following classroom activities:</p>
				<ul>
					<li>Free play time for the students to interact and practice appropriate social skills.  </li>
					<li>Staff model appropriate behavior which is acceptable in the classroom for the children to follow.</li>
					<li>Staff model appropriate dialog for the children to use and are encouraged to use their words to express themselves.</li>
					<li>A variety of materials and activities are available to the children to play with.  </li>
					<li>Activities and materials are changed regularly to provide enhancement to the topics of study introduced to the students.</li>
					<li>Daily songs and group conversations.</li>
					<li>Daily movement games and actions to music or songs.</li>
					<li>Story and Library time.</li>
					<li>Daily projects which may include painting, coloring, writing, gluing and cutting.</li>
					<li>Sharing Days.</li>
					<li>Regular opportunities to speak and share in front of the class.</li>
					<li>Class parties for celebration of holidays.</li>
					<li>Helping Hand days.</li>
					<li>Regularly planned field trips in and out of the classroom.</li>
					<li>Cooking days.</li>
					<li>Daily class routine.</li>
					<li>Daily snack time.</li>
				</ul>
			</div>
		);
	}

	IsMyChildReady(){
		return(
			<div className="info">
				<p className="fun">Is My Child Ready To Begin Preschool Or Kindergarden?</p>
				<p className="subTitle">How do I know if my child is ready for school?</p>

				<p>Entering Preschool or Kindergarten is an exciting time for you and your child; it’s an important first step in their educational journey and for many the first time they are on their own.</p>
				<p>We would like the transition to preschool or kindergarten to be as smooth as possible for you and your child.  The following are some suggestions to consider before registering your child for preschool. </p>

				<p className="subTitle">All of the following questions should be considered before registering your child for preschool:</p>
				<ul>
					<li>Is your child able to use the washroom and do simple tasks for themselves? (Such as, putting their clothes and shoes on.)</li>
					<li>Is your child able to be away from you for short periods of time?</li>
					<li>Have you enrolled your child in any play groups or left them to play at a friend or families house for a short period of time?</li>
					<li>Is your child able to sit for meals and feed themselves?</li>
					<li>Is your child able to follow simple directions?</li>
					<li>Is your child curious and willing to learn?</li>
					<li>Does your child like to play with other children?</li>
					<li>Does your child play cooperatively with other children?</li>
					<li>Is your child able to stay focused on an activity or story for at least 5-10 minutes?</li>
					<li>How well does your child get along with other adults and how well do they listen to them?</li>
					<li>How do they react when behavior is corrected?</li>
				</ul>
				<p>If you are still not sure about your child attending preschool, make some time to visit the school with your child and speak with the Teacher or the Director to discuss your concerns.</p>
			</div>

		);
	}

	RequirementsForLearningSupport(){
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
		);
	}

	FoodRestrictions(){
		return(
			<div className= "info">
			<p className="fun">Allergies, Personal, & Religious Food Restrictions</p>
			<ul>
				<li><b>LCDS is required by Alberta Government licensing to ensure all children with food allergies, which can place them at serious health risk, are kept safe to the best of our abilities, while attending our program.</b></li>
				<li><b>LCDS strives to be a NUT-FREE classroom</b>, this <b>includes products</b> which are labelled with the phrase <b>“may contain nuts”</b>.  A list of approved snacks, brands and nut free bakeries are listed in the LCDS Parent Handbook.</li>
				<li><b>LCDS and the Board of Executives, respect the personal choices, ethnic and religious backgrounds of its members.  As a result, food preparation procedures may include steps to prevent cross contamination of snacks which contain specific ingredients.  This may change from year to year depending on student needs.</b></li>
				<li>Examples of specific ingredients which may require additional food preparation steps may include eggs, dairy products, pork or beef.  If you have a question about the requirements for the preparation of food while on parent helper duty, please ask the staff before purchasing, bringing and preparing the snack.</li>
			</ul>
			<img src={SammyEating} alt="" />
			</div>
		);
	}

	ParentInvolvement(){

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
				<p>Click Here for <a href={this.props.site_urls["RegCommit"]} className="greenLink">Registration Commitments</a></p>

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

				<p><a href={this.props.site_urls["BoardDirectors"]} className="green">Board of Directors Positions</a></p>
				<p><a href={this.props.site_urls["Committee"]} className="green">Committee Positions</a></p>
				<p><a href={this.props.site_urls["MiscPositions"]} className="green">Miscellaneous Positions</a></p>

				<img src={SammyParentInvolvement} alt="" />
			</div>

		);
	}

	BoardDirectors(){
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
		);
	}

	Committee(){
		return(
			<div className="info">
				<p className="fun"> Committe Member Positions</p>
				<b>**Committees are not required to attend monthly Board Meetings</b>
				<ul>
					<li>
					<p><b className="subTitle">Bingo Coordinator</b><br />

					Communicates with the Executive Director to ensure each Bingo date has the adequate number of volunteers scheduled and submits a list of workers for the current newsletter each month.  Communicates with the scheduled bingo workers 1 week prior to the scheduled bingo date to remind them of their commitment.  Attends the first part of each Bingo, takes attendance, assigns positions and ensures everyone knows what they are doing.</p>
					</li>
					<li>
					<p><b className="subTitle">Casino Coordinator</b> <br />

					Coordinates the casino volunteers for volunteer shifts. Consults with the Executive Director, Business Manager and the President throughout the assignment process. Ensures all positions are filled and all volunteer background check forms are submitted. Casinos are held every 2 years.</p>
					</li>
					<li>
					<p><b className="subTitle">Silent Auction Committee</b> <br />

					Coordinators are needed for various activities, such as Donation Receiver, Door Ticket sales and tracking, and assistance with other items related to the silent auction to be determined by the Fundraising Director.</p>
					</li>
					<li>
					<p><b className="subTitle">Newsletter Coordinator</b><br />

					Responsible for collecting reports from Board and Committee Members. Compiles the monthly newsletter. Coordinates production of the monthly newsletter with the assistance of the Executive Director.</p>
					</li>
					<li>
					<p><b className="subTitle">Cleaning Coordinator </b>

					Organizes and coordinates the monthly cleanings with the assistance of the Executive Director. Responsible for reminding members of their cleaning commitment.  Arranges to attend the first part of the cleaning to take attendance, and inform the members of the jobs which are required to be completed from the cleaning binder.  You may then leave and return to lockup after everyone is finished.</p>

					</li>
					<li>
					<p><b className="subTitle">Social Committee</b> <br />

					Plans the seasonal classroom and membership parties in collaboration with the teacher or members of the Board. Coordinates with the Social Committee members and delegates responsibilities needed to prepare for the parties. Members from the AM and PM classes are needed to assist in preparations for the class parties and membership parties.</p>
					</li>
				</ul>
				<img src={SammyOurProgram}  alt="" />
			</div>
		);
	}
	MiscPositions(){
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
		);
	}

	Events() {
		return(
			<div className="info">
				<p className="fun">Open House & Register for {this.state.yr}/{this.state.yr +1}</p>
				<p className="green">Is Your Child 3, 4 or 5 Years Old? Are They Ready to Start School?
					Register Your Child Today!</p>
					<p><b>LCDS Preschool & Kindergarten has an awesome program for your child.
					We offer Kindergarten, Jr. Kindergarten and Preschool for children 3 to 5 years old.</b></p>

					<p><b>We are now accepting new Registrations for Kindergarten, Jr. Kindergarten and Preschool for September {this.state.yr}.  The AM Class is tentatively full at this time but you are welcome to put your name on our wait list; we still have lots of room in the PM Class.</b></p>

					<p><b>Registration Forms are available from our school office.</b></p>

					<p><b>To be eligible for Kindergarten for the {this.state.yr} - {this.state.yr +1} school year, your child must be 5 years old before March 1st {this.state.yr +1}.</b></p>


					<p>**The entry age for Kindergarten will be changing for the {this.state.yr +1}-{this.state.yr +2} school year.
					To be eligible for Kindergarten for September {this.state.yr +1}, your child must turn 5 before December 31st, {this.state.yr +1}.</p>

					<p><b>Trial Classes are also available call the office to book an appointment.</b></p>

					<p>Please speak with our office if you have any questions.</p>
					{this.TrialClasses()}
			</div>
		);
	}

	Contact(){
		return(
			<div className="info">
				<p className="fun">LCDS Preschool and Kindergarden Contact Information</p>
				<table className= "Table">
				<tbody>
					<tr>
						<th></th>
						<th className="right"></th>
					</tr>
					<tr>
						<td>
							<p className="left-fun">General Office:</p>
							13931-140 Street<br />
							Edmonton, Ab<br />
							T6V 1J7<br />
							<br />
							<FaPhone /> (780) 473-7216<br />
							<FaFax /> (780) 473-7021
						</td>
						<td className="right"><img src={LCDSMap} alt="" /></td>
					</tr>
				</tbody>
				</table>
			</div>
		);
	}

	OurHistory(){
		return(
			<div className="info">
				<p className="fun">Our History</p>
				<p>LCDS Preschool and Kindergarten is a licensed, independent, non-profit, cooperative Preschool and Kindergarten program.

					The Londonderry Child Development Society was established in 1972, by a group of parents looking for educational alternatives for their preschool aged children in the Londonderry Community. 

					The program began as a small class operating out of ME Lazerte Composite High School.  With the growth of the High School and the Society, relocation was inevitable. In 2004, the Society moved to the Greisbach area, which was also developing and soon had to relocate once more.

					The Society is now sharing space with Gateway Alliance Church, and is pleased to be able to offer the surrounding community a well-defined, quality, early childhood education program; with an interactive, dynamic and fun learning environment involving family and community.</p>

				<a href={this.props.site_urls["Founder"]} className="green">Our Founder</a>
				<br />
				<br />
				<img src={SammyHistory} alt="" />

			</div>
		);
	}


	Getboard(){
		fetch("http://localhost:8888/board/")
		.then(res => res.json())
		.then(
		  (result) => {
				console.log("info grabbed")
			this.setState({
				board: result
			})
		  },

		  (error) => {
		  	console.log("Err: " + error)
            this.setState({
				isLoaded: true,
				error
			});
		  }
		)

	}


	OurBoard() {

		const items = this.state.board

		return(
			<div className="info">
				<p className="fun">Our Board Members</p>
					<img src={SammyBoard}  alt="" />
					<br/>
				<table className= "Table">
				<tbody>
					<tr>
						<th>PosiBoution</th>
						<th className="right">Member</th>
					</tr>
					{items.map(item => (
						<tr>
							<td><b>{item.MemberPosition}</b></td>
							<td className="right">{item.MemberFirstName} {item.MemberLastInitial}</td>
						</tr>
					))}
				</tbody>
				</table>
			</div>
		);

	}

	OurFounder(){
		return(
			<div className="info">
				<p className="fun">Our Founder</p>
				<p>It was with sorrow and regret that LCDS members heard of the passing of its founder, June Henry, in late January 1978.  This wonderfully courageous person had fought a long and brave battle against cancer.</p>

				<p>Any attempt to record the achievements of June Henry in her short lifetime is a difficult task.  Difficult in that she accomplished so much more than most of us can hope to ever achieve or aspire towards.  She was a remarkable person in so many ways.</p>

				<p>More than anything else, I have wanted to capture the true spirit and energy and drive that was June’s being.  I really believe that this can only be done by recording her own written autobiography prepared for the Edmonton Public School Board in 1973, which her husband, Mike, has so very kindly loaned to me.</p>

				<p>When reading her life’s resume it is necessary to keep in mind that June was basically a very shy person who quietly agonized over public speaking yet who never shirked the leadership role which she so ably filled all her life.  Those of us who were privileged to know her and to work with her are left with a sense of loss, for she gave us direction, she provided us with good common sense and she inspired us to strive for better things in education for our children. </p>

				<p>To the very end of her life she cared greatly about the success and future of the Londonderry Child Development Society.</p>

				<p>Read her resume and capture the essence of her spirit.  I’m sure its reading makes us all a little humbler.</p>

				<a className="green" href={this.props.site_urls["JuneHenry"]}>June Henry</a>
				<img src={SammyJune} alt="" />
			</div>
		);
	}

	JuneHenry(){
		return(
			<div className= "info">
				<p className="fun">June Henry</p>
				<p className="subTitle">Born July 7th, 1942  (Deceased January 1978, age 36)</p>
				<p>From the age of eleven I attended Cleethorpes Grammar School for girls, where, at sixteen I obtained my General Certificate of Education, (ordinary level) in English Language, English Literature, Mathematics, German, French, History, Geography, Art and Latin. </p>

				<p>I specialized for two years in English Literature, German and French and obtained my G.C.E. (advanced level) in French and German.  I also obtained a distinction in Scholarship German, and on the basis of these results was awarded a State Scholarship to University.  I remained in school in order to take the entrance examinations for Oxford, and was granted a place there for 1961.</p>

				<p>I left school in December 1960 and taught for 4 months in my old junior school (7-11 year olds).  I taught children to use the library, taught girls’ games, and acted as a substitute teacher where needed.
				In April 1961, I took up a scholarship awarded by my county to study at Mains University, Germany.  I spent 5 months there, studying, travelling and working.</p>

				<p>In the fall of 1961, I entered Oxford, where I studied German and French for the first two trimesters and took the Preliminary Exams.  After this I spent the following two and one third years of the 1.A. course studying German only and graduated with a second class Honors degree in June 1964.</p>

				<p>I was married in August 1964 and obtained a position as an English teacher at Tynemouth Grammar School.  For the first term, I was substituting for the regular English teacher who was in hospital.  The second term I was taken on as a permanent staff member to teach English and Social Studies (History).  I left at the end of the second term as I was expecting my first child shortly.</p>

				<p>After my child was born, I taught two full days a week, teaching English and Latin in another Grammar School (Whitbey Bay).  In 1966, I spent one term as a remedial reading teacher in an Infants School in Newcastle-upon-Tyne.  During this period I also substituted for teachers who were absent.  I stopped teaching (reluctantly) because of babysitting problems.</p>

				<p>In 1967, my husband and I moved to Saskatchewan, Canada, where he taught in a village and I occasionally substituted.  We moved to Edmonton in 1969.</p>

				<p>In 1970, I became involved in a local community school project in my area, out of which grew a pre-school program within M.E. Lazerte Composite High School, the Londonderry Child Development Centre.  I have been President of the community group which runs this centre, for two years now. </p>

				<p>I wrote a book, “The Sunclimbers”, based on my experiences and the experiences of others who had started similar projects.  This was published this year by the Edmonton Social Planning Council.  I am a member of the Alberta Association for Young Children, and of the Edmonton Social Planning Council. I have completed the courses in Education Psychology, Education Foundation and Education Administration on a part-time basis at the University of Alberta.  I have three children aged 8, 4 ½ and 2 ½ years old.</p>

			</div>
		);
	}
	Testimonials(){

		return(
			<div className="info">
				<p className="fun">Parent Testimonials</p>
					<blockquote>
					"I have had two daughters go through the LCDS Preschool and Kindergarten program and I would not hesitate to recommend this program to any family. The teachers are patient & kind. Those may seem like simple qualities, but to a child they are priceless. The children are encouraged to try new experiences, to be creative & to experiment. Their certificated Teacher Ms. Michell, brings her early education passion and experience to the classroom. The children benefit from her musical talents and her thoughtful program planning and each child gets the attention and support that truly helps them grow. This program is like no other and the experience of being a part of this amazing parent co-operative community is remarkable"
					</blockquote>
					<p className= "left"><b>-Patrizia C. -Edmonton</b></p>

				<blockquote>
				"When we registered our first child with LCDS in 1994, we were impressed by the teacher who was so friendly and in control of the classroom environment.  There were fun activities set out for the children to play with, students were engaged in what they were learning and parents were always welcome to volunteer in the classroom and be a part of the program.  The classroom routine was well structured and allowed my child to feel safe and comfortable while having fun.  We returned with our second child in 1999, the program had a new teacher and we enjoyed the new ideas and style she brought to the program.  Our third child began in 2003 and as we had been with the program for so long, I took an active role on the LCDS Board of Directors.  I continued to volunteer for LCDS long after my children left the preschool and eventually accepted a position with the program.  LCDS continues to provide the same quality program it has since our first child began in 1994 and continues to change and adapt with the needs of it's students and members in order to provide a superior early childhood program." 
				</blockquote>
				<p className= "left"><b>-Shannon M. -Edmonton</b></p>

				<blockquote>
					"We just wanted to say thank you so much for everything this year!! R. has come so far and we are so proud and thankful for all you have done for R. and our family. The things he has learned are incredible but mostly the tools and feedback you have provided to us will go a long way. The attention and care that all of you have shown towards R. throughout this year is amazing and surpassed every expectation we had for R's first school experience. Please pass on our thank you to all of the staff members and have a great summer!!" 
				</blockquote>
				<p className= "left"><b>-Melanie G. -Edmonton</b></p>

				<blockquote>
					"We really want to thank everyone for their role in assisting and supporting K's growth. We know everyone is instrumental to his success, and that it would not be possible without a team. Although we often identify areas for further growth, we also know he would not have been as successful as he has already without each and everyone of you."
				</blockquote>
				<p className= "left"><b>-Andrea O. -Edmonton</b></p>

				<Image src={SammyTestimonials} />
			</div>
		);
	}
	RegistrationCommitments(){
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
				<li><b>Fundraising</b> - LCDS families have chosen to pay a one time family fundraising fee per year instead of running numerous fundraisers each year.  Each family will submit a $300.00 fee at the beginning of September and will receive a tax donation receipt for the amount of $300.00.  There are options to this fee, please see <a href={this.props.site_urls["Fundraising"]}>Fundraising</a> for more information.</li>
				<li><b>Attend Society Meetings</b> - LCDS Preschool & Kindergarten is required by regulation to hold regular meetings to ensure members are informed of the current status of the society. 3 General Meetings are held each year (September, January and May). One member per family is asked to attend each scheduled meeting to stay informed.  This also ensures quorum is met if there is need for a membership vote and ensures society operations are being carried out accordingly.</li>
				</ul>
			</div>
		);
	}
	Fundraising(){
		return(
		<div className="info">
			<p className="fun">Fundraising</p>
			<p><b>LCDS Preschool & Kindergarten members have chosen to pay a one-time family fundraising fee instead of raising funds through numerous fundraising events or campaigns.</b></p>
			<p>The family fundraising fee will be calculated each year by the Board of Directors; depending on enrollment numbers the fee will adjust accordingly.</p>
			<p>The fee for the {this.state.yr}-{this.state.yr + 1} school year will be $300.  Members will receive a Tax Donation receipt for the amount of $300 if full payment is received in September.</p>
			<p className="subTitle">Options for the family fundraising fee:</p>
			<ul>
				<li>Families may pay the fee in a one time payment in September and will receive a tax donation receipt for the total amount in February.</li>
				<li>Families may split the payment into 2 payments of $150 payable on September 1st and February 1st.  2 tax donation receipts will be issued for $150.00 each and will be applicable for the coordinating tax year.</li>
				<li>Families may pay part of the family fundraising fee $150 on September 1st and participate in a few small fundraisers decided on by the Board of Directors each year to raise the other $150 of their fundraising commitment.  Families would receive a tax donation receipt for $150.</li>
				<li>Families may also choose to raise all of their family fundraising fee through fundraising, members must let the Board of Directors know they will be choosing this option.</li>
			</ul>
			<p><i>**Families choosing to do fundraising instead of paying the family fundraising fee will be required to submit a deposit cheque in the amount of $150 or $300 depending on the option chosen.</i></p>

			<p><i>**Fundraising events may include a walk-a-thon, spring flower orders, poinsettia orders, chocolate or specialty food (kolbasa, pizza kits, perogies, etc.) sales.</i></p>
			<p><b>The money raised from the Family Fundraising Fee or fundraising events goes directly back to the classroom for field trips, family social events, class parties, new toys and materials, gym equipment or furnishings.<br/><br/>
			Thank you for donating and for all of your hard work!!</b></p>

		</div>
		);
	}
	PreSchoolFees(){
		return(
		<div className="info">
			<p className="fun">Preschool fees</p>
			{this.AdminFees()}
			<p className="subTitle"> Preschool Fees:</p>

			<p>Monthly fees are $150 for 2 days per week per month and $225 for 3 days per week per month. (Extra Days add $75/month/extra day added.)</p>

			<p><a href={this.props.site_urls["PaymentOptions"]} className= "blueLink">Payment Options</a></p>
			<p><a href={this.props.site_urls["RegCommit"]} className= "greenLink">Registration Commitments</a></p>
			{this.RegistrationCommitmentDepositCheques()}
			<img src={SammyRegistration}  alt="" />
		</div>);
	}
	JuniorKindergardenFees(){
		return(
			<div className="info">
				<p className="fun">Junior Kindergarden Fees</p>
				{this.AdminFees()}

				<p>Monthly fees are $300.00 for 4 days per week per month or $375.00 for 5 days per week per month.</p>

				<p><a href={this.props.site_urls["PaymentOptions"]} className= "blueLink">Payment Options</a></p>
				<p><a href={this.props.site_urls["RegCommit"]} className= "greenLink">Registration Commitments</a></p>
				{this.RegistrationCommitmentDepositCheques()}
				<img src={SammyRegistration}  alt="" />
			</div>
		);
	}
	KindergardenFees(){
		return(<div className="info"><p className="fun">Kindergarden Fees</p>
		{this.AdminFees()}
			<p className="subTitle">Kindergarten Fee:</p>

			<p>Kindergarten is funded by the Alberta Government. LCDS charges a one time, non-refundable materials fee of $300.00, submitted with your child's registration, to cover the cost of consumable materials used throughout the year such as, paper, glue, paint, crayons, markers, Kleenex, soap, photocopying, etc.  </p>
			<p>Your child only needs to bring a pair of indoor shoes and a backpack on their first day of school.</p>
			{this.RegistrationCommitmentDepositCheques()}
			<img src={SammyRegistration}  alt="" />
		</div>);
	}
	PaymentOptions(){
		return(
			<div className= "info">
			<p className="fun">Payment Options</p>
			<p className="subTitle">You can pay your fees in the following formats:</p>
			<ul>
				<li>One cheque which covers the entire nine-month period dated September 1</li>
				<li>Two post-dated cheques dated September 1 (covers - September, October, November, December and January) and February 1 (covers -  February, March, April, and May).</li>
				<li>Nine post-dated cheques, one for each month, dated the first of each month</li>
				<li>Cash is always accepted.</li>
			</ul>
			</div>
		);
	}
	AdminFees(){
		return(
		<div className="info">
		<p className="subTitle">Society Membership & Admin Fees</p>
		<p>A <b><u>non-refundable</u> $75 Society Membership and Administration fee </b> is charged when you submit your child’s registration (The membership fee is <b>PER FAMILY</b> if you are registering more than one child). This cheque will be dated with the same date as the day your child’s registration is accepted.</p>
		</div>);
	}
	RegistrationCommitmentDepositCheques(){
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
	Programs(){
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
				<a href={this.props.site_urls["GenGuide"]} className="green">Half-Day Program - General Guidelines</a>
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
	GenGuidelines(){
		return(
		<div className="info">
			<p className="fun">
				Half-day Program - General Guidelines
			</p>
			<p className="subTitle">Self Directed Activities</p>
			<ul>
				<li>
					<b>Art Centres</b>: painting, pasting, drawing and paper construction.
				</li>
				<li>
				<b>Listening Centre</b>: activities to increase attention span and an appreciation for music and books.
				</li>
				<li>
				<b>Block Centre</b>: provide opportunities for large and small activities with blocks.
				</li>
				<li>
				<b>Cars & Building Cente</b>: provide opportunities for building social and fine motor skills and imaginative play.
				</li>
				<li>
					<b>Manipulative Centre</b>: activities with puzzles, small blocks and board games, activities to develop classification skills, ordering and observation skills.
				</li>
				<li>
					<b>Doll House/Train Centre</b>: provide opportunities for for building social and fine motor skills and imaginative play.
				</li>
				<li>
					<b>Playhouse</b>: provides opportunities for building social and fine motor skills, imaginative and role play in a small scale house.
					The house may change throughout the year to become a restaurant, grocery store, doctor's office, etc.
				</li>
				<li>
					<b>Sandbox/Water table</b>: the center may be filled with materials such as sand, water, beans, moon sand, sticky foam, etc.  This provides sensory experiences involving measurement and investigation.
				</li>
			</ul>
			<p className="subTitle">Snack/Conversation Time</p>
			<ul>
				<li>
					Children are seated together to stimulate conversation, foster friendship and good manners.
				</li>
				<li>
					Snack Procedure follows the Canada Food Guide and other regulations set forth by government licensing.
				</li>
				<li>
					Snacks may include but are not limited to vegetables, fruits, sandwiches, muffins, cheese and crackers.
				</li>
			</ul>

			<p className="subTitle">Teacher Directed Activities</p>
			<ul>
				<li>
					Visual, auditory and communication skills are developed through small group conversations and activities with the teacher.
				</li>
				<li>
					Project participation encourages the development of visual and auditory communication skills and fine motor skills are developed with the introduction of new materials and creative tools.
				</li>
				<li>
					Through a series of planned activities, the children acquire information about the world around them.
				</li>
				<li>
					Math and science concepts and information about other topics of interest are presented to the children.
				</li>

				<li>
					Cooking days encourage fine motor skills and communication skills.
					Children are introduced to new tastes and smells.
					The children are encouraged to practice healthy food habits and are introduced to simple food handling and hand washing procedures.
				</li>
			</ul>

			<p className="subTitle">Clean Up</p>
			<ul>
				<li>
					Responsibility for putting away toys and equipment will be largely the children's.
				</li>
				<li>
					Develops cooperation and sharing skills.
				</li>
				<li>
					Staff will provide direction and guidance when necessary.
				</li>
			</ul>

			<p className="subTitle">Circle Time</p>
			<ul>
				<li>
					To develop an interest in books and story-telling.
				</li>
				<li>
					To develop listening, memory and communication skills.
				</li>

			</ul>

			<p className="subTitle">Departure</p>
			<ul>
				<li>
					We have a final circle time to review what was presented in class, to hand out projects and other work, and to say "So Long".
				</li>
				<li>
					Students are dismissed directly to their parents or guardians.
				</li>
			</ul>

		</div>
		);
	}
	GetYr(){
		var newDate = new Date()
		return newDate.getFullYear();
	}
}
