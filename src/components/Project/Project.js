/**
 * components/Projects/Project.js
 */

/* Import modules  */
import React, { } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Import others */
import "./style.scss";

/* Component */
function Project(props) {

    /* Return */
    return (
        <Container fluid className="m-0 p-0 mainContainer bg-light">

            {/* Title */}
            <Row className="m-0 p-4 bg-dark" style={{ width: "100%", height: "7rem", background: "url(./work-731198_1920.jpg) no-repeat center", backgroundSize: "cover" }}>
                <Col md={12}>
                    <h1 className="text-white text-center text-uppercase font-weight-bold">mes Projets</h1>
                </Col>
            </Row>

            {/* Container */}
            <Container className="p-0 pt-4 projectContainer">

                {/* Detail */}
                <Row className="m-0 px-4 pt-4 pb-2 projectDetail">

                    {/* Project 10 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_10-3.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>CannesIsUp</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'un annuaire et d'un formulaire d'inscription pour l'association CannesIsUp. Création d'un backoffice permettant la gestion des adhérents avec accès selon rôle utilisateur.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_10">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 09 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_09-1.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>site ecommerce</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'un site d'ecommerce fullstack JavaScript avec ReactJS et NodeJS.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_09">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 08 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_08-1.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>application ecommerce</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'une application mobile ecommerce fullstack JavaScript avec ReactNative et NodeJS.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_08">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 07 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_07-4.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>application météo</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'une application météo (jour et prévision) connectée à l'api openweather.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_07">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 06 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_06-5.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>contact book</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'un répertoire.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_06">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 05 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_05-3.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>to do list</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'une to do list.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_05">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 04 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_04-1.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>configurateur auto</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'un script simulant un configurateur auto : choix de la finition, moteur, couleur, accessoires. Utilisation des alertes du navigateur pour la gestion des évènements.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_04">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 03 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_03-1.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>casino</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'un script de régulation pour un casino simulant les actions suivantes : entrer, jouer ou consommer avec la gestion d'un solde minimum et d'un age. Utilisation des alertes du navigateur pour la gestion des évènements.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_03">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 02 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_02-4.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>Artenobilia</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'une landing page responsive pour une galerie d'art respectant la charte graphique de la marque.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_02">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Project 01 */}
                    <Col md={6} className="d-flex align-items-stretch">
                        <Card className="mb-4 bg-white w-100" style={{ borderRadius: "1rem" }}>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Card.Img fluid className="bg-dark" alt="" src="./projects/project_01-1.jpg" />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Title className="text-left font-weight-bold text-capitalize"><u>Mika piscines</u></Card.Title>
                                        <Card.Text className="text-left">Réalisation d'une landing page respectant les codes couleurs de la marque et responsive en utilisant les media queries.</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                                <Link className="pl-3 text-secondary text-decoration-none" to="/project_01">En savoir plus</Link>
                            </Card.Footer>
                        </Card>
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

        </Container >
    );
}

/* Export */
export default Project;
