import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom";
import SideBar from "./content-components/SideBar";
import MainContent from "./content-components/MainContent";
import BlogReader from "./BlogReader.js"
import ReactTable from "react-table";
import TextEditor from "./HTMLEditor.js";
import FullCalendarWrapper from "./content-components/FullCalendar.js"
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
	Facebook,
	OpenHouseInfo,
	TrialClasses,
	SubstituteTeachers,
} from "./SharedComponents";
import "./../index-src/css/Content.css"
import FullCalendar from "./content-components/FullCalendar";

import WebFont from 'webfontloader';

import Home from "./content-components/home/Home.js"
import ProgramFees from "./content-components/registration/registration/ProgramFees.js"
import Programs from "./content-components/programs/Programs.js"
import PreschoolDevelopmentSkills from "./content-components/programs/PreschoolDevelopmentSkills.js"
import Kindergarden from "./content-components/programs/Kindergarden.js"
import FieldTrips from "./content-components/programs/FieldTrips.js"
import DailySnacks from "./content-components/programs/DailySnacks.js"
import Requirements from "./content-components/programs/Requirements.js"
import JrKindergarden from "./content-components/programs/JrKindergarden.js"
import LearningSupport from "./content-components/programs/Requirements.js"
import IsMyChildReady from "./content-components/programs/IsMyChildReady.js"
import Preschool from "./content-components/programs/Preschool.js"
import Committee from "./content-components/registration/parent_involvement/Committee.js"
import BoardDirectors from "./content-components/registration/parent_involvement/BoardDirectors.js"
import MiscPositions from "./content-components/registration/parent_involvement/MiscPositions.js"
import ParentInvolvement from "./content-components/registration/parent_involvement/ParentInvolvement.js"
import Resources from "./content-components/Resources.js"
import OurStaff from "./content-components/about_us/OurStaff.js"
import OurBoard from "./content-components/about_us/OurBoard.js"
import AboutUs from "./content-components/about_us/AboutUs.js"
import OurHistory from "./content-components/about_us/OurHistory.js"
import OurFounder from "./content-components/about_us/OurFounder.js"
import Testimonials from "./content-components/about_us/Testimonials.js"
import JuneHenry from "./content-components/about_us/JuneHenry.js"
import Sammy from "./content-components/about_us/Sammy.js"
import News from "./content-components/news/News.js"
import Contact from "./content-components/contact/Contact.js"
import Events from "./content-components/events/Events.js"
import Fundraising from "./content-components/events/Fundraising.js"
import { KindergardenFees, JrKindergardenFees, PreSchoolFees, PaymentOptions } from "./content-components/registration/Fees.js"
import GeneralGuidelines from "./content-components/registration/GeneralGuidelines.js"
import Registration from "./content-components/registration/Registration.js"
import RegistrationCommitments from "./content-components/registration/RegistrationCommitments.js"
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
			}).then(
    			response => response.text() // .json(), etc.
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
									<AboutUs state={this.props}/>
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
									<Sammy />
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
							<Facebook site_urls={this.props.site_urls}/>
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
									<OpenHouseInfo site_urls={this.props.site_urls}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["TrialClasses"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["TrialClasses"]}</title>
									</Helmet>
									<TrialClasses site_urls={this.props.site_urls}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["Kindergarden"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Kindergarden"]}</title>
									</Helmet>
									<Kindergarden state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["JrKindergarden"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JrKindergarden"]}</title>
									</Helmet>
									<JrKindergarden state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["PreSchool"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PreSchool"]}</title>
									</Helmet>
									<Preschool state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["LearningSupport"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["LearningSupport"]}</title>
									</Helmet>
									<LearningSupport state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["FieldTrips"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["FieldTrips"]}</title>
									</Helmet>
									<FieldTrips />
								</div>
							</Route>
							<Route path={this.props.site_urls["DailySnacks"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["DailySnacks"]}</title>
									</Helmet>
									<DailySnacks state={this.props}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["JobOpportunities"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JobOpportunities"]}</title>
									</Helmet>
									<SubstituteTeachers site_urls={this.props.site_urls}/>
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
									<IsMyChildReady />
								</div>
							</Route>
							<Route path={this.props.site_urls["Requirements"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Requirements"]}</title>
									</Helmet>
									<Requirements state={this.props}/>
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
									<BoardDirectors />
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
									<MiscPositions />
								</div>
							</Route>
							<Route path={this.props.site_urls["Contact"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Contact"]}</title>
									</Helmet>
									<Contact />
								</div>
							</Route>
							<Route path={this.props.site_urls["Events"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["Events"]}</title>
									</Helmet>
									<Events state={this.props} />
								</div>
							</Route>
							<Route path={this.props.site_urls["History"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["History"]}</title>
									</Helmet>
									<OurHistory state={this.props}/>
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
									<Testimonials />
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
									<Fundraising />
								</div>
							</Route>
							<Route path={this.props.site_urls["RegCommit"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["RegCommit"]}</title>
									</Helmet>
									<RegistrationCommitments state={this.props} />
								</div>
							</Route>
							<Route path={this.props.site_urls["PreschoolFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PreschoolFees"]}</title>
									</Helmet>
									<PreSchoolFees site_urls={this.props.site_urls}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["JrKindergardenFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["JrKindergardenFees"]}</title>
									</Helmet>
									<JrKindergardenFees site_urls={this.props.site_urls}/>
								</div>
							</Route>
							<Route path={this.props.site_urls["KindergardenFees"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["KindergardenFees"]}</title>
									</Helmet>
									<KindergardenFees site_urls={this.props.site_urls}/>	
								</div>
							</Route>
							<Route path={this.props.site_urls["PaymentOptions"]} exact>
								<div>
									<Helmet>
										<title>{this.props.titles["PaymentOptions"]}</title>
									</Helmet>
									<PaymentOptions />
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
						member_login={<LoginPanel jwt={this.props.user} logout={this.props.Logout} login={this.props.Login}/>}
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

	Calendar(){
		return (
			<FullCalendarWrapper user={this.props.user}/>
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
}
