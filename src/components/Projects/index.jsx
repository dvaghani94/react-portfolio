import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../../projects.json";

function Wrapper(props) {
    return (
    <div className="wrapper">{props.children}</div>
    )
}

function Project(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p id="project-icons-container">
                    <a href={props.github}><img src="https://img.icons8.com/fluent/48/000000/github.png" id="project-icon" alt="Github" /></a>
                </p>
            </div>
        </div>
    );
}

function Projects () {
    return (
        <section>
            <div className="project">
                <h3 className="title">Dev</h3>
                <br></br>
            </div>
            <Wrapper id="card-data">
                {projects.map((project) => (
                    <Project key={project.id} name={project.name} image={project.image} deploy={project.deploy} github={project.github} />
                    ))}
            </Wrapper>
        </section>
    );
};

export default Projects;