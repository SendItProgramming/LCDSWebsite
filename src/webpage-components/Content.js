import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom";
import SideBar from "./content-components/SideBar";
import MainContent from "./content-components/MainContent";
import BlogReader from "./BlogReader.js"
import ReactTable from "react-table";
import TextEditor from "./HTMLEditor.js";
import {
	QuotePanel,
	LoginPanel,
	KidsCornerPanel,
	SquirrelPanel,
	AboutUsPanel,
	Registration,
	Programs,
	PictureFrame,
	UpcomingEvents,
	CoSponsors,
	ButtonsPanel,
} from "./SharedComponents";
import "./../index-src/css/Content.css"

export default class Content extends Component {

	constructor(props){
		super(props)
		this.state = {
			quote:{
			Author: "Loading...",
			Text: "Loading..."
			},
			news:[]
		}
		this.GetQuote = this.GetQuote.bind(this)
		this.news = this.GetNews.bind(this)
	}

	componentDidMount(){
		this.GetQuote()
		this.GetNews()
		function myFunction() {
 		 	const url = "http://localhost:8888/auth/check";
			fetch(url, {
    		method : "POST",
    		body: new FormData(document.getElementById("inputform")),
    		// -- or --
    		// body : JSON.stringify({
        	// user : document.getElementById('user').value,
        	// ...
    		// })
			}).then(
    			response => response.text() // .json(), etc.
    			// same as function(response) {return response.text();}
			).then(
   		 	html => console.log(html)
			);
		}
		//document.getElementById("loginButton").addEventListener("click", myFunction);

	}

    render() {
        console.log(this.state.quote)
        return (
			<div class="body">

				<Switch>
                    <Route path={this.props.site_urls["Resources"]} exact>
                    	{this.SideBar()}
						{this.Resources()}
                    </Route>
					<Route path={this.props.site_urls["AboutUs"]} exact>
					{this.SideBar()}
						{this.About()}
                    </Route>
					<Route path={this.props.site_urls["News"]} exact>
					{this.SideBar()}
						{this.News()}
                    </Route>
                    <Route path={this.props.site_urls["Blogs"]} exact>
						<BlogReader />
                    </Route>
					<Route path={this.props.site_urls["Admin"]} exact>
					{this.SideBar()}
						<TextEditor path={this.props.site_urls} titles={this.props.titles}/>
					</Route>
					<Route path={this.props.site_urls["NotFound"]} exact>
					{this.SideBar()}
						{this.Error()}
                    </Route>

				</Switch>


			</div>
        )
	}

	SideBar() {
		return(

			<div class="sidebar">
					<SideBar site_urls={this.props.site_urls}
						quote={<QuotePanel quote={this.state.quote}/>}
						custom_buttons={<ButtonsPanel/>}
						member_login={<LoginPanel/>}
						kids_corner={<KidsCornerPanel/>}
						squirrel={<SquirrelPanel/>}
						about_us={<AboutUsPanel/>}
						registration={<Registration/>}
						programs={<Programs/>}
						pic={<PictureFrame/>}
						upcoming_events={<UpcomingEvents/>}
						co_sponsors={<CoSponsors/>}
					/>
				</div>
		);
	}

	Error(){
		return(
			<div>
				<p class="Title">WHOOPS YOU'VE MADE A MISTAKE</p>
				<p class="subTitle">If you're here, you made a mistake, go back</p>
			</div>
		);
	}

	About(){
		return (
			<p>ABOOT</p>
		);
	}
	News(){
		const items = this.state.news
		console.log(items)
		return(
			<div class = "content">
			<p class="Title">News:</p>
			<table class = "Table">
			<tbody>
				{items.map(item => (

						<tr class = "cell">
						<td>
							<p>{item.Text}</p>
						</td>
						</tr>

				))}
		</tbody>
		</table>
		</div>
		)

	}

	Resources(){
		return(
		<div class ="content">
			<p class ="Title">Resources</p>
			<p class="subTitle">The following are helpful websites for parents</p>
			<table class = "Table">
				<tbody>
					<tr class ="cell">
						<td>
							<p>Web Link <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/kindergarten.pdf">
							Kindergarten Curriculum</a></p>
							<p>Alberta Education - Kindergarten Curriculum Guide for Parents</p>
						</td>
					</tr>
					<tr class ="cell">
						<td>
							<p>Web Link <a href="https://www.alberta.ca/ministry-education.aspx">
							Alberta Education</a></p>
							<p>Alberta Education Website</p>
						</td>
					</tr>
					<tr class ="cell">
						<td>
							<p>Web Link <a href="http://www.humanservices.alberta.ca/financial-support/15104.html">
							Alberta Government Childcare Subsidy</a></p>
							<p>Information about AB Government Childcare Subsidy</p>
						</td>
					</tr>
					<tr class ="cell">
						<td>
							<p>Web Link <a href="https://myhealth.alberta.ca/Pages/default.aspx">
							My Health Alberta</a></p>
							<p>Health Information for Parents.  check to make sure your child's immunizations are up to date.</p>
						</td>
					</tr>
					<tr class ="cell">
						<td>
							<p>Web Link <a href="http://www.napta.ca/">
							Northern Alberta Preschool Teacher's Association</a></p>
							<p>Find a Preschool in your area.</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
						<p>Web Link <a href = "http://www.humanservices.alberta.ca/services-near-you/edmonton-and-area-child-and-family-services.html">
						Edmonton Region Child & Family Services</a></p>
						<p>Edmonton Region Child & Family Services - Programs and Services</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
						<p>Web Link <a href="https://www.abcheadstart.org/">
							ABC Headstart</a></p>
							<p>ABC Headstart Program - Preschool Programs and Learning Support for low income families and low income families having children with special learning needs.</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
							<p>Web Link <a href="">Eye See...Eye Learn Program</a></p>
							<p>Eye See...Eye Learn Program - The Alberta Association of Optometrists
							Free Eye Examination and Free Glasses for Kindergarten Students in Alberta</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
							<p>Web Link <a href="https://www.triplep-parenting.ca/alb-en/triple-p/">Triple P - Positive Parenting</a></p>
							<p>Triple P - Positive Parenting Website</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
							<p>Web Link <a href="https://www.triplep-parenting.ca/alb-en/triple-p/">Triple P - Positive Parenting</a></p>
							<p>Triple P - Positive Parenting Website</p>
						</td>
					</tr>


					<tr class = "cell">
						<td>
						<p>Web Link <a href="http://www.earlychildhoodedm.ca/northcentral/">North Central Early Years Coalition</a></p>
						<p>North Central Early Years Coalition Website. Parenting information and events.</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
						<p>Web Link <a href="https://www.edmonton.ca/attractions-events.aspx">City of Edmonton - Attractions and Events</a></p>
						<p>Check out what's happening in the City of Edmonton.</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
						<p>Web Link <a href="https://www.drugwatch.com/health/children/"> Drugwatch</a></p>
						<p>Children's Health Guide: Newborn to Preteen</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
						<p>Web Link <a href= "https://www.caringforkids.cps.ca/">
						Canadian Pediatric Society</a></p>
						<p>Information for parents from the Canadian Pediatric Society</p>
						</td>
					</tr>

					<tr class = "cell">
						<td>
						<p>Web Link <a href="https://edmonton.cmha.ca/">Edmonton Canadian Mental Health Association</a></p>
						<p>Call 211. Great resources for parenting help, newcomers to Edmonton, mental health support, where to go for help with basic needs, etc.</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		);
	}

	GetQuote() {
		fetch("http://localhost:8888/quotes/")
		.then(res => res.json())
		.then(
		  (result) => {
			this.setState({
				quote: result
			})
		  },

		  (error) => {
		  	console.log(error)
			console.log("ERROR!")
            this.setState({
				isLoaded: true,
				error
			});
		  }
		)
		//this.RenderQuote()
	}
	GetNews() {
		console.log("We here")
		fetch("http://localhost:8888/news/")
		.then(res => res.json())
		.then(
		  (result) => {
				console.log("WERK")
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

	RenderQuote() {
		const {error, isLoaded, quote }  = this.state;
		if (error) {
			console.log("ERROR loading backup")
			return (

				<QuotePanel
					quote  = "Life is a garden, dig it"
					author = "Joe Dirt"
				/>
			);
		}
		else if (!isLoaded){
			console.log("Not Loaded... Waiting...")
		}
		else {
		return(

			<QuotePanel
				quote  = {quote.Text}
				author = {quote.Author}
			/>

		);
		}
	}

}
