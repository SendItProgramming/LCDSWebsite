import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

export default class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
                <Switch>
                    <Route path={this.props.site_urls["Home"]} exact>
                        {this.RenderHome()}
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
                {this.props.member_login}
                {this.props.kids_corner}
                {this.props.squirrel}
            </div>
        );
    }

    RenderEvents() {
        return(
            <div>
                <Switch>
                    <Route path={this.props.site_urls["JobOpportunities"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                        </div>
                    </Route>
                    
                    <Route path={this.props.site_urls["Fundraising"]} exact>
                        <div>
                            {this.props.quote}
                            {this.props.about_us}
                            {this.props.pic}
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
}



