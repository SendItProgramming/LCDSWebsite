import React, { Component } from "react"
import SideBar from "./content-components/SideBar";
import MainRight from "./content-components/MainRight";
import {Panel, ListGroup, ListGroupItem, FormGroup, ControlLabel, FormControl, Checkbox, Button, Image} from "react-bootstrap";


export default class Content extends Component {
    render() {
        return (
            <div>
                <SideBar>
					<QuotePanel quote="Childhood is a Journey, not a Race" author="unknown"/>
					<ButtonsPanel />
					<LoginPanel />
					<KidsCornerPanel />
					<SquirrelPanel />
				</SideBar>
                <MainRight/>
            </div>
        )
    }
}

function ButtonsPanel(props){
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

function QuotePanel(props){
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

function LoginPanel(props){
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

function KidsCornerPanel(props){
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

function SquirrelPanel(props){
	return (
		<SidebarPanel>
			<div id="logo">
				<Image src="http://placekitten.com/217/123" alt="" thumbnail />
            </div>
		</SidebarPanel>
	);
}

/*
function AboutUsPanel(){
	return (
		<TitledSidebarPanel title="About Us">
			<ListGroup>
				<ListGroupItem href="#">Our Staff</ListGroupItem>
				<ListGroupItem href="#">Our Board and Committee Members</ListGroupItem>
				<ListGroupItem href="#">Sammy Squirrel</ListGroupItem>
				<ListGroupItem href="#">Testimonials</ListGroupItem>
				<ListGroupItem href="#">Our History</ListGroupItem>
			</ListGroup>
		</TitledSidebarPanel>	
	);
}
*/

function SidebarPanel(props){
	return (
		<Panel class="sidebar-panel">
			{props.children}
		</Panel>
	);
}

function TitledSidebarPanel(props){
	return (
		<Panel class="sidebar-panel">
			<Panel class="sidebar-panel-title">
				{props.title}
			</Panel>
			{props.children}
		</Panel>
	);
}