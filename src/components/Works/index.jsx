import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GitImg from "./images/githubicon.png"

function Works(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p id="project-icons-container">
                    <a href={props.github}><img src={GitImg} alt="Github Repo" id="project-icon" /></a>
                </p>
            </div>
        </div>
    )
}

export default Works;
