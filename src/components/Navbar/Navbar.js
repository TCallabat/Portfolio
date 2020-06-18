/**
 * components/Home/Home.js
 */

/* imports modules  */
import React, { } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

/* component */
function Navbar(props) {

    /* return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-warning" id="home">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="navbar-brand text-dark">Thibaut Callabat</li>
                        <li>
                            <Link to="/">accueil</Link>
                        </li>
                        <li>
                            <Link to="about">a propos</Link>
                        </li>
                        <li>
                            <Link to="skills">compétences</Link>
                        </li>
                        <li>
                            <Link to="projects">projets</Link>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/TCallabat">
                                <img src="./bxl-github.svg" alt="github" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thibaut-callabat/">
                                <img src="./bxl-linkedin.svg" alt="linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container >
    );
}

/* export */
export default Navbar;
