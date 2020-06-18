/**
 * components/Projects/Project_10.js
 */

/* Import modules  */
import React, { } from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

/* Import others */
import "./style.scss";

/* Component */
function Project_10(props) {

    /* Return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-light">

                {/* Title */}
                <Row className="m-0 p-4 bg-dark" style={{ width: "100%", height: "7rem", background: "url(./work-731198_1920.jpg) no-repeat center", backgroundSize: "cover" }}>
                    <Col md={12}>
                        <h1 className="text-white text-center text-uppercase font-weight-bold">CannesIsUp</h1>
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
                                    <Col md={9} className="text-justify">Réalisation d'un annuaire et d'un formulaire d'inscription pour l'association CannesIsUp. Création d'un backoffice pour la gestion des adhérents avec accès adhérent/administrateur différencié.</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Type de projet :</u></Col>
                                    <Col md={9}>Application Web</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Date de réalisation :</u></Col>
                                    <Col md={9}>Mai 2020</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Choix technologiques :</u></Col>
                                    <Col md={9}>Stack MERN (MongoDB / ExpressJS / ReactJS / NodeJS)</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Choix techniques :</u></Col>
                                    <Col md={9}>Bootstrap (mise en page)<br />Nodemailer (envoi d'email)<br />Bcrypt (hash mot de passe)<br />JSON Web Tokens (authentification)<br />Multer (stockage des données dans le back)<br />React-Quill (éditeur WYSIWYG)<br />React-Infinite-Scroll (gestion du défilement)</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col md={3}><u>Lien :</u></Col>
                                    <Col md={9}>
                                        <a className="text-decoration-none text-dark" href="https://github.com/TCallabat/CannesIsUp" target="_blank">Github CannesIsUp</a>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                {/* Image primary */}
                <Row className="m-0 px-4 py-2 projectImage1">
                    <Col md={12}>
                        <Image fluid rounded className="h-100 w-100" alt="project_10-image-1" src="./projects/project_10-1.jpg" />
                    </Col>
                </Row>

                {/* Images others */}
                <Row className="m-0 px-4 pt-2 pb-4 projectImage2">
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="project_10-image-2" src="./projects/project_10-2.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="project_10-image-3" src="./projects/project_10-3.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="project_10-image-5" src="./projects/project_10-5.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="project_10-image-4" src="./projects/project_10-4.jpg" />
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

/* Export */
export default Project_10;
