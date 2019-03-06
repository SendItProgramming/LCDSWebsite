import React, { Component } from "react"
import AdminPublishedPics from "./footer-components/AdminPublishedPics";
import UserRelatedInfo from "./footer-components/UserRelatedInfo";

import "./../index-src/css/footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div class ="footer">
                <AdminPublishedPics/>
                <UserRelatedInfo/>
            </div>
        )
    }
}