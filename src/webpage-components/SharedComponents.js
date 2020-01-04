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

export function LoginPanel(user){

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
		if (user.id == 0) {
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
							<FormControl id="password-form-control" type="password" name="password"/>
						</FormGroup>
						<Checkbox>Remember Me</Checkbox>
						<Button type="button" id="loginButton">Log In</Button><br />
						<a href="#">Forgot your password?</a><br />
						<a href="#">Forgot your username?</a><br />
					</form>
				</TitledSidebarPanel>
			);
		}
		else {
			return(
				<TitledSidebarPanel>
					<p>Welcome, {user.email}</p>
				</TitledSidebarPanel>

			);
		}

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

export function Registration() {
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

export function Programs() {
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