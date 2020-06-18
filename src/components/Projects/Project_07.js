/**
 * components/Projects/Project_07.js
 */

/* Import modules  */
import React, { } from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

/* Import others */
import "./style.scss";

/* Component */
function Project_07(props) {

    /* Return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-light">

                {/* Title */}
                <Row className="m-0 p-4 bg-dark" style={{ width: "100%", height: "7rem", background: "url(./work-731198_1920.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col md={12}>
                        <h1 className="text-white text-center text-uppercase font-weight-bold">Application Météo</h1>
                    </Col>
                </Row>

            {/* Container */}
            <Container className="p-0 pt-4 projectContainer">

                {/* Detail */}
                <Row className="m-0 px-4 pt-4 pb-2 projectDetail">
                    <Col md={12}>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Détail du projet :</u></Col>
                                    <Col md={9} className="text-justify">Réalisation d'une application météo (jour et prévision) connectée à l'api openweather.</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Type de projet :</u></Col>
                                    <Col md={9}>Application Mobile</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Date de réalisation :</u></Col>
                                    <Col md={9}>Avril 2020</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Choix technologiques :</u></Col>
                                    <Col md={9}>ReactNative</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Lien :</u></Col>
                                    <Col md={9}>
                                        <a className="text-decoration-none text-dark" href="https://github.com/TCallabat/Weather-App-React-Native" target="_blank">Github Weather-App-React-Native</a>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                {/* Image primary */}
                <Row className="m-0 px-4 py-2 projectImage1">
                    <Col md={12}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_07-image-1" src="./projects/project_07-1.jpg" />
                    </Col>
                </Row>

                {/* Images others */}
                <Row className="m-0 px-4 pt-2 pb-4 projectImage2">
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_07-image-2" src="./projects/project_07-2.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_07-image-3" src="./projects/project_07-3.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_07-image-5" src="./projects/project_07-5.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_07-image-4" src="./projects/project_07-4.jpg" />
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

/* Export */
export default Project_07;
