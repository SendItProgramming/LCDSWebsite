import React, { Component } from "react";
import SammySchool from "./../../../images/Sammy_School_Image.jpg"

export default class JrKindergarden extends Component {

  render() {

    return(
      <div className="info">
			<p className="fun">Preschool 3 & 4 Year Olds</p>
			<p><b>LCDS offers a small class setting for Preschool aged children.</b></p>
			<p>Preschool and Kindergarten students are combined in the classroom up to a <b>maximum of 17 students/day/class.</b></p>

			<p><b>The LCDS Preschool program is a structured, fun, play oriented program with a focus on family and community, language enrichment, social & personal development skills and development of fine & large motor skills.</b></p>

			<p><b>Preschool students benefit</b> from the inclusion of the Kindergarten students in the classroom by receiving <b>early exposure to Kindergarten curriculum concepts and classroom expectations.</b></p>

			<p>LCDS offers <b>one morning class (9:15 - 11:45 a.m.)</b> and <b>one afternoon class (1:05 - 3:35 p.m.) five days/week. </b></p>
			<p>*Parents may choose the class and days their child attends (subject to availability at registration).</p>
			<ul>
				<li>For 3 year old students, 2 days per week are recommended.</li>
				<li>For 4 year old students, 2-3 days per week are recommended.</li>
			</ul>

			<p>*Parents who would like their child to attend extra days may submit their request with their child's registration; extra days are subject to availability, teacher and board approval.</p>


			<a className="green" href={this.props.state.site_urls["IsMyChildReady"]}> Is My Child Ready to Begin Preschool or Kindergarten?</a>

			<a className="green" href={this.props.state.site_urls["PreschoolDevSkills"]}> Preschool Development Skills</a>

			<img src={SammySchool} alt="" />
			</div>
    )
  }
}