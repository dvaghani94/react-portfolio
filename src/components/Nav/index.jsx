import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
    return (
        <div className="row nav" id="nav">
            <NavLink to="/aboutme">About Me</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
};

export default Nav;
