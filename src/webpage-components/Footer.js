import React, { Component } from "react"
import AdminPublishedPics from "./footer-components/AdminPublishedPics";
import UserRelatedInfo from "./footer-components/UserRelatedInfo";


export default class Footer extends Component {
    render() {
        return (
            <div>
                <h1>This is the footer</h1>
                <AdminPublishedPics/>
                <UserRelatedInfo/>
            </div>
        )
    }
}