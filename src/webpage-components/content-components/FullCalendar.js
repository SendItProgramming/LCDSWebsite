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
			start: "", 
			end: "", 
			event_url: "", 
			eventLocation: "", 
			eventDescription: "",
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
									defaultValue={this.state.eventTitle}
									/>	
								</FormGroup>
								<FormGroup controlId='start'>
									<ControlLabel> Start Date: </ControlLabel>
									<FormControl 
										type='date'
										defaultValue={((this.state.start != "") && (this.state.start.Date != undefined))?
										this.state.start.Date.getDate() : new Date().toISOString()}
									/>	
								</FormGroup>
								<FormGroup controlId='end'>
									<ControlLabel> End Date: </ControlLabel>
									<FormControl 
										type='date'
										defaultValue={((this.state.end != "") && (this.state.start.Date != undefined))?
										this.state.end.Date.getDate() : new Date().toISOString()}
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
									defaultValue={this.state.eventLocation}	
									/>	
								</FormGroup>
								<FormGroup controlId='description'>
									<ControlLabel> Description: </ControlLabel>
									<textarea class="form-control rounded-0" rows='3'
									defaultValue={this.state.eventDescription}
									/>	
									
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
		console.log(calEvent);
		this.setState({
			show: true,
			eventTitle: calEvent.title, 
			start: calEvent.start, 
			end: calEvent.end, 
			event_url: calEvent.url, 
			eventLocation: calEvent.eventLocation, 
			eventDescription: calEvent.eventDescription
		});
	}

	handleOpen() {
		console.log("Opening modal");
		console.log(this.state);
		this.setState({
			show: true,
			eventTitle: "", 
			start: "", 
			end: "", 
			event_url: "", 
			eventLocation: "", 
			eventDescription: ""
		});
	}
	
	handleClose() {
		console.log("Closing modal");
		this.setState({show: false});
	}
	
	addEvent(eventTitle, startDate, endDate, eventUrl, eventLocation, eventDescription) {
		console.log($('#calendar'));
		var calendar_event = {title: eventTitle, 
			start: startDate, 
			end: endDate, 
			event_url: eventUrl, 
			eventLocation: eventLocation, 
			eventDescription: eventDescription}
		$.post('http://localhost:8888/events/calendar', 
			{
				Title: eventTitle, 
				StartDate: startDate,  
				EndDate: endDate,
				URL: eventUrl,
				Location: eventLocation,
				Description: eventDescription
			});
		console.log("adding this event to calendar");
		console.log(calendar_event);
		this.calendar.renderEvent(calendar_event);
	}
	
	componentDidMount() {
		this.calendar = new FullCalendar.Calendar($('#calendar'),{
			events: function(start, end, timezone, callback) {
				$.ajax({
					url: 'http://localhost:8888/events/calendar',
					dataType: 'json',
					success(doc) {
						console.log(doc);
						var events = [];
						doc.forEach(function(element) {
							events.push({
								title: $(this).attr('Title'),
								start: $(this).attr('StartDate')
							});
						})
						console.log(events);
					}
				});	
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




