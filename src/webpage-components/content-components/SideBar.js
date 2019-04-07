import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./../../index-src/css/sidebar.css"
/*
    Redundant collections of method calls to be replaced in the
    future. Need to see how many dummy components are absorbed into
    one component.
*/
export default class SideBar extends Component {

<<<<<<< HEAD

    componentDidMount(){
        function login() {
            const url = "http://localhost:8888/auth/check";
            fetch(url, {
            method : "POST",
            body: new FormData(document.getElementById("inputform")),
            }).then(
                response => response.text()
            ).then(
                    html => console.log(html)
            );
        }
        document.getElementById("loginButton").addEventListener("click", login);
    }
=======
    constructor(props) {
        super(props)
    }
    
>>>>>>> text-editor-backend
    render() {
        return (
            <div id="sidebar">
                <Switch>
                    <Route path={this.props.site_urls["Home"]} exact>
                        {this.RenderHome()}
                    </Route>

                    <Route path={this.props.site_urls["AboutUs"]}>
                        {this.RenderAboutUs()}
                    </Route>

                    <Route path={this.props.site_urls["Programs"]}>
                        {this.RenderPrograms()}
                    </Route>

                    <Route path={this.props.site_urls["Registration"]}>
                        {this.RenderRegistration()}
                    </Route>

                    <Route path={this.props.site_urls["Resources"]}>
                        {this.RenderResources()}
                    </Route>

                    <Route path={this.props.site_urls["Events"]}>
                        {this.RenderEvents()}
                    </Route>

                    <Route path={this.props.site_urls["News"]}>
                        {this.RenderNews()}
                    </Route>

                    <Route path={this.props.site_urls["Contact"]}>
                        {this.RenderContact()}
                    </Route>

                    <Route path={this.props.site_urls["Blogs"]}>
                        {this.RenderHome()}
                    </Route>

					<Route path={this.props.site_urls["Admin"]}>
                        {this.RenderAdmin()}
					</Route>

                    <Redirect to={this.props.site_urls["Home"]}/>
                </Switch>
            </div>
        )
    }

    RenderHome() {
        return(
            <div>
                {this.props.quote}
                {this.props.custom_buttons}
                <div>{this.props.member_login}</div>
                {this.props.kids_corner}
                {this.props.squirrel}
            </div>
        );
    }

    RenderAboutUs() {
        return(
            <div>
                <Switch>
                    <Route path={this.props.site_urls["AboutUs"]} >
                        <div>
                            {this.props.quote}
                            {this.props.co_sponsors}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["OurStaff"]} exact>
                        <div>
                            {this.props.about_us}
                            {this.props.upcoming_events}
                            {this.props.kids_corner}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["OurBoard"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["Squirrel"]} exact>
                        <div>
                            {this.props.kids_corner}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["Testimonials"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["History"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["Founder"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.member_login}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }

    RenderPrograms() {
        return(
            <div>
                <Switch>
                    <Route path={this.props.site_urls["Programs"]} exact>
                        <div>
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["Kindergarden"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["JrKindergarden"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["PreSchool"]} exact>
                        <div>
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["LearningSupport"]} exact>
                        <div>

                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["FieldTrips"]} exact>
                        <div>
                            {this.props.about_us}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["DailySnacks"]} exact>
                        <div>

                            {this.props.about_us}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }

    RenderRegistration() {
        return(
            <div>
                <Switch>
                    <Route path={this.props.site_urls["Registration"]} >
                        <div>
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>
                    <Route path={this.props.site_urls["OpenHouse"]} exact>
                        <div>
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                        </div>
                    </Route>
                    <Route path={this.props.site_urls["ProgramFees"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.programs}
                            {this.props.registration}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["ParentInvolvement"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.member_login}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }

    RenderResources() {
        return(
            <div>
                {this.props.about_us}
                {this.props.pic}
                {this.props.member_login}
            </div>
        );
    }

    RenderEvents() {
        return(
            <div>
                <Switch>
                    <Route path={this.props.site_urls["Events"]} >
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.pic}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["JobOpportunities"]} >
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.member_login}
                        </div>
                    </Route>

                    <Route path={this.props.site_urls["Fundraising"]} >
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.pic}
                            {this.props.member_login}
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }

    RenderNews() {
        return(
            <div>
                {this.props.upcoming_events}
                {this.props.pic}
                {this.props.member_login}
            </div>
        );
    }

    RenderContact() {
        return(
            <div>
                {this.props.pic}
                {this.props.member_login}
            </div>
        );
    }


    GetQuote(){
        return(
            <blockquote>
                "{this.props.quote.Text}"
            <br />
                -{this.props.quote.Author}
            </blockquote>

        );
    }
    
    RenderAdmin() {
        return(
            <div className="a">
				{this.props.member_login}
            </div>
        );
    }
}

