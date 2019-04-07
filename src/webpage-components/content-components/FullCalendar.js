import React, { Component } from "react";
import { Modal, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import * as FullCalendar from 'fullcalendar';
import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css'

export default class FullCalendarWrapper extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			eventTitle: ""
			};
		this.calendar = new FullCalendar.Calendar();
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.addEvent = this.addEvent.bind(this);
		this.userObj = this.props.user
	}
	
	render() {
			return (
				<div>
					<div id="calendar"></div>
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header>
							<Modal.Title>
								Event Information
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<form>
								<FormGroup controlId='title'>
									<ControlLabel> Title: </ControlLabel>
									<FormControl type='text' />	
								</FormGroup>
								<FormGroup controlId='start'>
									<ControlLabel> Start Date: </ControlLabel>
									<FormControl type='date' />	
								</FormGroup>
								<FormGroup controlId='end'>
									<ControlLabel> End Date: </ControlLabel>
									<FormControl type='date' />	
								</FormGroup>
								<FormGroup controlId='pdf'>
									<ControlLabel> Upload PDF: </ControlLabel>
									<FormControl type='file' />	
								</FormGroup>
								<FormGroup controlId='location'>
									<ControlLabel> Location: </ControlLabel>
									<FormControl type='text' />	
								</FormGroup>
								<FormGroup controlId='description'>
									<ControlLabel> Description: </ControlLabel>
									<textarea class="form-control rounded-0" rows='3' />	
								</FormGroup>
								
								<Button onClick= {() =>
									this.addEvent(
										$('#title').val(),
										$('#start').val(),
										$('#end').val(),
										$('#pdf').val(),
										$('#location').val(),
										$('#description').val(),
									)
								
								}>Submit</Button>
							</form>
							
						</Modal.Body>
					</Modal>
				</div>
			);
	}

	handleOpen() {
		console.log("Opening modal");
		this.setState({
			show: true,
			eventTitle: ""
			});
	}
	
	handleClose() {
		console.log("Closing modal");
		this.setState({show: false});
	}
	
	addEvent(event_title, startDate, endDate, event_url, event_location, event_description) {
		console.log($('#calendar'));
		var calendar_event = {title: event_title, 
			start: startDate, 
			end: endDate, 
			url: event_url, 
			eventLocation: event_location, 
			eventDescription: event_description};
		this.calendar.renderEvent(calendar_event);
	}

	renderAdminCalendar(){
		this.calendar = new FullCalendar.Calendar($('#calendar'),{
			 events: '8888/events',
			 customButtons: {
				addEventButton: {
					text: 'Add Event',
					click: () => {this.handleOpen()}
				}
			 },
			 header: {
				 left: 'prev,next',
				 center: 'title',
				 right: 'addEventButton'
			 }
		});
		
		this.calendar.render();
	}

	renderReadOnlyCalendar(){
		this.calendar = new FullCalendar.Calendar($('#calendar'),{
			 events: '8888/events',
			 header: {
				 left: 'prev,next',
				 center: 'title'
			 }
		});
		
		this.calendar.render();
	}
	checkAndDestroyCalendar(){
		if(this.userObj == null){
			this.calendar.destroy()
		} else if (this.userObj != this.props.user){
			if (this.calendar){
				this.calendar.destroy()
			}
		}
	}
	/*componentDidUpdate(){
		if (this.props.user){
            if(this.props.user.Role == "admin"){
            	this.checkAndDestroyCalendar()
                this.renderAdminCalendar()
            } else {
            	this.checkAndDestroyCalendar()
                this.renderReadOnlyCalendar()
            }
        } else {
        	this.checkAndDestroyCalendar()
            this.renderReadOnlyCalendar()
        }
	}*/
	componentDidMount() {
		if (this.props.user){
            if(this.props.user.Role == "admin"){
                this.renderAdminCalendar()
            } else {
                this.renderReadOnlyCalendar()
            }
        } else {
            this.renderReadOnlyCalendar()
        }
	}
}



