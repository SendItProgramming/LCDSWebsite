import React, { Component } from "react";

export default class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  componentWillMount(){
    this.getNews()
  }

  render() {
      const items = this.state.news
      return(
        <div className = "content">
        <table className = "Table">
            <tbody>
              <tr>
                <th></th>
              </tr>
              {items.map(item => (
                <tr>
                  <td >
                  <p className = "left-fun">
                  {item.Title}
                  </p>
                  <p className="left">{item.Text}</p>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      );
    }

  getNews() {
		fetch("http://localhost:8888/news/")
		.then(res => res.json())
		.then(
		  (result) => {
				console.log("info grabbed")
			this.setState({
				news: result
			})
		  },

		  (error) => {
		  	console.log("Err: " + error)
            this.setState({
				isLoaded: true,
				error
			});
		  }
		)
	}

}

