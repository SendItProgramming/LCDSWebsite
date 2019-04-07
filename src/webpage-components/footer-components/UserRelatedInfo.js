import React, { Component } from "react"
import ModuleTable from "./user-components/ModuleTable";


export default class UserRelatedInfo extends Component {
    render() {
        return (
            <div class="relatedInfo">
                <div>
                <p class= "little-fun">Latest News</p>
                    <p>
                        <a href= "#/events/open-house-registration">Open House & Registration 2020/2021</a><br />
                        <a href="#/events/open-house-registration">Registration for 2019/2020 School Year</a><br />
                        <a href="#/events/trial-classes">Free Trial Classes </a><br />
                        <a href= "https://www.facebook.com/lcdskids/">LCDS on Facebook </a><br />
                    </p>
                </div>
                <div>
                <p class= "little-fun">Contact Info</p>
                    <p class="contact">
                        13931-140th Street<br />
                        Edmonton, Alberta<br />
                        T6V 1J7<br />
                        Phone: 780-473-7216<br />
                        Fax: 780-473-7021<br />
                        Email: <a href = "lcds@telus.net">lcds@telus.net</a>
                    </p>
                </div>
            </div>
        )
    }
}