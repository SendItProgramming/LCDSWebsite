import React, { Component } from "react";
import SammyJune from "./../../../images/Sammy_June_Henry.jpg"

export default class PreschoolDevSkills extends Component {
  render() {
    return(
			<div className="info">
				<p className="fun">Our Founder</p>
				<p>It was with sorrow and regret that LCDS members heard of the passing of its founder, June Henry, in late January 1978.  This wonderfully courageous person had fought a long and brave battle against cancer.</p>

				<p>Any attempt to record the achievements of June Henry in her short lifetime is a difficult task.  Difficult in that she accomplished so much more than most of us can hope to ever achieve or aspire towards.  She was a remarkable person in so many ways.</p>

				<p>More than anything else, I have wanted to capture the true spirit and energy and drive that was June’s being.  I really believe that this can only be done by recording her own written autobiography prepared for the Edmonton Public School Board in 1973, which her husband, Mike, has so very kindly loaned to me.</p>

				<p>When reading her life’s resume it is necessary to keep in mind that June was basically a very shy person who quietly agonized over public speaking yet who never shirked the leadership role which she so ably filled all her life.  Those of us who were privileged to know her and to work with her are left with a sense of loss, for she gave us direction, she provided us with good common sense and she inspired us to strive for better things in education for our children. </p>

				<p>To the very end of her life she cared greatly about the success and future of the Londonderry Child Development Society.</p>

				<p>Read her resume and capture the essence of her spirit.  I’m sure its reading makes us all a little humbler.</p>

				<a className="green" href={this.props.state.site_urls["JuneHenry"]}>June Henry</a>
				<img src={SammyJune} alt="" />
			</div>
    )
  }
}