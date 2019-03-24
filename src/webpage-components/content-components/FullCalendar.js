import React, { Component } from "react"
import calendar from 'fullcalendar';
import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css'

export default class FullCalendar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
			return <div id="calendar"></div>;
	}
	
	componentDidMount() {
		 $('#calendar').fullCalendar({
			 events: '8888/events',
			 customButtons: {
				addEventButton: {
					text: 'Add Event',
					click: function () {
						alert('You have clicked the add event button!');
					}
					
				}
			 },
			 header: {
				 left: 'prev,next',
				 center: 'title',
				 right: 'addEventButton'
			 }
		});
	}
}