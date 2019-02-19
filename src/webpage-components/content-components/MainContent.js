import React, { Component } from "react"

export default class MainContent extends Component {
    render() {
        return (
            <div id="content">
                {this.props.pictures}
                <p>HTHTHT</p>
            </div>
        )
    }
}