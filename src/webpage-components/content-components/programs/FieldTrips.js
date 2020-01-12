import React, { Component } from "react";
import Muttart from "./../../../images/Muttart_Conservatory_Image.jpg"

export default class FieldTrips extends Component {
  render() {

    return(
      <div className="info">
      <p className="fun">Field Trips</p>
      <p><b>Field trips are scheduled regularly to enhance the curriculum being taught in the classroom.</b></p>

      <p><u><b>All registered students</b></u> are welcome to attend a scheduled field trip, <b>even if it is scheduled on a day they do not attend class.</b>
      <b><u>Parent volunteers</u></b> are needed and are welcome to attend the scheduled field trips.</p>

      <p>**Due to insurance and licensing purposes LCDS can only take registered LCDS students on the field trips.  We ask that parents find alternate child care for siblings if they are planning to volunteer for a field trip with their registered child. </p>

      <p><b>Field trip costs are <u>included</u> in the monthly material fees.</b></p>



      <p className="subTitle">Examples of previous year’s field trips:</p>
      <p>Prairie Gardens, John Janzen Nature Center, The Royal Alberta Museum, Muttart Conservatory, Kiwanis Safety City, Telus World of Science, The Clay Guys, Puppet Tree House, Bus Safety, Rutherford House and WEM Undersea Caverns (Subject to change from year to year).</p>
      <img src={Muttart} alt="" />
    </div>
    )
  }
}