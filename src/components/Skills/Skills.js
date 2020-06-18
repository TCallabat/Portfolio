/**
 * components/Home/Home.js
 */

/* imports modules  */
import React, { } from "react";
import { Container, Row, Col, Image, CardGroup, Card, ListGroup } from "react-bootstrap";

import "./style.scss";

/* component */
function Skills(props) {

    /* return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-light">

            {/* Title */}
            <Row className="m-0 p-4 bg-dark" style={{ width: "100%", height: "7rem", background: "url(./work-731198_1920.jpg) no-repeat center", backgroundSize: "cover" }}>
                <Col md={12}>
                    <h1 className="text-white text-center text-uppercase font-weight-bold">mes compétences</h1>
                </Col>
            </Row>

            {/* Container */}
            <Container className="p-0 py-4">

                {/* Detail */}
                <Row className="m-0 my-4 p-0">
                    <Col md={12}>
                        <CardGroup>
                            <Card className="mx-3 rounded border">
                                <Card.Img src="./browser.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="browser logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">Front-end</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="text-center m-0 p-1">HTML 5 / CSS 3</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">Bootstrap</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">JavaScript</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">ReactJS / React Native</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mx-3 rounded border">
                                <Card.Img src="./server.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="server logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">Back-end</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="text-center m-0 p-1">NodeJS</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">ExpressJS</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">MongoDB</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">Mongoose</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

                {/* Detail */}
                <Row className="m-0 mt-4 p-0">
                    <Col md={12}>
                        <CardGroup>
                            <Card className="mx-3 rounded border">
                                <Card.Img src="./tools.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="tools logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">Divers</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="text-center m-0 p-1">Visual Studio Code</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">Git</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">Scrum</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">Trello</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mx-3 rounded border">
                                <Card.Img src="./spinner.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="spinner logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">En cours</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="text-center m-0 p-1">PHP</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">MySQL</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">VueJS</ListGroup.Item>
                                            <ListGroup.Item className="text-center m-0 p-1">Scss</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

                {/* Images others */}
                <Row className="m-0 px-0 py-4">
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_09-image-2" src="./projects/project_01-2.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_09-image-5" src="./projects/project_02-4.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_10-image-3" src="./projects/project_07-2.jpg" />
                    </Col>
                    <Col md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_10-image-4" src="./projects/project_10-5.jpg" />
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

/* export */
export default Skills;
