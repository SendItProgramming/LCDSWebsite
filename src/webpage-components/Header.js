import React, { Component } from "react"
import TopRight from "./header-components/TopRight";
import {Image} from "react-bootstrap"

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                {this.HeaderLogo()}
                <TopRight site_urls={this.props.site_urls}/>
            </div>
        )
    }

    HeaderLogo() {
        return (
            <div id="logo">
				<Image src="http://placekitten.com/200/200" alt="Home Page" thumbnail />
            </div>
        )
    }

}