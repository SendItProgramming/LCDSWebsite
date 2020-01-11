import React, { Component } from "react";
import SammyBoardRoom from "./../../../images/Sammy_Our_Board_Image.jpg"

export default class OurBoard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      board: []
    }
  }
  componentWillMount(){
    this.getBoard()
  }

  render() {

		const items = this.state.board
    console.log(items)
		return(
			<div className="info">
				<p className="fun">Our Board Members</p>
					<img src={SammyBoardRoom}  alt="" />
					<br/>
				<table className= "Table">
				<tbody>
					<tr>
						<th>Position</th>
						<th className="right">Member</th>
					</tr>
					{items.map(item => (
						<tr>
							<td><b>{item.MemberPosition}</b></td>
							<td className="right">{item.MemberFirstName} {item.MemberLastInitial}</td>
						</tr>
					))}
				</tbody>
				</table>
			</div>
		);
  }

  getBoard() {

    fetch("http://localhost:8888/board/")
		.then(res => res.json())
		.then(
		  (result) => {
				console.log("info grabbed")
			this.setState({
				board: result
			})
		  },

		  (error) => {
		  	console.log("Err: " + error),
				error
		  }
		)
  }
}
