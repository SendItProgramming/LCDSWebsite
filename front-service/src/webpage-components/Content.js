import React, { Component } from "react"
import SideBar from "./content-components/SideBar";
import MainRight from "./content-components/MainRight";


export default class Content extends Component {
    render() {
        return (
            <div>
                <h1>This is the content</h1>
                <SideBar/>
                <MainRight/>
            </div>
        )
    }
}