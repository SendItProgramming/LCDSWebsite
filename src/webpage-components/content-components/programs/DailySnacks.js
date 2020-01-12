import React, { Component } from "react";
import SammyEating from "./../../../images/Sammy_Daily_Snack_Image.jpg"

export default class DailySnacks extends Component {
  render() {

    return(
			<div className="info">
			<p className="fun">Daily Snacks</p>
			<p><b>As part of the Child Care Licencing Act, a Daily Snack is to be provided to the students every day. The scheduled Parent Helper is responsible for providing the scheduled Healthy Snack and Beverage (ie. Fruit & Crackers, Veggies & Crackers, Sandwiches, Cheese & Crackers and Parents Choice Day) for 17 children. </b></p>

			<p>LCDS chooses to serve the daily snack in a group setting.</p>

			<p className="subTitle">Serving snack in a group setting:</p>
			<ul>
				<li><b>Ensures all</b> of the children have the <b>same choice of snack</b> on a daily basis.</li>
				<li><b>Allows</b> the children to <b>experience new foods</b> they may not try at home and parents or staff members are able to monitor children’s allergies or food reactions on any given day.</li>
				<li>Eliminates students arriving at school with too much food, food which does not adhere to the allergy restrictions, comparison and competition among peers and between parents to have “The Best Snack”.</li>
			</ul>
			<p className="subTitle">Snack shall have one serving each from 2 or more basic food groups consistent with Canada’s Food Guide.</p>
			<ul>
				<li>For Example – Monday may be Fruit and Cracker day, the parent might bring fruit such as strawberries and oranges with cinnamon pita chips, the beverage might be white or chocolate milk. Tuesday may be cheese and cracker day, the parent might bring cheddar or marble cheese and Ritz crackers, the beverage might be apple juice.  "Healthy Water" is always offered as an alternate choice to whatever the beverage might be.</li>
			</ul>

			<p><b>Each month the snack schedule will rotate to the next day of the week</b> to ensure each family gets a chance to bring something different for snack; for example, Mondays in February might be Cheese & Crackers, the next month Cheese & Crackers will be rotated to Tuesdays.</p>

      <p className="fun">Allergies, Personal, & Religious Food Restrictions</p>
      <ul>
        <li><b>LCDS is required by Alberta Government licensing to ensure all children with food allergies, which can place them at serious health risk, are kept safe to the best of our abilities, while attending our program.</b></li>
        <li><b>LCDS strives to be a NUT-FREE classroom</b>, this <b>includes products</b> which are labelled with the phrase <b>“may contain nuts”</b>.  A list of approved snacks, brands and nut free bakeries are listed in the LCDS Parent Handbook.</li>
        <li><b>LCDS and the Board of Executives, respect the personal choices, ethnic and religious backgrounds of its members.  As a result, food preparation procedures may include steps to prevent cross contamination of snacks which contain specific ingredients.  This may change from year to year depending on student needs.</b></li>
        <li>Examples of specific ingredients which may require additional food preparation steps may include eggs, dairy products, pork or beef.  If you have a question about the requirements for the preparation of food while on parent helper duty, please ask the staff before purchasing, bringing and preparing the snack.</li>
      </ul>

			<img src = {SammyEating} alt="" />

			</div>
    )
  }
}
