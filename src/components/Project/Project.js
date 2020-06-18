/**
 * components/Projects/Project.js
 */

/* Import modules  */
import React, { } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
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
                    <Col md={12}>
                        <ul className="m-0 position-relative list-unstyled" id="timeline">
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-left.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-left">
                                    <div className="m-0 mr-5 px-3 py-2 position-relative rounded w-100 float-right bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">CANNES IS UP</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Portage du site de l'association sur ReactJS, réalisation d'un annuaire, d'un formulaire d'inscription et création d'un backoffice pour la gestion des données avec accès adhérent/administrateur différencié.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_10-3.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_10">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-right.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-right">
                                    <div className="m-0 ml-5 px-3 py-2 position-relative rounded w-100 float-left bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">SITE ECOMMERCE</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'un site d'ecommerce fullstack JavaScript avec ReactJS et NodeJS.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_09-1.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_09">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-left.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-left">
                                    <div className="m-0 mr-5 px-3 py-2 position-relative rounded w-100 float-right bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">APPLICATION ECOMMERCE</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'une application mobile ecommerce fullstack JavaScript avec ReactNative et NodeJS.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_08-1.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_08">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-right.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-right">
                                    <div className="m-0 ml-5 px-3 py-2 position-relative rounded w-100 float-left bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">APPLICATION MÉTÉO</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'une application météo (jour et prévision) connectée à l'api openweather.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_07-4.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_07">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-left.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-left">
                                    <div className="m-0 mr-5 px-3 py-2 position-relative rounded w-100 float-right bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">CONTACT BOOK</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'un répertoire.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_06-5.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_06">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-right.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-right">
                                    <div className="m-0 ml-5 px-3 py-2 position-relative rounded w-100 float-left bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">TO DO LIST</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'une todo list.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_05-3.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_05">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-left.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-left">
                                    <div className="m-0 mr-5 px-3 py-2 position-relative rounded w-100 float-right bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">Configurateur auto</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'un script simulant un configurateur auto : choix de la finition, moteur, couleur, accessoires. Utilisation des alertes du navigateur pour la gestion des évènements.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_04-1.png" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_04">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-right.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-right">
                                    <div className="m-0 ml-5 px-3 py-2 position-relative rounded w-100 float-left bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">Casino</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'un script de régulation pour un casino simulant les actions suivantes : entrer, jouer ou consommer avec la gestion d'un solde minimum et d'un age. Utilisation des alertes du navigateur pour la gestion des évènements.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_03-1.png" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_03">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-left.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-left">
                                    <div className="m-0 mr-5 px-3 py-2 position-relative rounded w-100 float-right bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">Artenobilia</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'une landing page responsive pour une galerie d'art respectant la charte graphique de la marque.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_02-4.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_02">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                            <li className="position-relative">
                                <img className="mb-2 position-absolute icon" src="./share-right.svg" alt="" />
                                <div className="m-0 p-0 w-50 float-right">
                                    <div className="m-0 ml-5 px-3 py-2 position-relative rounded w-100 float-left bg-white border">
                                        <Row>
                                            <Col>
                                                <h3 className="py-1 font-weight-bold text-uppercase">Mika Piscines</h3>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={8}>
                                                <p>Réalisation d'une landing page respectant les codes couleurs de la marque et responsive en utilisant les media queries.</p>
                                            </Col>
                                            <Col md={4}>
                                                <Image fluid rounded alt="" src="./projects/project_01-1.jpg" />
                                                <div className="text-center w-100 pt-1">
                                                    <Link className="text-dark text-decoration-none" to="/project_01">En savoir plus</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
