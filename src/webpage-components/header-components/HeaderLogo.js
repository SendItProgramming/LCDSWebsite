import React, { Component } from "react"
import {Image} from "react-bootstrap"

export default class HeaderLogo extends Component {
    render() {
        return (
            <div>
				<Image src="http://placekitten.com/200/200" alt="Home Page" thumbnail />
            </div>
        )
    }
}