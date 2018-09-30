import React, { Component } from "react";

export default class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
				{this.props.children}
            </div>
        )
    }
}



