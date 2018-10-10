import React, { Component } from "react"
import HeaderLogo from "./header-components/HeaderLogo";
import TopRight from "./header-components/TopRight";


export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <HeaderLogo/>
                <TopRight site_urls={this.props.site_urls}/>
            </div>
        )
    }
}