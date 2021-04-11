import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Wrapper(props) {
    return 
    <div className="wrapper">{props.children}</div>;
}

function Projects () {
    return (
        <section>
            <div className="project">
                <h3 className="title">Dev</h3>
                <br></br>
            </div>
            <Wrapper id="card-data">
                {Projects.map((project) => (
                    <Project key={project.id} name={project.name} image={project.image} deploy={project.deploy} github={project.github} topics={project.topics} />
                    ))}
            </Wrapper>
        </section>
    );
};

export default Projects;