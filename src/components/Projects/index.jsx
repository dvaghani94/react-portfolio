import React from "react";
import Works from "../../components/Works/index"
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../../projects.json";

function Wrapper(props) {
    return (
    <div className="wrapper">{props.children}</div>
    )
}

function Projects () {
    return (
        <section>
            <div className="project">
                <h3 className="title">Projects</h3>
                <br></br>
            </div>
            <Wrapper id="card-data">
                {projects.map((project) => (
                    <Works key={project.id} name={project.name} image={project.image} deploy={project.deploy} github={project.github} />
                    ))}
            </Wrapper>

        </section>
    );
};

export default Projects;

