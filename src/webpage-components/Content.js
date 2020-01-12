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
	RegistrationPanel,
	ProgramsCard,
	PictureFrame,
	UpcomingEvents,
	CoSponsors,
	ButtonsPanel,
	AboutInfo,
	Facebook,
	OpenHouseInfo,
	TrialClasses,
	SubstituteTeachers,
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
import SammyBoardRoom from "./../images/Sammy_Our_Board_Image.jpg"
import SammyMiscImages from "./../images/Sammy_Misc_Positions_Image.jpg"
import SammyHistory from "./../images/Sammy_Our_History_Image.jpg"
import SammyBoard from "./../images/Sammy_Our_Board.jpg"
import LCDSMap from "./../images/LCDSmapSQ.jpg"
import SammyTestimonials from "./../images/Sammy_Testimonials_Image.jpg"
import { FaFax } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

import Home from "./content-components/home/Home.js"
import ProgramFees from "./content-components/registration/registration/ProgramFees.js"
import Programs from "./content-components/programs/Programs.js"
import PreschoolDevelopmentSkills from "./content-components/programs/PreschoolDevelopmentSkills.js"
import Committee from "./content-components/registration/parent_involvement/Committee.js"
import ParentInvolvement from "./content-components/registration/parent_involvement/ParentInvolvement.js"
import GeneralGuidelines from "./content-components/registration/GeneralGuidelines.js"
import Registration from "./content-components/registration/Registration.js"
import Resources from "./content-components/Resources.js"
import OurStaff from "./content-components/about_us/OurStaff.js"
import OurBoard from "./content-components/about_us/OurBoard.js"
import OurFounder from "./content-components/about_us/OurFounder.js"
import JuneHenry from "./content-components/about_us/JuneHenry.js"
import News from "./content-components/news/News.js"


export default class Content extends Component {

	constructor(props){
		super(props)
		this.state = {
			quote:{
			Author: "Loading...",
			Text: "Loading..."
			},
			news:[],
			board:[]
		}

		WebFont.load({
			google: {
				families: ['Londrina Sketch']
			}
		});
	}

	componentDidMount(){
		this.GetQuote()

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
									<Home state={this.props} />
								</div>
							</Route>
							<Route path={this.props.site_urls["Resources"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Resources"]}</title>
									</Helmet>
									<Resources />
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
									<OurStaff />
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
									<Programs state={this.props} />
								</div>
							</Route>
							<Route path={this.props.site_urls["News"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["News"]}</title>
									</Helmet>
									<News state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["Facebook"]} exact>
							<Facebook site_urls={this.props.urls}/>
							</Route>
							<Route path={this.props.site_urls["Registration"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Registration"]}</title>
									</Helmet>
									<Registration state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["OpenHouse"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["OpenHouse"]}</title>
									</Helmet>
									<OpenHouseInfo site_urls={this.props.urls}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["TrialClasses"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["TrialClasses"]}</title>
									</Helmet>
									<TrialClasses site_urls={this.props.urls}/>
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
									<SubstituteTeachers site_urls={this.props.urls}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["PreschoolDevSkills"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PreschoolDevSkills"]}</title>
									</Helmet>
									<PreschoolDevelopmentSkills />
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
									<ParentInvolvement state={this.props} />
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
									<Committee />
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
									<OurFounder state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["OurBoard"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["OurBoard"]}</title>
									</Helmet>
									<OurBoard />
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
									<JuneHenry />
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
								<GeneralGuidelines />
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
						registration={<RegistrationPanel/>}
						programs_card={<ProgramsCard/>}
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
			<AboutInfo state={this.props}/>
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

	Kindergarden(){
		return(
			<div className="info">
				<p className= "fun">Kindergarden</p>
				<p><b>LCDS Preschool & Kindergarden</b> offers a small class setting for Kindergarden children with a maximum 1:7 teacher to child ratio.</p>
				<p>A <b>maximum</b> of <b>7 Kindergarden students</b> are enrolled in each daily class; combined with the preschool students to a <b>maximum of 17 students/day/class</b>.</p>

				<p><b>Kindergarden curriculum is provided and funded by Alberta Education.</b>
				The Kindergarden curriculum overlaps the goals and guidelines laid out for the Preschool students; the expectation is the Kindergarden students have already had exposure to these goals or will have by the end of the school year.
				Our goal for all children in our program is to be Kindergarden ready.</p>

				<p><b>Please see <a className= "green" href={this.props.site_urls["PreschoolDevSkills"]}> Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

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
					<TrialClasses site_urls={this.props.urls}/>
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
}
