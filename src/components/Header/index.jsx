import React, { Component } from "react";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Resume from "../../components/Resume";
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
                <Route path="/projects" component={Projects} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </div>
            </HashRouter>
        )
    };
};

export default Header;