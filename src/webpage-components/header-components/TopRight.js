import React, { Component } from "react"
import {Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"

export default class TopRight extends Component {	
    render() {
        return (
            <div name="topRight">
				<NavBar />
            </div>
        )
    }
}

class NavBar extends Component {
	render() {
		return (
		<Nav bsStyle="pills" onSelect={this.handleSelect}>
					<NavItem eventKey="Home">Home</NavItem>
					<NavDropdown eventKey="About Us" title="About Us" id="nav-dropdown">
						<MenuItem eventKey="Our Staff">Our Staff</MenuItem>
						<MenuItem eventKey="Our Board">Our Board</MenuItem>
						<MenuItem eventKey="Sammy Squirrel">Sammy Squirrel</MenuItem>
						<MenuItem eventKey="Testimonials">Testimonials</MenuItem>
						<MenuItem eventKey="Our History">Our History</MenuItem>
					</NavDropdown>
					<NavDropdown eventKey="Programs" title="Programs" id="nav-dropdown">
						<MenuItem eventKey="Kindergarten">Kindergarten</MenuItem>
						<MenuItem eventKey="Junior Kindergarten (4-5)">Junior Kindergarten (4-5)</MenuItem>
						<MenuItem eventKey="Pre-school (3-4)">Pre-school (3-4)</MenuItem>
						<MenuItem eventKey="Learning Support">Learning Support</MenuItem>
						<MenuItem eventKey="Field Trips">Field Trips</MenuItem>
						<MenuItem eventKey="Daily Snacks">Daily Snacks</MenuItem>
					</NavDropdown>
					<NavDropdown eventKey="Registration" title="Registration" id="nav-dropdown">
						<MenuItem eventKey="Program Fees">Program Fees</MenuItem>
						<MenuItem eventKey="Parent Involvement">Parent Involvement</MenuItem>
					</NavDropdown>
					<NavItem eventKey="Resources">Resources</NavItem>
					<NavDropdown eventKey="Events" title="Events" id="nav-dropdown">
						<MenuItem eventKey="Job Opportunities">Job Opportunities</MenuItem>
						<MenuItem eventKey="Fundraising">Fundraising</MenuItem>
					</NavDropdown>
					<NavItem eventKey="News">News</NavItem>
					<NavItem eventKey="Contact">Contact</NavItem>
				</Nav>
	
		)
	}
	
	handleSelect(selectedKey) {
		console.log(`selected ${selectedKey}`);
	}
	
}