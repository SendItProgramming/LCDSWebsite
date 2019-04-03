import React, { Component } from "react"
import {
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    FormControl,
    FormGroup,
    InputGroup,
    Button,
    Image
} from "react-bootstrap"


import logo from "./../images/header-logo.png"
import fb from "./../images/facebook.png"

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                {this.HeaderLogo()}
                {this.TopRight()}
            </div>
        )
    }

    HeaderLogo() {
        return (
            <div id="logo">
				<Image src={logo} alt="Home Page" thumbnail />
            </div>
        )
    }

    TopRight() {
        return (
            <div name="topRight">
                <SearchBar />
                {this.NavBar()}
                {this.SocialButtons()}
            </div>
        )
    }

    NavBar() {
		return (
            <Nav bsStyle="pills" onSelect={this.handleSelect}>
                <NavItem href={ this.props.site_urls["Home"] }>
                    Home
                </NavItem>

                {this.AboutUs()}

                {this.Programs()}

                {this.Registration()}

                <NavItem href={ this.props.site_urls["Resources"] }>
                    Resources
                </NavItem>

                {this.Events()}

                <NavItem href={ this.props.site_urls["News"] }>
                    News
                </NavItem>

                <NavItem href={ this.props.site_urls["Contact"] }>
                    Contact
                </NavItem>
            </Nav>
        )
    }

    AboutUs() {
        return (
            <HoverToggleNavDropdown
                title="About Us"
                id="nav-dropdown"
                href={this.props.site_urls["AboutUs"]}
            >
                <MenuItem href={this.props.site_urls["OurStaff"]}>
                    Our Staff
                </MenuItem>

                <MenuItem href={this.props.site_urls["OurBoard"]}>
                    Our Board
                </MenuItem>

                <MenuItem href={this.props.site_urls["Squirrel"]}>
                    Sammy Squirrel
                </MenuItem>

                <MenuItem href={this.props.site_urls["Testimonials"]}>
                    Testimonials
                </MenuItem>

                <MenuItem href={this.props.site_urls["History"]}>
                    Our History
                </MenuItem>

                <MenuItem href={this.props.site_urls["Founder"]}>
                    Our Founder
                </MenuItem>
            </HoverToggleNavDropdown>
        )
    }

    Programs() {
        return (
            <HoverToggleNavDropdown
                title="Programs"
                id="nav-dropdown"
                href={this.props.site_urls["Programs"]}
            >
                <MenuItem href={this.props.site_urls["Kindergarden"]}>
                    Kindergarten
                </MenuItem>

                <MenuItem href={this.props.site_urls["JrKindergarden"]}>
                    Junior Kindergarten (4-5)
                </MenuItem>

                <MenuItem href={this.props.site_urls["PreSchool"]}>
                    Pre-school (3-4)
                </MenuItem>

                <MenuItem href={this.props.site_urls["LearningSupport"]}>
                    Learning Support
                </MenuItem>

                <MenuItem href={this.props.site_urls["FieldTrips"]}>
                    Field Trips
                </MenuItem>

                <MenuItem href={this.props.site_urls["DailySnacks"]}>
                    Daily Snacks
                </MenuItem>
            </HoverToggleNavDropdown>
        )
    }

    Registration() {
        return (
            <HoverToggleNavDropdown
                title="Registration"
                id="nav-dropdown"
                href={this.props.site_urls["Registration"]}
            >
                <MenuItem href={this.props.site_urls["ProgramFees"]}>
                    Program Fees
                </MenuItem>

                <MenuItem href={this.props.site_urls["ParentInvolvement"]}>
                    Parent Involvement
                </MenuItem>
            </HoverToggleNavDropdown>
        )
    }

    Events() {
        return(
            <HoverToggleNavDropdown
                title="Events"
                id="nav-dropdown"
                href={this.props.site_urls["Events"]}
            >
                <MenuItem href={this.props.site_urls["JobOpportunities"]}>
                    Job Opportunities
                </MenuItem>

                <MenuItem href={this.props.site_urls["Fundraising"]}>
                    Fundraising
                </MenuItem>

                <MenuItem href={this.props.site_urls["Calendar"]}>
                    Calendar
                </MenuItem>
            </HoverToggleNavDropdown>
        )
    }
    Resources() {
        return (
            <HoverToggleNavDropdown
                title="Resources"
                id="nav-dropdown"
                href={this.props.site_urls["Resources"]}
            >
            </HoverToggleNavDropdown>


        )



    }

    SocialButtons() {
        return (
			<div>
				<a href= "https://www.facebook.com/lcdskids/"> <Image src={fb} alt="Home Page" rounded /></a>
			</div>
        )
    }
}

class SearchBar extends Component {

	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);
		this.state = {value: ''};
    }

	render() {
		return (
			<div>
				<form>
					<FormGroup>
						<InputGroup>
							<FormControl
								type="text"
								value={this.state.value}
								placeholder="Search..."
								onChange={this.handleChange}
							/>
							<FormControl.Feedback />
							<Button onClick={this.handleClick.bind(this)}>9</Button>

						</InputGroup>
					</FormGroup>
				</form>
			</div>
		)
	}

	handleClick() {
		console.log(this.state.value);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}
}

class HoverToggleNavDropdown extends Component {

	constructor(props) {
		super(props)
		this.state = { isOpen: false }
	}

	openDropdown() {
		this.setState({isOpen: true})
	}

	closeDropdown() {
		this.setState({isOpen: false})
	}

	onToggle(){

	}

	render() {
		return (
			<NavDropdown
				onMouseEnter = { this.openDropdown.bind(this) }
				onMouseLeave = { this.closeDropdown.bind(this) }
				onToggle = { this.onToggle.bind(this) }
				open={ this.state.isOpen }
				noCaret
				eventKey={this.props.eventKey}
				title={this.props.title}
				id={this.props.id}
                href={this.props.href}>
				{this.props.children}
			</NavDropdown>
		)
	}
}