import React, { Component } from "react";
import LCDSMap from "./../../../images/LCDSmapSQ.jpg"
import { FaFax, FaPhone } from 'react-icons/fa';

export default class ContactUs extends Component {

  render() {

    return(
			<div className="info">
				<p className="fun">LCDS Preschool and Kindergarden Contact Information</p>
				<table className= "Table">
				<tbody>
					<tr>
						<th></th>
						<th className="right"></th>
					</tr>
					<tr>
						<td>
							<p className="left-fun">General Office:</p>
							13931-140 Street<br />
							Edmonton, Ab<br />
							T6V 1J7<br />
							<br />
							<FaPhone /> (780) 473-7216<br />
							<FaFax /> (780) 473-7021
						</td>
						<td className="right"><img src={LCDSMap} alt="" /></td>
					</tr>
				</tbody>
				</table>
			</div>
    )
  }
}