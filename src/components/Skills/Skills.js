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
                    <h1 className="text-white text-center text-uppercase font-weight-bold">compétences</h1>
                </Col>
            </Row>

            {/* Container */}
            <Container className="p-0 py-4">

                {/* Detail */}
                <Row className="m-0 my-4 p-0">
                    <Col md={12}>
                        <CardGroup>
                            <Card className="mx-2 rounded border">
                                <Card.Img src="./browser.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="browser logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">Front-end</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />HTML 5 / CSS 3</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Bootstrap</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />JavaScript</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />ReactJS</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />React Native</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mx-2 rounded border">
                                <Card.Img src="./server.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="server logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">Back-end</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />NodeJS</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />ExpressJS</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />MongoDB</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Mongoose</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mx-2 rounded border">
                                <Card.Img src="./tools.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="tools logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">Divers</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Visual Studio Code</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Git</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Scrum</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Trello</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="mx-2 rounded border">
                                <Card.Img src="./spinner.svg" className="mt-4 px-2 align-self-center" style={{ height: "4rem", width: "4rem" }} alt="spinner logo" />
                                <Card.Body>
                                    <Card.Title className="text-center font-weight-bold text-uppercase">En cours</Card.Title>
                                    <Card.Text className="px-4">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />PHP</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />MySQL</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />VueJS</ListGroup.Item>
                                            <ListGroup.Item className="text-left border-0 m-0 p-1"><img src="./tick.svg" alt="" className="mr-2" style={{ height: "1rem", width: "1rem" }} />Sass</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>

                {/* Images others */}
                <Row className="m-0 px-0 py-4">
                    <Col sm={6} md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_09-image-2" src="./projects/project_01-2.jpg" />
                    </Col>
                    <Col sm={6} md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_09-image-5" src="./projects/project_02-4.jpg" />
                    </Col>
                    <Col sm={6} md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_10-image-3" src="./projects/project_07-2.jpg" />
                    </Col>
                    <Col sm={6} md={3}>
                        <Image fluid rounded className="h-100 w-100" alt="Project_10-image-4" src="./projects/project_10-5.jpg" />
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

/* export */
export default Skills;
