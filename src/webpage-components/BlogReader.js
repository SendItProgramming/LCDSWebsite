import draftToHtml from 'draftjs-to-html';
import React, { Component } from 'react';
import TextEditor from "./HTMLEditor.js";

export default class BlogReader extends Component {
	constructor(props) {
		super(props)
		this.loadBlogs = this.loadBlogs.bind(this);
		this.state = {

			blogs: [{ "ID": 1,
    			"Target": "",
    			"Content": "{\"blocks\":[{\"key\":\"60adq\",\"text\":\"Loading\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    			"LastUpdated": "2019-04-05T20:18:16.767-06:00"
  			}],
  			html: []
		}
		this.loadBlogs()
	}

	loadBlogs() {
		let comp = this;
		let hashConfig = {
  			trigger: '#',
  			separator: ' ',
		}
		fetch('http://localhost:8888/editor/grab')
  			.then(function(response) {
    			return response.json();
  			})
  			.then(function(myJson) {
  				let html = []
  				console.log(myJson)
    			myJson.forEach(function(element){
    				element.Content = JSON.parse(element.Content)
    				element.LastUpdated = new Date(element.LastUpdated)
    				html.push(
    					<div class="panel panel-default">
    						<div class="panel-heading text-left">
    							Blog Posted: {element.LastUpdated.toLocaleString()}
    						</div>
    						<div class="panel-body text-left bg-info" dangerouslySetInnerHTML={{ __html: draftToHtml(element.Content, hashConfig, false) }} />
    					</div>
    				)
    			})
    			comp.setState({
    				blogs: myJson,
    				html: html
    			})
  			});
	}

	createBlogPosts(blogArray){
		let htmlBlogs = []
		blogArray.for
	}

	render(){
		let markup = draftToHtml(this.state.blogs[0].Content)
		if (this.state.html.length) {
			return (
				this.state.html)
		}
		return(
			<div>
				<div dangerouslySetInnerHTML={{ __html: markup }} />
			</div>
			)
	}
}