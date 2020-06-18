/**
 * components/Home/Home.js
 */

/* imports modules  */
import React, { } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

import "./style.scss";

/* component */
function Home(props) {

    /* return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-light">

            {/* Title */}
            <Row className="m-0 p-4 bg-dark" style={{ width: "100%", height: "9rem", background: "url(./work-731198_1920.jpg) no-repeat center", backgroundSize: "cover" }}>
                <Col md={12}>
                    <h1 className="text-white text-center text-uppercase font-weight-bold">Thibaut Callabat</h1>
                    <h3 className="text-white text-center font-weight-bold">Développeur Fullstack JavaScript</h3>
                </Col>
            </Row>

            {/* Container */}
            <Container className="p-0 pb-4">

                {/* Detail */}
                <Row className="m-0 mb-4 p-0">
                    <Col md={12} className="py-3">

                        <Carousel>
                            <Carousel.Item>
                                <Image className="d-block w-100" alt="" src="./projects/project_10-5.jpg" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="d-block w-100" alt="" src="./projects/project_09-1.jpg" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="d-block w-100" alt="" src="./projects/project_07-1.jpg" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="d-block w-100" alt="" src="./projects/project_10-2.jpg" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="d-block w-100" alt="" src="./projects/project_01-4.jpg" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="d-block w-100" alt="" src="./projects/project_01-2.jpg" />
                            </Carousel.Item>

                        </Carousel>


                    </Col>
                </Row>

            </Container>

        </Container>
    );
}

/* export */
export default Home;