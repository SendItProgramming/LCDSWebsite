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
	Carousel
} from "react-bootstrap";



export function ContentCarousel(props){
	return (
		<Carousel>
			<Carousel.Item>
				<Image alt="Kitten" src="http://placekitten.com/600/286" />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="Bear" src="http://placebear.com/600/286" />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="Bacon" src="http://baconmockup.com/600/286" />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="unsplash" src="http://unsplash.it/600/286" />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="Bill" src="http://fillmurray.com/600/286" />
			</Carousel.Item>
			<Carousel.Item>
				<Image alt="phold" src="http://p-hold.com/600/286" />
			</Carousel.Item>
		</Carousel>
	);
}

export function ButtonsPanel(props){
	return (
		<SidebarPanel>
			<ListGroup>
				<ListGroupItem href="#">
					<Image src="http://placekitten.com/277/100" alt="" rounded />
				</ListGroupItem>
				<ListGroupItem href="#">
					<Image src="http://placekitten.com/277/100" alt="" rounded />
				</ListGroupItem>
				<ListGroupItem href="#">
					<Image src="http://placekitten.com/277/100" alt="" rounded />
				</ListGroupItem>
				<ListGroupItem href="#">
					<Image src="http://placekitten.com/277/100" alt="" rounded />
				</ListGroupItem>
			</ListGroup>
		</SidebarPanel>	
	);
	
	
}

export function QuotePanel(props){
	return (
		<SidebarPanel>
			<blockquote>
				"{props.quote}"
				<br />
				-{props.author}
			</blockquote>
		</SidebarPanel>
	);
}

export function LoginPanel(props){
	return (
		<TitledSidebarPanel title="Members Log In">
			<p>*Only registered families of LCDS may create an account.</p>
			<form>
				<FormGroup>
					<ControlLabel>User Name</ControlLabel>
					<FormControl id="user-form-control" type="text" />
				</FormGroup>
				<FormGroup>
					<ControlLabel>Password</ControlLabel>
					<FormControl id="password-form-control" type="text" />
				</FormGroup>
				<Checkbox>Remember Me</Checkbox>
				<Button type="submit">Log In</Button><br />
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
				<Image src="http://placekitten.com/217/123" alt="" thumbnail />
            </div>
		</SidebarPanel>
	);
}


export function AboutUsPanel(){
	return (
		<div>
			<p>About Us</p>
		</div>
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
		<div>
			<p>Registration</p>
		</div>
	);
}

export function Programs() {
	return (
		<div>
			<p>Programs</p>
		</div>
	);
}

export function PictureFrame() {
	return (
		<div>
			<p>PictureFrame</p>
		</div>
	);
}

export function UpcomingEvents() {
	return (
		<div>
			<p>UpcomingEvents</p>
		</div>
	);
}

export function CoSponsors() {
	return (
		<div>
			<p>CoSponsors</p>
		</div>
	);
}