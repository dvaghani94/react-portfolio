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

// import React, { Component } from "react";

// class Header extends Component {
//     render() {
//         return (
//             <header id="home">
//                 <nav id="nav-wrap">
//                     <a href="#nav-wrap" className="mobile-btn" title="show">Show navigation</a>
//                     <a href="#home" className="mobile-btn" title="hide">Hide navigation</a>
                
//                     <ul className="nav" id="nav">
//                         <li className="current">
//                             <a href="#home" className="smoothscroll">Home</a>
//                         </li>
//                         <li>
//                             <a href="#aboutme" className="smoothscroll">About Me</a>
//                         </li>
//                         <li>
//                             <a href="#resume" className="smoothscroll">Resume</a>
//                         </li>
//                         <li>
//                             <a href="#projects" className="smoothscroll">Projects</a>
//                         </li>
//                         <li>
//                             <a href="#contact" className="smoothscroll">Contact</a>
//                         </li>
//                     </ul>
//                 </nav>

//                 <div className="row banner">
//                     <div className="banner-text">
//                         <h1 className="responsive-headline">I'm Dhruvi.</h1>
//                         <h3>I'm a NewJersian based Lab Manager and a coding bootcamp student.</h3>
//                     </div>
//                 </div>

//                 <p className="scrolldown">
//                     <a href="#aboutme" className="smoothscroll"><i className="icon-down-circle"></i></a>
//                 </p>
//             </header>
//         );
//     }
// };

// export default Header;