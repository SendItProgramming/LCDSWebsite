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
import SammyReading from "./../images/Sammy_Reading_Image.jpg"
import Muttart from "./../images/Muttart_Conservatory_Image.jpg"
import SammyEating from "./../images/Sammy_Daily_Snack_Image.jpg"
import SammyRegistration from "./../images/Sammy_Registration_Fees.jpg"
import SammyParentInvolvement from "./../images/Sammy-ParentInvolvement.jpg"
import SammyBoardRoom from "./../images/Sammy_Our_Board_Image.jpg"

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
						<Route path={this.props.site_urls["Requirements"]} exact>
							{this.RequirementsForLearningSupport()}
						</Route>
						<Route path={this.props.site_urls["FoodRestrictions"]} exact>
							{this.FoodRestrictions()}
						</Route>
						<Route path={this.props.site_urls["ProgramFees"]} exact>
							{this.ProgramFees()}
						</Route>
						<Route path={this.props.site_urls["ParentInvolvement"]} exact>
							{this.ParentInvolvement()}
						</Route>
						<Route path={this.props.site_urls["BoardDirectors"]} exact>
							{this.BoardDirectors()}
						</Route>
						<Route path={this.props.site_urls["Committee"]} exact>
							{this.Committee()}
						</Route>
						<Route path={this.props.site_urls["MiscPositions"]} exact>
							{this.MiscPositions()}
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
			<div class="info">
				<p class="fun">Learning Support</p>
				<p><b>Learning support</b> such as <b>Mild/Moderate Speech & Language Support for children age 3 1/2 on.</b></p>
				<p><b>Sept 1 or PUF funding for children 3 and older (Which includes access to specialists in Speech Language Pathology, Occupational Therapy, Physical Therapy and other services as needed)</b> may be available to registered LCDS students who qualify for funding through Alberta Education.</p>

				<p><b>The LCDS program is not a designated Special Education ECS Program</b> and is only able to offer learning support where the LCDS program has sufficient resources available to support the needs of the prospective student.</p>

				<p><b>LCDS is <u>limited</u> in the number of registration spots available to receive Learning Support.
					2 PUF spots are reserved </b>each year for children <b>who require assistance with Speech and Language Development.
					One spot</b> is held in the <b>AM class</b> and <b>one spot</b> is held in the <b>PM class</b>.</p>

				<a href={this.props.site_urls["Requirements"]} class = "green">Registration Requirements For Learning Support</a>

				<p><b>If your child is not enrolled at LCDS, and you have concerns with your child’s speech</b>, you may contact the <b>Alberta Health Services Preschool Speech and Language Intake</b> line at 780-408-8793.
					Those children attending <b>Kindergarten</b> who are not enrolled at LCDS may contact their child’s school Speech-Language Pathologist or Principal to arrange an assessment.</p>

				<p><b>Try the websites below for additional general information on communication development in children.</b></p>

				<ul>
					<li><a href="http://www.albertahealthservices.ca/">www.albertahealthservices.ca</a></li>
					<li><a href="http://www.parentlinkalberta.ca/">www.parentlinkalberta.ca</a></li>
					<li><a href="http://www.acslpa.ca/">www.acslpa.ca</a></li>
					<li><a href="http://www.caslpa.ca/">www.caslpa.ca</a></li>
					<li><a href="http://www.hanen.org/">www.hanen.org</a></li>
				</ul>
				<img src={SammyReading}/>
			</div>
		);
	}
	FieldTrips(){
		return(
			<div class="info">
				<p class ="fun">Field Trips</p>
				<p><b>Field trips are scheduled regularly to enhance the curriculum being taught in the classroom.</b></p>

				<p><u><b>All registered students</b></u> are welcome to attend a scheduled field trip, <b>even if it is scheduled on a day they do not attend class.</b>
				<b><u>Parent volunteers</u></b> are needed and are welcome to attend the scheduled field trips.</p>

				<p>**Due to insurance and licensing purposes LCDS can only take registered LCDS students on the field trips.  We ask that parents find alternate child care for siblings if they are planning to volunteer for a field trip with their registered child. </p>

				<p><b>Field trip costs are <u>included</u> in the monthly material fees.</b></p>



				<p class="subTitle">Examples of previous year’s field trips:</p>
				<p>Prairie Gardens, John Janzen Nature Center, The Royal Alberta Museum, Muttart Conservatory, Kiwanis Safety City, Telus World of Science, The Clay Guys, Puppet Tree House, Bus Safety, Rutherford House and WEM Undersea Caverns (Subject to change from year to year).</p>
				<img src={Muttart}/>
			</div>
		);
	}
	DailySnacks(){
		return(
			<div class="info">
			<p class="fun">Daily Snack</p>
			<p><b>As part of the Child Care Licencing Act, a Daily Snack is to be provided to the students every day. The scheduled Parent Helper is responsible for providing the scheduled Healthy Snack and Beverage (ie. Fruit & Crackers, Veggies & Crackers, Sandwiches, Cheese & Crackers and Parents Choice Day) for 17 children. </b></p>

			<p>LCDS chooses to serve the daily snack in a group setting.</p>

			<p class="subTitle">Serving snack in a group setting:</p>
			<ul>
				<li><b>Ensures all</b> of the children have the <b>same choice of snack</b> on a daily basis.</li>
				<li><b>Allows</b> the children to <b>experience new foods</b> they may not try at home and parents or staff members are able to monitor children’s allergies or food reactions on any given day.</li>
				<li>Eliminates students arriving at school with too much food, food which does not adhere to the allergy restrictions, comparison and competition among peers and between parents to have “The Best Snack”.</li>
			</ul>
			<p class="subTitle">Snack shall have one serving each from 2 or more basic food groups consistent with Canada’s Food Guide.</p>
			<ul>
				<li>For Example – Monday may be Fruit and Cracker day, the parent might bring fruit such as strawberries and oranges with cinnamon pita chips, the beverage might be white or chocolate milk. Tuesday may be cheese and cracker day, the parent might bring cheddar or marble cheese and Ritz crackers, the beverage might be apple juice.  "Healthy Water" is always offered as an alternate choice to whatever the beverage might be.</li>
			</ul>

			<p><b>Each month the snack schedule will rotate to the next day of the week</b> to ensure each family gets a chance to bring something different for snack; for example, Mondays in February might be Cheese & Crackers, the next month Cheese & Crackers will be rotated to Tuesdays.</p>

			<a class="green" href={this.props.site_urls["FoodRestrictions"]}>Allergies, Personal and Religious Food Restrictions</a>

			<img src = {SammyEating}/>

			</div>

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
	RequirementsForLearningSupport(){
		return(
			<div class="info">
				<p class="fun">Registration Requirements For Learning Support</p>
				<p><b>New registrations should inquire whether there will be openings for the upcoming school year before submitting their application for registration.</b>
					You will need to fill out <u><b>all</b></u> of the information on the registration form and submit any assessments or documents which will support the application to Alberta Education for funding support.</p>

				<p><b>All applications will be reviewed by the LCDS Board and Learning Team, in order to determine whether or not the LCDS program will have sufficient resources available to support the needs of the prospective student.
				LCDS policy will apply in the decision making process.</b>
				An LCDS representative will notify all applicants as to the status of their application.</p>


				<p><b><i>*Please note - sufficient resources may include but are not limited to available funding, qualified and available staffing, facility requirements, program limitations, student numbers, student body make-up,etc.  All areas are considered in regards to the needs of each prospective student.</i></b></p>
				<ul>
					<li>Due to the high number of inquiries for Learning Support, <b>all reviewed applications will be subject to random draw; there are no guarantees for placement.</b></li>
					<li>Choice of attendance days may be limited to the availability at the time of registration and the availability of support staff and specialists on certain days.</li>
				</ul>

				<p><b>If you have any further questions about Learning Support at LCDS, please email  <a href = "lcds@telus.net">lcds@telus.net</a> or contact us during office hours.</b></p>
				<img src= {SammyReading}/>
			</div>
		);
	}

	FoodRestrictions(){
		return(
			<div class = "info">
			<p class="fun">Allergies, Personal, & Religious Food Restrictions</p>
			<ul>
				<li><b>LCDS is required by Alberta Government licensing to ensure all children with food allergies, which can place them at serious health risk, are kept safe to the best of our abilities, while attending our program.</b></li>
				<li><b>LCDS strives to be a NUT-FREE classroom</b>, this <b>includes products</b> which are labelled with the phrase <b>“may contain nuts”</b>.  A list of approved snacks, brands and nut free bakeries are listed in the LCDS Parent Handbook.</li>
				<li><b>LCDS and the Board of Executives, respect the personal choices, ethnic and religious backgrounds of its members.  As a result, food preparation procedures may include steps to prevent cross contamination of snacks which contain specific ingredients.  This may change from year to year depending on student needs.</b></li>
				<li>Examples of specific ingredients which may require additional food preparation steps may include eggs, dairy products, pork or beef.  If you have a question about the requirements for the preparation of food while on parent helper duty, please ask the staff before purchasing, bringing and preparing the snack.</li>
			</ul>
			<img src={SammyEating}/>
			</div>
		);
	}

	ProgramFees(){
		return(
			<div class="info">
				<p class="fun">Program Fees</p>
				<p><i><b>LCDS is a not-for-profit, parent cooperative preschool and independent kindergarten program.</b>
				We  pay rent for our classroom and office space to Gateway Alliance Church.
				As we are an independent program, we have fixed operational costs in which we rely upon parent involvement and participation in the program to assist in keeping these costs attainable.
				Parents provide the necessary support for the success of our quality education program.  Without the support of our members through working bingo, casino, classroom cleaning and other volunteer commitments, the society would not be able to support many of the opportunities provided to the children and their families.</i></p>
				<p class="subTitle">The fees below apply to the 2019 - 2020 school year.</p>

				<p><a href="" class="redLink">Preschool Fees</a></p>
				<p><a href="" class="blueLink">Junior Kindergarten Fees</a></p>
				<p><a href="" class="redLink">Kindergarten Fees</a></p>
				<p><a href="" class="blueLink">Registration Commitments</a></p>
				<p><a href="" class="greenLink">Alberta Parent Stay-At-Home Subsidy Program</a></p>

				<blockquote>
					"We just wanted to say thank you so much for everything this year!! R. has come so far and we are so proud and thankful for all you have done for R. and our family. The things he has learned are incredible but mostly the tools and feedback you have provided to us will go a long way. The attention and care that all of you have shown towards R. throughout this year is amazing and surpassed every expectation we had for R's first school experience. Please pass on our thank you to all of the staff members and have a great summer!!"
				</blockquote>
				<p><b>-Melanie G. Edmonton</b></p>
				<img src={SammyRegistration}/>
			</div>
		);
	}

	ParentInvolvement(){

		return(
			<div class="info">
				<p class="fun">Parent Involvement</p>
				<p class="subTitle">HOW ARE FAMILIES INVOLVED AT LCDS?</p>

				<p>We know community, parents and family play an essential role in childhood development. And we know parents love watching their children learn, grow and have fun- almost as much as kids love showing their parents their new skills.
				As a <b>parent run co-operative</b>, LCDS parents and families are a big part of the kids’ success. Parents and guardians have the opportunity to be hands-on in their little one’s first education experience, supporting their learning, experiencing their excitement on a field trip, and watching them make friends with their peers. 
				We know parent support also helps to show children that the adults in their life are interested in what they are doing and that helping others is important. Plus, we can elevate the quality of education while keeping costs low because of additional help from volunteers. The kids win in a big way, thanks to you! </p>

				<p class="subTitle">WHAT ARE THE ANNUAL REQUIREMENTS?</p>

				<p>We are parents too and we know life can get busy. No problem! LCDS has many ways to help our families, from opting out of fundraising with a cash donation, swapping helper days, or hiring Bingo workers at low cost, we want to help you, so we can all help the kids. </p>

				<p class="subtitle">Here is a snapshot of the annual requirements.</p>


				<ul>
					<li><b>FUNDRAISING –</b><br />
					The LCDS board of Directors understands our members are busy and have replaced mandatory fundraising with a one time Family Fundraising fee per school year as opposed to running numerous fundraising events each year.  The Board of Directors will calculate the yearly fundraising fee each year depending on enrollment.  Members may still choose to fund-raise.
					</li>

					<li>
						<b>PARENT HELPER –</b><br />
						Many parents love this most about their LCDS experience. Each child gets to have their adult come to approximately one class per month to help as needed and bring the snack. Many volunteers are also recruited for each field trip, and our list of helpers tends to fill up fast!
					</li>

					<li>
						<b>CLASSROOM CLEANING –</b><br />
						Volunteering one adult for approximately two hours on a scheduled Monday evening, once through the school year helps us keep the classroom clean and safe for our kids. Recruit any adult in your life willing to roll up their sleeves! Classroom Cleanings are scheduled every second month on the first Monday evening of the month.
					</li>

					<li>
						<b>BINGOS AND CASINOS –</b><br />
						An easy way to raise much needed funds, all we do is provide volunteers. All you do is show up, get training, and have fun. No experience required! Each family needs to complete two bingo shifts and one casino (in a casino year). Bingos are scheduled for Saturday and Sunday afternoons. The number of Bingo events will be determined by the number of families enrolled in the program.
					</li>
				</ul>
				<p>Click Here for <a href="" class="greenLink">Registration Commitments</a></p>

				<p class="fun">WHO RUNS LCDS?</p>
				<p>Who runs LCDS? Well, you do!  Parents are automatically members of the society when you register, and those who volunteer for the Board of Directors or sign-up for a committee position influence the experience for their kids. While we leave the structured education to the experts, volunteers provide important input into school policies, funding, social functions, and more. Please consider getting involved – you and your kids will love it.</p>


				<p class ="subTitle">BOARD OF DIRECTORS</p>
				<p>Meeting once per month, the Board is the legal authority for the Society and everything done by LCDS is done in the Board’s name. While considerable authority is appropriately delegated to the Executive Director, Business Manager and Teaching Staff, the source of that authority remains with the Board. This group of parents determines direction for changes in policy, fees, fundraising requirements, and social activities. If you want to make a big impact, consider volunteering for one of the six positions, or feel free to bring your suggestions to any board member or at the board meetings. Great to add to your personal resume.</p>

				<p class = "subTitle">COMMITTEE POSITIONS</p>
				<p>If the board isn’t the right fit, consider volunteering for one or more committee positions. Assisting with everything from classroom parties to yearbooks to laundry and bottle collection, the volunteers on the committees are essential to giving our kids the fantastic experience they are hoping for. Volunteering is easy and many families enjoy the small little extra they get to do for the kids. </p>

				<p class="subTitle">ALL FAMILIES</p>
				<p>Every family that has a child enrolled in LCDS is automatically a member of our exclusive non-profit society. This gives you voting rights for the operation of the program. Families are asked to please send a representative to each of the three required Annual General Meetings which take place in September, January and May. These meetings are your chance to be heard, be informed, and meet fellow parents.</p>

				<p>The following positions are important to the operations of LCDS.  Without volunteers for these positions, LCDS may be forced to offer reduced activities and events for the program.Elections are held at the Annual General Meeting, the Second Tuesday in May.</p>
				<p>Please consider volunteering for any of the positions below.  Please indicate on your registration form the positions you might be interested in assisting with.</p>

				<p><a href={this.props.site_urls["BoardDirectors"]} class="green">Board of Directors Positions</a></p>
				<p><a href={this.props.site_urls["Committee"]} class="green">Committee Positions</a></p>
				<p><a href={this.props.site_urls["MiscPositions"]} class ="green">Miscellaneous Positions</a></p>

				<img src={SammyParentInvolvement}/>
			</div>

		);
	}

	BoardDirectors(){
		return(
			<div class="info">
			<p class ="fun"> Board of Directors Positions</p>
			<p><b>* All Board members attend the 3 General Meetings and all Monthly Board Meetings.</b></p>
			<ul>
				<li>
				<b class="subTitle">President</b><br />

				The President shall call and preside over all Emergency, General and Board meetings.  They must provide active and dynamic leadership, initiate policy, and keep him/her self fully informed of the operations of the LCDS Assists the Executive Director and Business Manager, staff members, other Board Members and Committee members as needed. Is a Signing officer.
				</li>
				<li>
				<b class="subTitle">Vice-President</b> <br />
				Assists the Executive Director with the registration of children in the LCDS program. Advertises for open house/registration events and answers all queries about registration from mid June until mid August. Assists the President, Staff members, other Board members and Committee members as needed.  Is a Signing officer.
				</li>
				<li>
				<b class="subTitle">Treasurer</b> <br />
				Assists the Business Manager when needed for filing financial and educational documents.  Assists Fundraising Chair with deposits when needed from events such as the Silent Auction, Garage Sale and Walk-a-thon. Assists other Board members, Staff members and other committee members as needed. Is a signing officer.
				</li>
				<li>
					<b class="subTitle">Secretary</b> <br />
				Records minutes of all meetings, distributes minutes to all board members, members and staff members. Completes any general correspondence with membership and other organizations when needed, maintains attendance record for General Meetings.  Assists the Executive Director, other Board members, staff members and other Committee members as needed.
				</li>
				<li><b class="subTitle">Fundraising Director</b> <br />
				Initiates and organizes all funding activities and coordinates with the silent auction committee members.  Organizes volunteers when needed for fundraising events.  Provides tax receipts when needed for donations to the society. Prepares deposits from fundraising events.  Assists other Board members, Staff members and other committee members when needed.

				</li>
				<li><b class="subTitle">Liaison</b> <br />
				Coordinates the Board Newsletter Report each month. Books venues for special events.  Assists the Executive Director and Business Manager, other Board members, Staff members and other Committee members as needed Prepares special event and program feedback surveys for the membership.
				</li>
			</ul>
			<img src={SammyBoardRoom}/>
			</div>
		);
	}

	Committee(){
		return(
			<div class="info">
				<p class ="fun"> Committe Member Positions</p>
				<b>**Committees are not required to attend monthly Board Meetings</b>
				<ul>
					<li>
					<p class="subTitle">Bingo Coordinator</p>

					Communicates with the Executive Director to ensure each Bingo date has the adequate number of volunteers scheduled and submits a list of workers for the current newsletter each month.  Communicates with the scheduled bingo workers 1 week prior to the scheduled bingo date to remind them of their commitment.  Attends the first part of each Bingo, takes attendance, assigns positions and ensures everyone knows what they are doing.
					</li>
					<li>
					<p class="subTitle">Casino Coordinator</p>

					Coordinates the casino volunteers for volunteer shifts. Consults with the Executive Director, Business Manager and the President throughout the assignment process. Ensures all positions are filled and all volunteer background check forms are submitted. Casinos are held every 2 years.
					</li>
					<li>
					<p class="subTitle">Silent Auction Committee</p>

					Coordinators are needed for various activities, such as Donation Receiver, Door Ticket sales and tracking, and assistance with other items related to the silent auction to be determined by the Fundraising Director.
					</li>
					<li>
					<p class="subTitle">Newsletter Coordinator</p>

					Responsible for collecting reports from Board and Committee Members. Compiles the monthly newsletter. Coordinates production of the monthly newsletter with the assistance of the Executive Director.
					</li>
					<li>
					<p class="subTitle">Cleaning Coordinator </p>

					Organizes and coordinates the monthly cleanings with the assistance of the Executive Director. Responsible for reminding members of their cleaning commitment.  Arranges to attend the first part of the cleaning to take attendance, and inform the members of the jobs which are required to be completed from the cleaning binder.  You may then leave and return to lockup after everyone is finished.

					</li>
					<li>
					<p class="subTitle">Social Committee</p>

					Plans the seasonal classroom and membership parties in collaboration with the teacher or members of the Board. Coordinates with the Social Committee members and delegates responsibilities needed to prepare for the parties. Members from the AM and PM classes are needed to assist in preparations for the class parties and membership parties.
					</li>
				</ul>
			</div>
		);
	}
	MiscPositions(){
		return(
			<p class ="fun"> Miscellanenous Positions</p>
		);
	}

}
