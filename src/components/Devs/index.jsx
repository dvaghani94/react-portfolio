import React from "react";
import Project from "../../components/Devs"

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