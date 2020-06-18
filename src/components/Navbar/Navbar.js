/**
 * components/Home/Home.js
 */

/* imports modules  */
import React, { } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

/* component */
function Navbar(props) {

    /* return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-warning" id="home">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <ul className="navbar-nav m-auto">
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
                        <a target="_blank" href="https://github.com/TCallabat">
                            <img src="./bxl-github.svg" alt="github" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/thibaut-callabat/">
                            <img src="./bxl-linkedin.svg" alt="linkedin" />
                        </a>
                    </li>

                </ul>
            </nav>

        </Container>
    );
}

/* export */
export default Navbar;
