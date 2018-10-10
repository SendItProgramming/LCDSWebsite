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
				<Image src="http://placekitten.com/200/200" alt="Home Page" thumbnail />
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
                <NavItem href={this.props.site_urls["Home"]}>Home</NavItem>
                <HoverToggleNavDropdown href={this.props.site_urls[""]} title="About Us" id="nav-dropdown">
                    <MenuItem href={this.props.site_urls[""]}>Our Staff</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Our Board</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Sammy Squirrel</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Testimonials</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Our History</MenuItem>
                </HoverToggleNavDropdown>
                <HoverToggleNavDropdown href="Programs" title="Programs" id="nav-dropdown">
                    <MenuItem href={this.props.site_urls[""]}>Kindergarten</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Junior Kindergarten (4-5)</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Pre-school (3-4)</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Learning Support</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Field Trips</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Daily Snacks</MenuItem>
                </HoverToggleNavDropdown>
                <HoverToggleNavDropdown title="Registration" id="nav-dropdown">
                    <MenuItem href={this.props.site_urls[""]}>Program Fees</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Parent Involvement</MenuItem>
                </HoverToggleNavDropdown>
                <NavItem href={this.props.site_urls[""]}>Resources</NavItem>
                <HoverToggleNavDropdown title="Events" id="nav-dropdown">
                    <MenuItem href={this.props.site_urls[""]}>Job Opportunities</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Fundraising</MenuItem>
                    <MenuItem href={this.props.site_urls[""]}>Calendar</MenuItem>
                </HoverToggleNavDropdown>
                <NavItem href={this.props.site_urls[""]}>News</NavItem>
                <NavItem href={this.props.site_urls[""]}>Contact</NavItem>
            </Nav>
        )
    }

    SocialButtons() {
        return (
			<div>
				<Image src="http://placekitten.com/50/50" alt="Home Page" rounded />
				&nbsp;
				<Image src="http://placekitten.com/50/50" alt="Home Page" rounded />
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
				id={this.props.id}>
				{this.props.children}
			</NavDropdown>
		)
	}
}