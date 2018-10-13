import React, { Component } from "react";

export default class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
                {this.props.quote}
                {this.props.custom_buttons}
                {this.props.member_login}
                {this.props.kids_corner}
                {this.props.squirrel}
            </div>
        )
    }
}



