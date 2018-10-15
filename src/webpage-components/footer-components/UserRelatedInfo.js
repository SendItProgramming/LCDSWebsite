import React, { Component } from "react"
import ModuleTable from "./user-components/ModuleTable";


export default class UserRelatedInfo extends Component {
    render() {
        return (
            <div>
                <h2>This is the user related info section</h2>
                <ModuleTable/>
                <ModuleTable/>
                <ModuleTable/>
            </div>
        )
    }
}