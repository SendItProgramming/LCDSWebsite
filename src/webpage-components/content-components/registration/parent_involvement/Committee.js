import React, { Component } from "react";
import SammyOurProgram from "./../../../../images/Sammy_Our_Program_Image.jpg"

export default class Committee extends Component {
  render(){
    return(
      <div className="info">
        <p className="fun"> Committe Member Positions</p>
        <b>**Committees are not required to attend monthly Board Meetings</b>
        <ul>
          <li>
          <p><b className="subTitle">Bingo Coordinator</b><br />

          Communicates with the Executive Director to ensure each Bingo date has the adequate number of volunteers scheduled and submits a list of workers for the current newsletter each month.  Communicates with the scheduled bingo workers 1 week prior to the scheduled bingo date to remind them of their commitment.  Attends the first part of each Bingo, takes attendance, assigns positions and ensures everyone knows what they are doing.</p>
          </li>
          <li>
          <p><b className="subTitle">Casino Coordinator</b> <br />

          Coordinates the casino volunteers for volunteer shifts. Consults with the Executive Director, Business Manager and the President throughout the assignment process. Ensures all positions are filled and all volunteer background check forms are submitted. Casinos are held every 2 years.</p>
          </li>
          <li>
          <p><b className="subTitle">Silent Auction Committee</b> <br />

          Coordinators are needed for various activities, such as Donation Receiver, Door Ticket sales and tracking, and assistance with other items related to the silent auction to be determined by the Fundraising Director.</p>
          </li>
          <li>
          <p><b className="subTitle">Newsletter Coordinator</b><br />

          Responsible for collecting reports from Board and Committee Members. Compiles the monthly newsletter. Coordinates production of the monthly newsletter with the assistance of the Executive Director.</p>
          </li>
          <li>
          <p><b className="subTitle">Cleaning Coordinator </b>

          Organizes and coordinates the monthly cleanings with the assistance of the Executive Director. Responsible for reminding members of their cleaning commitment.  Arranges to attend the first part of the cleaning to take attendance, and inform the members of the jobs which are required to be completed from the cleaning binder.  You may then leave and return to lockup after everyone is finished.</p>

          </li>
          <li>
          <p><b className="subTitle">Social Committee</b> <br />

          Plans the seasonal classroom and membership parties in collaboration with the teacher or members of the Board. Coordinates with the Social Committee members and delegates responsibilities needed to prepare for the parties. Members from the AM and PM classes are needed to assist in preparations for the class parties and membership parties.</p>
          </li>
        </ul>
        <img src={SammyOurProgram}  alt="" />
      </div>
    );
  }
}
