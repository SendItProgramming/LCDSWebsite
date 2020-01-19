import React, { Component } from "react";
import { AboutInfo } from "./../../SharedComponents.js"

export default class AboutUs extends Component {

  render() {

    return(
      <div className="info">
			<AboutInfo site_urls={this.props.state.site_urls}/>
			<br />
			<br />
			<p className="fun">Our Beliefs</p>
			<p>Today, LCDS Preschool and Kindergarten still operates with the same values and beliefs established by the founding members of the Society.  Parents have the unique opportunity to be actively involved in their children's education through daily classroom activities, operational committees and management of the school in coordination with the program's teaching staff, Executive Director and Business Manager.</p>

			<p>LCDS Preschool and Kindergarten distinguishes itself from other Edmonton preschools in that the program offers a Kindergarten program and the program is led by a Teacher with a Bachelor Degree in Elementary Education and Psychology along with qualified Educational Assistants.</p>

			<p>LCDS is a distinctive early learning program in that we offer both preschool and kindergarten in a combined classroom setting.  We follow a 'Learning through play" philosophy, in a language rich and fun environment.  Under the guidance of our teachers, children aged 3, 4 and 5 attend together in the same classroom where they are introduced to a daily structured routine, balanced with learning and play.  The program focuses on age appropriate development of the child's language, vocabulary, social, emotional, physical and intellectual growth and development.  The teacher introduces the children to daily kindergarten curriculum concepts and focuses on Kindergarten readiness for all children.  Children develop a strong foundation for future educational success.</p>

			<p>A love of learning is encouraged in every child through structured activities, free play, daily projects, monthly themes and circle time. Special events such as seasonal parties, family events, field trips and in-class presentations are also included to enhance the learning process. Parent involvement plays a key role in the success of the program.</p>
			</div>
    )
  }
}