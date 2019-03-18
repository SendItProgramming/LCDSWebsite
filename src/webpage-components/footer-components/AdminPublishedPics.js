import React, { Component } from "react"
import {Image,} from "react-bootstrap"
import sammy from "./../../images/Sammy1.jpg"

export default class AdminPublishedPics extends Component {
    render() {
        return (
            <div>
                <Image src={sammy} alt=""/>
            </div>
        )
    }
}