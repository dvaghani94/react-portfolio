import React, { Component } from "react";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Projects from "../Projects";
import Nav from "../Nav";
import { Route, Redirect, HashRouter } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className="row Header" id="header">
                    <Nav />
                </div>


            <div className="content">
                <Route exact path="/" render={() => (<Redirect to="/projects" />)} />
                <Route path="/projects" component={Project} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </div>
            </HashRouter>
        )
    }
}