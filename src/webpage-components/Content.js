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
import {
	Image
}from "react-bootstrap"
import "./../index-src/css/Content.css"
import WebFont from 'webfontloader';
import Sammy from "./../images/SammyPage.jpg"
import SammySchool from "./../images/Sammy_School_Image.jpg"

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
		//this.GetQuote = this.GetQuote.bind(this)
		this.news = this.GetNews.bind(this)
		WebFont.load({
			google: {
				families: ['Londrina Sketch']
			}
		});
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
        return (
			<div class="body">
				<div class="sidebar">
					<SideBar site_urls={this.props.site_urls}
						quote={this.state.quote}
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

				<div class="mainBody">
					<Switch>
						<Route path={this.props.site_urls["Home"]} exact>
							{this.About()}
						</Route>
						<Route path={this.props.site_urls["Resources"]} exact>
							{this.Resources()}
						</Route>
						<Route path={this.props.site_urls["AboutUs"]} exact>
							{this.About()}
						</Route>
						<Route path={this.props.site_urls["OurStaff"]} exact>
							{this.OurStaff()}
						</Route>
						<Route path={this.props.site_urls["Squirrel"]} exact>
							{this.Sammy()}
						</Route>
						<Route path={this.props.site_urls["News"]} exact>
							{this.News()}
						</Route>
						<Route path={this.props.site_urls["Facebook"]} exact>
							{this.Facebook()}
						</Route>
						<Route path={this.props.site_urls["Registration"]} exact>
							{this.Reg()}
						</Route>
						<Route path={this.props.site_urls["OpenHouse"]} exact>
							{this.OpenHouseInfo()}
						</Route>
						<Route path={this.props.site_urls["TrialClasses"]} exact>
							{this.TrialClasses()}
						</Route>
						<Route path={this.props.site_urls["Kindergarden"]} exact>
							{this.Kindergarden()}
						</Route>
						<Route path={this.props.site_urls["JrKindergarden"]} exact>
							{this.JrKindergarden()}
						</Route>
						<Route path={this.props.site_urls["PreSchool"]} exact>
							{this.PreSchool()}
						</Route>
						<Route path={this.props.site_urls["LearningSupport"]} exact>
							{this.LearningSupport()}
						</Route>
						<Route path={this.props.site_urls["FieldTrips"]} exact>
							{this.FieldTrips()}
						</Route>
						<Route path={this.props.site_urls["DailySnacks"]} exact>
							{this.DailySnacks()}
						</Route>
						<Route path={this.props.site_urls["JobOpportunities"]} exact>
							{this.SubtituteTeachers()}
						</Route>
						<Route path={this.props.site_urls["PreschoolDevSkills"]} exact>
							{this.PreschoolDevSkills()}
						</Route>
						<Route path={this.props.site_urls["IsMyChildReady"]} exact>
							{this.IsMyChildReady()}
						</Route>
						<Route path={this.props.site_urls["NotFound"]} exact>
							{this.Error()}
						</Route>
					</Switch>
				</div>


			</div>
        )
	}
	Reg(){
		return(
			<div class="info">
				<p class = "fun">Registration Requirements</p>
				<p><b>All children must be at least 3 years of age and fully toilet trained in order to register with LCDS.</b>
				Fully toilet trained means your child <b>can recognize</b> when they have to go to the washroom and <b>are able to pull their clothes down and up</b>; they must <b>be able to wipe themselves</b> and flush the toilet.
				They <b>must be fully functioning</b> in the bathroom stall.
				Staff may assist with buttons or snaps.</p>
				<br/>

				<p><b>Sending a child to school in “Pull-Ups” is not accepted.</b></p>
				<p class="subTitle">Registration Priority</p>
				<p>All families who have <b>previously</b> registered with <b>LCDS</b> have <b>first priority</b> for registration in the program and are <b>eligible to register in February</b> on the designated registration date for the following year.</p>
				<br/>


				<p>Children who are <b>new</b> to the program are <b>eligible to register in March </b>on the designated registration date.
				Ask about our Free Trial Classes if you are not sure if your child is ready for school.
				<b>Currently registered families</b> will be entered into <b>a random draw for an appointment time</b> to determine the order in which registrants are able to register.
				This gives an equal opportunity for members to pick their choice of days and program time.
				A<b><u>complete</u></b> registration form, fees, all deposit cheques and any supporting documentation <b><u>must</u></b> be submitted to the registrar at the given appointment time. </p>
				<br/>

				<p><b>Previous members</b> who do not have a child currently registered will be able to register <b>after the current families have registered</b>.
				<b>New Families</b> are invited to attend the designated Open House and Registration Night.  </p>
				<br/>

				<p>Open House is a casual drop in format where parents can attend with their children, experience the classroom, meet the Teacher, other staff members and other LCDS Parents. Prospective new Families may direct any of their questions to the LCDS Staff Members or Parents in attendance.
				<b>Those who wish to register in the program will be invited to pick up a registration package and may register at that time providing there are still spots available.</b>
				<b>A wait list is formed when the program is full.  If there are any withdrawals prior to September, the wait list will be accessed by the date in which families were added to the list.</b></p>

				<p>A <b><u>complete</u></b> registration form, fees, all deposit cheques and any supporting documentation <b><u>must</u></b> be submitted to the registrar at the time of registration in order to be considered <b><u>registered</u></b> in the program.</p>
				<br/>

				<p class="green">Registration Requirements For Learning Support</p>
				<br/>
				<p class="green">Registration Commitments</p>
				<br/>
				<p class="green">Parent Involvement</p>
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
			this.AboutInfo()
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
							<p>Web Link <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">
							Kindergarden Curriculum</a></p>
							<p>Alberta Education - Kindergarden Curriculum Guide for Parents</p>
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
							Free Eye Examination and Free Glasses for Kindergarden Students in Alberta</p>
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

	AboutInfo(){

		return(
			<div class="info">
				<p class="fun"><a class="funLink" href={ this.props.site_urls["AboutUs"] }>About us</a></p>
				<p><b>LCDS Preschool & Kindergarden (formerly Londonderry Child Development Society)</b> was established in North Edmonton in 1972 by a group of parents who wanted an early learning program in their community for their young children.  They wanted to be actively involved in their children's education and they believed that learning should be fun.</p>

				<p>LCDS is a <a href={ this.props.site_urls["ParentInvolvement"] }>Parent Cooperative</a>, program and is a registered not-for-profit organization established under the Societies Act of Alberta.  We are licensed and registered with Alberta Child and Family Services, Alberta Education and the City of Edmonton.  We are proud to be members of the Association of Independent Schools & Colleges in Alberta and the Northern Alberta Preschool Teachers Association.</p>
				<p>Check out all of the fun things we do at school by visiting our Facebook page.  Like and follow us on Facebook!</p>
			</div>
			)

	}

	SubtituteTeachers(){
		return(
			<div class="info">
				<p class="fun"><a class="funLink" href={this.props.site_urls["JobOpportunities"]}> Substitute teachers and Subtitute Educational Assistants</a></p>
				<p><b>We have need for Substitute Teachers, and Substitute Educational Assistants throughout the school year</b>. If you are interested in having your name added to our Substitute Lists, please email your resume to our school office and we will contact you for an Interview.</p>
				<p>Substitute Teachers should have a valid Teaching Certificate, permanent or temporary.</p>

				<p>Substitute Teachers and Substitute Educational Assistants should have a Child Care Worker certificate from Edmonton & Region Child & Family Services (can be applied for if you do not have), a current criminal records check with vulnerable sector search and first aid.</p>
			</div>

		);
	}

	OpenHouseInfo(){
		return(
		<div class="info">

		<p class="fun"><a class="funLink" href={this.props.site_urls["OpenHouse"]}>Open House & Registration for 2019/2020</a></p>
		<p class="green">Is Your Child 3, 4 or 5 Years Old? Are They Ready to Start School?</p>
		<p>Register Your Child Today!</p>
		<p><b>LCDS Preschool & Kindergarden has an awesome program for your child.
					We offer Kindergarden, Jr. Kindergarden and Preschool for children 3 to 5 years old.
					We are now accepting new Registrations for Kindergarden, Jr. Kindergarden and Preschool for September 2019.  The AM Class is tentatively full at this time but you are welcome to put your name on our wait list; we still have lots of room in the PM Class.</b></p>
		<p><b>Registration Forms are available from our school office.</b></p>

		<p>To be eligible for Kindergarden for the 2019 - 2020 school year, your child must be 5 years old before March 1st 2020.</p>

		<p>**The entry age for Kindergarden will be changing for the 2020-2021 school year.
			To be eligible for Kindergarden for September 2020, your child must turn 5 before December 31st, 2020.</p>
		<p>Please speak with our office if you have any questions.</p>
		</div>
		)
	}

	TrialClasses(){
		return(
			<div class="info">
				<p class="fun"><a class="funLink" href={this.props.site_urls["History"]}>Free Trial Classes</a></p>
				<p class="green">Not Sure If Your Child Is Ready For School Or If They Will Like It?</p>
				<p><b>LCDS Preschool & Kindergarden offers free Trial classes for you and your child to experience preschool.</b></p>
				<p><b>Trial Classes are by appointment, they may be arranged for a class any day of the week (subject to availability)</b>; only two spots are available per class each day. Bring your child to class for 9:15 am or 1:05 pm and participate in the classroom experience until 10:30 am or 2:35 pm.</p>
				<p><b>Children must be at least 3 years old and fully toilet trained.</b></p>
				<p><b>Come play with us and enjoy the fun of learning!</b></p>
			</div>
		);
	}

	Facebook() {

		return(
		<div class="info">
			<p class="fun"><a class="funLink" href={ this.props.site_urls["Facebook"] }>LCDS on Facebook</a></p>
			<p><a href="https://www.facebook.com/lcdskids">LCDS Preschool & Kindergarden.</a></p>
			<p>See all of the fun activities, events and crafts the children have done this year!</p>
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

	OurStaff(){
		return(
			<p>here be staff</p>
		);
	}

	Sammy(){
		return(
			<div class="info">
				<p class="fun">
					Sammy Squirrel
				</p>
				<p>Sammy is a very mischievous squirrel who lives in the classroom at LCDS.  Sammy loves to interact with the children every day when he isn't foraging for food or off on an exciting adventure. 
				Sometimes things go missing in the classroom, or a mess is left behind and Sammy is usually to blame. 
				He is a very busy little squirrel.
				We enjoy Sammy and all of his crazy adventures.
				The children love to hear about what he has been up to and what he has to say.</p>
				<p id="image"><Image src={Sammy}/></p>
			</div>
		);
	}

	About(){
		return(
			<div>
		{this.AboutInfo()}
		{this.Facebook()}
		{this.OpenHouseInfo()}
		{this.TrialClasses()}
		{this.SubtituteTeachers()}
		</div>
		);
	}
	Kindergarden(){
		return(
			<div class="info">
				<p class = "fun">Kindergarden</p>
				<p><b>LCDS Preschool & Kindergarden</b> offers a small class setting for Kindergarden children with a maximum 1:7 teacher to child ratio.</p>
				<p>A <b>maximum</b> of <b>7 Kindergarden students</b> are enrolled in each daily class; combined with the preschool students to a <b>maximum of 17 students/day/class</b>.</p>

				<p><b>Kindergarden curriculum is provided and funded by Alberta Education.</b>
				The Kindergarden curriculum overlaps the goals and guidelines laid out for the Preschool students; the expectation is the Kindergarden students have already had exposure to these goals or will have by the end of the school year.
				Our goal for all children in our program is to be Kindergarden ready.</p>

				<p><b>Please see <a class = "green" href={this.props.site_urls["Facebook"]}> Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

				<p><b>Children who turn 5 before March 1st in the upcoming school year (September - May)</b> are eligible to <b>attend Kindergarden in Alberta</b>.
				Students who qualify for Kindergarden attend 5 half days /week, unless an alternate path has been approved by the teacher and parents.</p>

				<p><b>Please note:</b></p>
				<p><b><i>Alberta Education will be changing the date for Kindergarden eligibility for the 2020 - 2021 school year.</i></b>
				<b><i>Children will need to turn 5 before December 31st of 2020 in order to be eligible for Kindergarden.</i></b></p>

				<p><b>If your child is eligible for enrolment in Kindergarden</b>, and you feel he/she is <b>not ready</b> to attend, please <b>contact the office</b> with your concerns; learning alternatives may be available.</p>
				<p><b>Kindergarden</b> students <b>begin class 20 minutes earlier</b> than the preschool students to work on specific Kindergarden curriculum goals; more class time is provided for Kindergarden work throughout the half day schedule.</p>
				<p><b>The daily classroom routine is designed to follow the Kindergarden Curriculum Guidelines.</b></p>

				<p class="green"><b>More information on curriculum and education guidelines can be found on the Alberta Education Website, <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">Kindergarden Curriculum Guidelines</a></b></p>

				<img src={SammySchool}/>

			</div>
		);
	}
	JrKindergarden(){
		return(
			<div class="info">
			<p class="fun">Junior Kindergarden</p>
			<p><b>LCDS Preschool & Kindergarden</b> offers a Junior Kindergarden program for those children who are academically ready to attend Kindergarden <b>but will not be old enough to attend Kindergarden in the coming school year due to their birth date occurring after the Alberta Education cut off date for entering Kindergarden by March 1st.</b></p>

			<p>Children who are <b>4 years old and will turn 5 between March 1st and June 1st of the coming school year</b> are eligible to participate in the Junior Kindergarden program at LCDS.  Children enrolled in the Junior Kindergarden Program will attend 4 or 5 half days / week with the Kindergarden children. </p>

			<p><b>**Junior Kindergarden is not funded by the Alberta Government</b>, regular monthly fees for 4 or 5 half days / week will apply.</p>
			<p><b>Junior Kindergarden</b> children <b>begin class 20 minutes earlier</b> than the preschool children to work on specific Junior Kindergarden curriculum goals; more class time is provided for extra work (if needed) throughout the half day schedule.
				The children will be introduced to the Kindergarden curriculum goals and will begin to develop their educational skills at there own pace. With early exposure to the Kindergarden curriculum, these children will be able to master the curriculum concepts in their Kindergarden year.
				<b>The daily classroom routine is designed to introduce all of the children to the Kindergarden Curriculum Guidelines.</b></p>

			<p>Junior Kindergarden children will be introduced to the concepts provided in the Kindergarden curriculum set out by Alberta Education.  The Kindergarden curriculum overlaps the goals and guidelines laid out for the Preschool children; the expectation is the Junior Kindergarden & Kindergarden children have already had exposure to these goals or will have by the end of the school year.  Our goal for all children in our program is to be Kindergarden ready.</p>
			<p>A <b>maximum of 7 combined Kindergarden  & Junior Kindergarden children</b> are enrolled in each daily class; mixed with the preschool children to a <b>maximum of 17 children/day/class</b>. The Kindergarden and Junior Kindergarden children attend together in a small group setting with a maximum 1:7 teacher to child ratio. </p>

			<p><i>*If there is a demand for more Junior Kindergarden or Kindergarden spots, the maximum number of children may change without notice.</i></p>

			<p><b>Please see <a class = "green" href={this.props.site_urls["PreschoolDevSkills"]}>Preschool Development Skills</a> for more details on the goals and expectations for students.</b></p>

			<p><b>Please note:
			<i>Alberta Education will be changing the date for Kindergarden eligibility for the 2020 - 2021 school year.
				Children will need to turn 5 before December 31st of 2020 in order to be eligible for Kindergarden.</i></b></p>

			<p class = "green"><b>More information on curriculum and education guidelines can be found on the Alberta Education Website, <a href="https://www.learnalberta.ca/content/mychildslearning/gradeataglance/Kindergarden.pdf">Kindergarden Curriculum</a></b></p>

			<img src={SammySchool}/>
			</div>
		);
	}
	PreSchool(){
		return(
			<div class="info">
			<p class="fun">Preschool 3 & 4 Year Olds</p>
			<p><b>LCDS offers a small class setting for Preschool aged children.</b></p>
			<p>Preschool and Kindergarten students are combined in the classroom up to a <b>maximum of 17 students/day/class.</b></p>

			<p><b>The LCDS Preschool program is a structured, fun, play oriented program with a focus on family and community, language enrichment, social & personal development skills and development of fine & large motor skills.</b></p>

			<p><b>Preschool students benefit</b> from the inclusion of the Kindergarten students in the classroom by receiving <b>early exposure to Kindergarten curriculum concepts and classroom expectations.</b></p>

			<p>LCDS offers <b>one morning class (9:15 - 11:45 a.m.)</b> and <b>one afternoon class (1:05 - 3:35 p.m.) five days/week. </b></p>
			<p>*Parents may choose the class and days their child attends (subject to availability at registration).</p>
			<ul>
				<li>For 3 year old students, 2 days per week are recommended.</li>
				<li>For 4 year old students, 2-3 days per week are recommended.</li>
			</ul>

			<p>*Parents who would like their child to attend extra days may submit their request with their child's registration; extra days are subject to availability, teacher and board approval.</p>


			<a class="green" href={this.props.site_urls["IsMyChildReady"]}> Is My Child Ready to Begin Preschool or Kindergarten?</a>

			<a class="green" href={this.props.site_urls["PreschoolDevSkills"]}> Preschool Development Skills</a>

			<img src={SammySchool}/>
			</div>
		);
	}
	LearningSupport(){
		return(
			<p>Here be LearningSupport</p>
		);
	}
	FieldTrips(){
		return(
			<p>Here be Field Trip</p>
		);
	}
	DailySnacks(){
		return(
			<p>Here be Snacks</p>
		);
	}
	PreschoolDevSkills(){
		return(
			<div class="info">
				<p class ="fun">Preschool Development Skills</p>
				<p><b>The LCDS Preschool is a structured play oriented program which focuses on developing the child’s social, motor and personal development skills.</b></p>

				<p class ="subTitle">Social Skills are developed by:</p>
				<ul>
					<li>Learning responsibility for personal belongings.</li>
					<li>Cooperating and sharing with others.</li>
					<li>Learning to take turns.</li>
					<li>Learning how to listen when a friend is speaking.</li>
					<li>Practicing to be friendly and helpful.</li>
					<li>Sitting and listening quietly.</li>
					<li>Speaking in a clear, confident, quiet voice, using words to express their feelings.</li>
				</ul>
				<p class="subTitle">Motor Skills are developed by:</p>
				<ul>
					<li>Large muscle control is developed by engaging in activities which include body movement.</li>
					<li>Small muscle control is developed by engaging in activities such as cutting with scissors, gluing & pasting, painting, coloring, etc.</li>
					<li>Learning healthy habits such as hand washing, learning to cover your sneeze or cough, learning to use a tissue and dispose of it appropriately, etc.</li>
				</ul>
				<p class="subTitle">Personal Skills are developed by:</p>
				<ul>
					<li>Learning to adjust and be happy in a group setting when away from home.</li>
					<li>Learning to make new friends and not be shy.</li>
					<li>Learning to control their emotions (tempers, tears, anger, jealousy, frustration, etc.)</li>
					<li>Learning to be proud of their accomplishments.</li>
					<li>Developing language and listening skills.</li>
					<li>Awareness of the world and people around them.</li>
					<li>Being able to think for themselves and share ideas in a group.</li>
					<li>Developing curiosity, creativity and imagination.</li>
					<li>Understanding and enjoying holidays and seasons.</li>
					<li>Learning to use different mediums to create projects (paper, glue, fabric, crayons, paint, play dough or clay, etc.)</li>
					<li>Learn to follow steps to re create an example for a craft or project.</li>
				</ul>
				<p class="subTitle">Language Skills are developed by:</p>
				<ul>
					<li>Observing appropriate vocabulary and language use modeled by staff members.</li>
					<li>Interaction with staff members through out class time.</li>
					<li>Introducing Songs and Rhymes.</li>
					<li>Repetition of sounds and words during class activities.</li>
					<li>Introduction to Letters & Numbers (Letters of the week, calendar, etc.)</li>
					<li>Staff members use fun strategies (games, songs, stories, group conversation) to assist in developing language and vocabulary use.</li>
				</ul>



				<p class = "subTitle">The above goals are achieved through the following classroom activities:</p>
				<ul>
					<li>Free play time for the students to interact and practice appropriate social skills.  </li>
					<li>Staff model appropriate behavior which is acceptable in the classroom for the children to follow.</li>
					<li>Staff model appropriate dialog for the children to use and are encouraged to use their words to express themselves.</li>
					<li>A variety of materials and activities are available to the children to play with.  </li>
					<li>Activities and materials are changed regularly to provide enhancement to the topics of study introduced to the students.</li>
					<li>Daily songs and group conversations.</li>
					<li>Daily movement games and actions to music or songs.</li>
					<li>Story and Library time.</li>
					<li>Daily projects which may include painting, coloring, writing, gluing and cutting.</li>
					<li>Sharing Days.</li>
					<li>Regular opportunities to speak and share in front of the class.</li>
					<li>Class parties for celebration of holidays.</li>
					<li>Helping Hand days.</li>
					<li>Regularly planned field trips in and out of the classroom.</li>
					<li>Cooking days.</li>
					<li>Daily class routine.</li>
					<li>Daily snack time.</li>
				</ul>
			</div>
		);
	}
	IsMyChildReady(){
		return(
			<div class="info">
				<p class="fun">Is My Child Ready To Begin Preschool Or Kindergarden?</p>
				<p class="subTitle">How do I know if my child is ready for school?</p>

				<p>Entering Preschool or Kindergarten is an exciting time for you and your child; it’s an important first step in their educational journey and for many the first time they are on their own.</p>
				<p>We would like the transition to preschool or kindergarten to be as smooth as possible for you and your child.  The following are some suggestions to consider before registering your child for preschool. </p>

				<p class="subTitle">All of the following questions should be considered before registering your child for preschool:</p>
				<ul>
					<li>Is your child able to use the washroom and do simple tasks for themselves? (Such as, putting their clothes and shoes on.)</li>
					<li>Is your child able to be away from you for short periods of time?</li>
					<li>Have you enrolled your child in any play groups or left them to play at a friend or families house for a short period of time?</li>
					<li>Is your child able to sit for meals and feed themselves?</li>
					<li>Is your child able to follow simple directions?</li>
					<li>Is your child curious and willing to learn?</li>
					<li>Does your child like to play with other children?</li>
					<li>Does your child play cooperatively with other children?</li>
					<li>Is your child able to stay focused on an activity or story for at least 5-10 minutes?</li>
					<li>How well does your child get along with other adults and how well do they listen to them?</li>
					<li>How do they react when behavior is corrected?</li>
				</ul>
				<p>If you are still not sure about your child attending preschool, make some time to visit the school with your child and speak with the Teacher or the Director to discuss your concerns.</p>
			</div>
			
		);
	}

}
