import React, { Component } from "react";

export default class Fundraising extends Component {
  render() {

    return(
      <div className="info">
			<p className="fun">Fundraising</p>
			<p><b>LCDS Preschool & Kindergarten members have chosen to pay a one-time family fundraising fee instead of raising funds through numerous fundraising events or campaigns.</b></p>
			<p>The family fundraising fee will be calculated each year by the Board of Directors; depending on enrollment numbers the fee will adjust accordingly.</p>
			<p>The fee for the {this.getYear()}-{this.getYear() + 1} school year will be $300.  Members will receive a Tax Donation receipt for the amount of $300 if full payment is received in September.</p>
			<p className="subTitle">Options for the family fundraising fee:</p>
			<ul>
				<li>Families may pay the fee in a one time payment in September and will receive a tax donation receipt for the total amount in February.</li>
				<li>Families may split the payment into 2 payments of $150 payable on September 1st and February 1st.  2 tax donation receipts will be issued for $150.00 each and will be applicable for the coordinating tax year.</li>
				<li>Families may pay part of the family fundraising fee $150 on September 1st and participate in a few small fundraisers decided on by the Board of Directors each year to raise the other $150 of their fundraising commitment.  Families would receive a tax donation receipt for $150.</li>
				<li>Families may also choose to raise all of their family fundraising fee through fundraising, members must let the Board of Directors know they will be choosing this option.</li>
			</ul>
			<p><i>**Families choosing to do fundraising instead of paying the family fundraising fee will be required to submit a deposit cheque in the amount of $150 or $300 depending on the option chosen.</i></p>

			<p><i>**Fundraising events may include a walk-a-thon, spring flower orders, poinsettia orders, chocolate or specialty food (kolbasa, pizza kits, perogies, etc.) sales.</i></p>
			<p><b>The money raised from the Family Fundraising Fee or fundraising events goes directly back to the classroom for field trips, family social events, class parties, new toys and materials, gym equipment or furnishings.<br/><br/>
			Thank you for donating and for all of your hard work!!</b></p>

		</div>
    )
  }

  getYear(){
    return new Date().getFullYear();
  }
}