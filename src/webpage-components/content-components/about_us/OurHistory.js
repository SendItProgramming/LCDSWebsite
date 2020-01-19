import React, { Component } from "react";
import SammyHistory from "./../../../images/Sammy_Our_History_Image.jpg"

export default class OurHistory extends Component {
  render() {

    return(
      <div className="info">
      <p className="fun">Our History</p>
      <p>LCDS Preschool and Kindergarten is a licensed, independent, non-profit, cooperative Preschool and Kindergarten program.

        The Londonderry Child Development Society was established in 1972, by a group of parents looking for educational alternatives for their preschool aged children in the Londonderry Community. 

        The program began as a small class operating out of ME Lazerte Composite High School.  With the growth of the High School and the Society, relocation was inevitable. In 2004, the Society moved to the Greisbach area, which was also developing and soon had to relocate once more.

        The Society is now sharing space with Gateway Alliance Church, and is pleased to be able to offer the surrounding community a well-defined, quality, early childhood education program; with an interactive, dynamic and fun learning environment involving family and community.</p>

      <a href={this.props.state.site_urls["Founder"]} className="green">Our Founder</a>
      <br />
      <br />
      <img src={SammyHistory} alt="" />

    </div>
    )
  }
}