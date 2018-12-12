import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/Navbar"

// import "./Nutshell.css"
// import "bootstrap/dist/css/bootstrap.min.css"


export default class Nutshell extends Component {
    render() {
        return (
            <React.Fragment>
              <NavBar />
              <ApplicationViews />
            </React.Fragment>
        )
    }
}