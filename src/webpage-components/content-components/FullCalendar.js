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
			eventID: "",
			modalMode: 'add'
		};
		this.calendar = new FullCalendar.Calendar();
		this.handleOpen = this.handleOpen.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.addEvent = this.addEvent.bind(this);
		this.userObj = this.props.user
	}
	
	render() {
		if (this.state.start){
		console.log(this.state.start)
	}
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
										defaultValue={((this.state.start != "") && (this.state.start != undefined))? this.formatDate(this.state.start) : this.formatDate(new Date())}
									/>	
								</FormGroup>
								<FormGroup controlId='end'>
									<ControlLabel> End Date: </ControlLabel>
									<FormControl 
										type='date'
										defaultValue={((this.state.end != "") && (this.state.end != undefined))?
										this.formatDate(this.state.end) : this.formatDate(new Date())}
									/>	
								</FormGroup>
								{/*<FormGroup controlId='pdf'>
									<ControlLabel> Upload PDF: </ControlLabel>
									<FormControl 
										type='file'
										
									/>	
								</FormGroup>*/}
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
								<FormGroup controlId='eventID'>
									<FormControl type ='text' defaultValue={this.state.eventID} />
								</FormGroup>
								
								<Button onClick={() => {
									this.addEvent(
										$('#title').val(),
										$('#start').val(),
										$('#end').val(),
										$('#pdf').val(),
										$('#location').val(),
										$('#description').val(),
										$('#eventID').val())
										
									this.setState({
										show: false
									})
								}}>Submit</Button>
							</form>
							
						</Modal.Body>
					</Modal>
				</div>
			);
	}
	
	handleEdit(calEvent) {
		console.log("Opening modal to edit an event");
		console.log(calEvent);
		console.log(calEvent.start.toString())
		this.setState({
			show: true,
			eventTitle: calEvent.title, 
			start: calEvent.start.toDate(), 
			end: calEvent.end, 
			event_url: calEvent.url, 
			eventLocation: calEvent.eventLocation, 
			eventDescription: calEvent.eventDescription,
			eventID: calEvent.eventID
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
			eventDescription: "",
			eventID: ""
		});
	}
	formatDate(strDate){
		let date = new Date(strDate)
		var dd = ("0" + (date.getDate())).slice(-2);
		var mm = ("0" + (date.getMonth() +　1)).slice(-2);
		var yyyy = date.getFullYear();
		return( yyyy + '-' + mm + '-' + dd) ;
	}
	handleClose() {
		console.log("Closing modal");
		this.setState({show: false});
	}
	
	addEvent(eventTitle, startDate, endDate, eventUrl, eventLocation, eventDescription, id) {
		var calendar_event = {title: eventTitle, 
			start: new Date(startDate), 
			end: new Date(endDate), 
			url: eventUrl, 
			location: eventLocation, 
			description: eventDescription}
		$.post('http://localhost:8888/events/calendar', 
		JSON.stringify(calendar_event));
		this.calendar.renderEvent(calendar_event);
	}

	renderAdminCalendar(){
		this.calendar = new FullCalendar.Calendar($('#calendar'),{
			events: function(start, end, timezone, callback) {
				$.ajax({
					url: 'http://localhost:8888/events/calendar',
					dataType: 'json',
					success: function(doc) {
						var events = [];
						console.log(doc);
						doc.event.forEach(function(obj) {
							console.log(obj);
							events.push(obj);
						});
						console.log(events);
						callback(events);
					}	
				});	
			},
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
			},
			eventClick: (event) => {this.handleEdit(event)}
		});
		this.calendar.render();
	}

	renderReadOnlyCalendar(){
		this.calendar = new FullCalendar.Calendar($('#calendar'),{
			events: function(start, end, timezone, callback) {
				$.ajax({
					url: 'http://localhost:8888/events/calendar',
					dataType: 'json',
					success: function(doc) {
						var events = [];
						console.log(doc);
						doc.event.forEach(function(obj) {
							console.log(obj);
							events.push(obj);
						});
						console.log(events);
						callback(events);
					}	
				});	
			},
			customButtons: {
				addEventButton: {
					text: 'Add Event',
					click: () => {this.handleOpen()}
				}
			},
			header: {
				left: 'prev,next',
				center: 'title',
			},
			eventClick: (event) => {this.handleEdit(event)}
		});
		this.calendar.render();
	}
	renderNoCalendar(){
		$("#calendar").html("You are not logged in, please login to see the calendar ");
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
            this.renderNoCalendar()
        }
	}
}




