// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import projects from "../../projects.json";

// function Wrapper(props) {
//     return (
//     <div className="wrapper">{props.children}</div>
//     )
// }

// function Project(props) {
//     return (
//         <div className="card">
//             <div className="img-container">
//                 <img src={props.image} alt={props.name} />
//             </div>
//             <div className="content">
//                 <p className="project-title" id="card-title">{props.name}</p>
//                 <p id="project-icons-container">
//                     <a href={props.github}><img src="https://img.icons8.com/fluent/48/000000/github.png" id="project-icon" alt="Github" /></a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// function Projects () {
//     return (
//         <section>
//             <div className="project">
//                 <h3 className="title">Dev</h3>
//                 <br></br>
//             </div>
//             <Wrapper id="card-data">
//                 {projects.map((project) => (
//                     <Project key={project.id} name={project.name} image={project.image} deploy={project.deploy} github={project.github} />
//                     ))}
//             </Wrapper>
//         </section>
//     );
// };

// export default Projects;

import React, { Component } from "react";

class Projects extends Component {
    render() {
        if (this.props.data) {
            const project = this.props.data.project.map(function(project) {
                const projectimg = "images/project/"+project.image;
                return <div key={project.title} className="columns project-item">
                    <div className="item-wrap">
                        <a href={project.url} title={project.title}>
                            <img src={projectImg} />
                            <div className="overlay">
                                <div className="project-item-meta">
                                    <h5>{project.title}</h5>
                                    <p>{project.category}</p>
                                </div>
                            </div>
                            <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
            })
        }

        return (
            <section id="project">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>My Projects</h1>
                        <div className="bgrid-quarters s-bgrid-thirds cf" id="project-wrapper">{project}</div>  
                    </div>
                </div>
            </section>
        );
    }
};

export default Projects;