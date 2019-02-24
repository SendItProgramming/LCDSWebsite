import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom";
import SideBar from "./content-components/SideBar";
import MainContent from "./content-components/MainContent";
import ReactTable from "react-table";
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
    render() {
        return (
			<div class="body">
				<div class="sidebar">
					<SideBar site_urls={this.props.site_urls}
						quote={this.GetQuote()}
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


				<Switch>
                    <Route path={this.props.site_urls["Resources"]} exact>
						{this.Resources()}
                    </Route>
					<Route path={this.props.site_urls["AboutUs"]} exact>
						{this.About()}
                    </Route>
					<Route path={this.props.site_urls["NotFound"]} exact>
						{this.Error()}
                    </Route>
				</Switch>


			</div>
        )
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
		return(

			<QuotePanel
				quote="Childhood is a Journey, not a Race"
				author="unknown"
			/>

		);
	}

}
