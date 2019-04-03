import React, { Component } from "react"
import ModuleTable from "./user-components/ModuleTable";


export default class UserRelatedInfo extends Component {
    render() {
        return (
            <div class="relatedInfo">
                <div class ="news">
                    <ul>
                        <li>Open House & Registration 2019/2020</li>
                        <li>Registration for 2018/2019 School Year</li>
                        <li>Free Trial Classes</li>
                        <li>LCDS on Facebook</li>
                        <li>Parent Resource Library</li>
                    </ul>
                </div>
                <div>
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