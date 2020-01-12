import React, { Component } from "react";
import SammyTestimonials from "./../../../images/Sammy_Testimonials_Image.jpg"
import { Image }from "react-bootstrap"

export default class Testimonials extends Component {
  render() {

    return(
      <div className="info">
				<p className="fun">Parent Testimonials</p>
					<blockquote>
					"I have had two daughters go through the LCDS Preschool and Kindergarten program and I would not hesitate to recommend this program to any family. The teachers are patient & kind. Those may seem like simple qualities, but to a child they are priceless. The children are encouraged to try new experiences, to be creative & to experiment. Their certificated Teacher Ms. Michell, brings her early education passion and experience to the classroom. The children benefit from her musical talents and her thoughtful program planning and each child gets the attention and support that truly helps them grow. This program is like no other and the experience of being a part of this amazing parent co-operative community is remarkable"
					</blockquote>
					<p className= "left"><b>-Patrizia C. -Edmonton</b></p>

				<blockquote>
				"When we registered our first child with LCDS in 1994, we were impressed by the teacher who was so friendly and in control of the classroom environment.  There were fun activities set out for the children to play with, students were engaged in what they were learning and parents were always welcome to volunteer in the classroom and be a part of the program.  The classroom routine was well structured and allowed my child to feel safe and comfortable while having fun.  We returned with our second child in 1999, the program had a new teacher and we enjoyed the new ideas and style she brought to the program.  Our third child began in 2003 and as we had been with the program for so long, I took an active role on the LCDS Board of Directors.  I continued to volunteer for LCDS long after my children left the preschool and eventually accepted a position with the program.  LCDS continues to provide the same quality program it has since our first child began in 1994 and continues to change and adapt with the needs of it's students and members in order to provide a superior early childhood program." 
				</blockquote>
				<p className= "left"><b>-Shannon M. -Edmonton</b></p>

				<blockquote>
					"We just wanted to say thank you so much for everything this year!! R. has come so far and we are so proud and thankful for all you have done for R. and our family. The things he has learned are incredible but mostly the tools and feedback you have provided to us will go a long way. The attention and care that all of you have shown towards R. throughout this year is amazing and surpassed every expectation we had for R's first school experience. Please pass on our thank you to all of the staff members and have a great summer!!" 
				</blockquote>
				<p className= "left"><b>-Melanie G. -Edmonton</b></p>

				<blockquote>
					"We really want to thank everyone for their role in assisting and supporting K's growth. We know everyone is instrumental to his success, and that it would not be possible without a team. Although we often identify areas for further growth, we also know he would not have been as successful as he has already without each and everyone of you."
				</blockquote>
				<p className= "left"><b>-Andrea O. -Edmonton</b></p>

				<Image src={SammyTestimonials} />
			</div>
    )
  }
}