import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Works(props) {
    return (
        <div className="card">
            <div className="img-conatiner">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p id="project-icons-container">
                    < a href={props.github}><img src="" alt="Github Repo" id="project-ico" /></a>
                </p>
            </div>
        </div>
    )
}

export default Works;
