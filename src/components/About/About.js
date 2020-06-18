/**
 * components/Home/Home.js
 */

/* imports modules  */
import React, { } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./style.scss";

/* component */
function About(props) {

    /* return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-light">

            {/* Title */}
            <Row className="m-0 p-4 bg-dark" style={{ width: "100%", height: "7rem", background: "url(./work-731198_1920.jpg) no-repeat center", backgroundSize: "cover" }}>
                <Col md={12}>
                    <h1 className="text-white text-center text-uppercase font-weight-bold">a propos</h1>
                </Col>
            </Row>

            {/* Container */}
            <Container className="p-0 py-4">

                {/* Detail */}
                <Row className="m-0 my-4 p-0">
                    <Col md={9} className="py-3">
                        <p className="pr-5 text-justify">Passionné d'informatique depuis le plus jeune âge, j'ai eu l'opportunité de réaliser une formation diplômante en Mars 2020.</p>
                        <p className="pr-5 text-justify">En effet, je me suis inscrit dans un bootcamp dédié aux métiers du développement web (stack MERN) et mobile (React Native) afin de me réorienter vers le métier de "Développeur FullStack JavaScript".</p>
                        {/*<p className="pr-5 text-justify">Aujourd'hui, je suis à la recherche de nouvelles opportunités et de challenges !</p>*/}
                    </Col>
                    <Col md={3} className="align-self-center">
                        <Image fluid src="./MERN.jpeg" alt="mern stack logo" />
                    </Col>
                </Row>

                {/* Images others */}
                <Row className="m-0 px-0 py-4">
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_09-image-2" src="./projects/project_01-4.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_09-image-5" src="./projects/project_09-3.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_10-image-3" src="./projects/project_08-1.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_10-image-4" src="./projects/project_10-2.jpg" />
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

/* export */
export default About;
