/**
 * components/Home/Home.js
 */

/* imports modules  */
import React, { } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

/* component */
function Header(props) {

    /* return */
    return (
        <Container fluid className="m-0 p-0" id="home">
            <Navbar collapseOnSelect  expand="lg" className="m-0 p-0 w-100">
                <Navbar.Brand href="https://tcallabat.github.io/portfolio/" className="name ml-auto">Thibaut Callabat</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <ul className="navbar-nav">
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container >
    );
}

/* export */
export default Header;
