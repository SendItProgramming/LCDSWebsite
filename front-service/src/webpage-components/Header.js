import React, { Component } from "react"
import HeaderLogo from "./header-components/HeaderLogo";
import TopRight from "./header-components/TopRight";


export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>This is the header</h1>
                <HeaderLogo/>
                <TopRight/>
            </div>
        )
    }
}