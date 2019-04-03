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
			eventTitle: "",
			calendarEvent: {
				title: "", 
				start: "", 
				end: "", 
				event_url: "", 
				eventLocation: "", 
				eventDescription: ""
			},
			modalMode: 'add'
		};
		
		this.calendar = new FullCalendar.Calendar();
		
		this.handleOpen = this.handleOpen.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleClose = this.handleClose.bind(this);
		
		this.addEvent = this.addEvent.bind(this);
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
									<FormControl 
									type='text'
									defaultValue={this.state.calendarEvent.title}
									/>	
								</FormGroup>
								<FormGroup controlId='start'>
									<ControlLabel> Start Date: </ControlLabel>
									<FormControl 
										type='date'
										defaultValue={(this.state.calendarEvent.start != null)?
										this.state.calendarEvent.start.Date.getDate() : new Date().toISOString()}
									/>	
								</FormGroup>
								<FormGroup controlId='end'>
									<ControlLabel> End Date: </ControlLabel>
									<FormControl 
										type='date'
										defaultValue={(this.state.calendarEvent.end != null)?
										this.state.calendarEvent.end.Date.getDate() : new Date().toISOString()}
									/>	
								</FormGroup>
								<FormGroup controlId='pdf'>
									<ControlLabel> Upload PDF: </ControlLabel>
									<FormControl 
										type='file'
										
									/>	
								</FormGroup>
								<FormGroup controlId='location'>
									<ControlLabel> Location: </ControlLabel>
									<FormControl 
									type='text'
										
									/>	
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
										
										this.setState({
											show: false
										})
									)}>Submit</Button>
							</form>
							
						</Modal.Body>
					</Modal>
				</div>
			);
	}
	
	handleEdit(calEvent) {
		console.log("Opening modal to edit an event");
		console.log(calEvent.start);
		console.log(calEvent.end);
		this.setState({
			show: true,
			eventTitle: "",
			calendarEvent: calEvent
		});
	}

	handleOpen() {
		console.log("Opening modal");
		console.log(this.state);
		this.setState({
			show: true,
			eventTitle: "",
			calendarEvent: ""
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
			event_url: event_url, 
			eventLocation: event_location, 
			eventDescription: event_description}
		console.log("adding this event to calendar");
		console.log(calendar_event);
		this.calendar.renderEvent(calendar_event);
	}
	
	componentDidMount() {
		this.calendar = new FullCalendar.Calendar($('#calendar'),{
			events: '8888/events',
			eventClick: (calEvent) => {this.handleEdit(calEvent);},
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
}



