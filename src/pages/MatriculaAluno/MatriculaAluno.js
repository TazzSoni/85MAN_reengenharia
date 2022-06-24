import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import Tableles from '../../components/Tableles/Tableles'
import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from "./Styles"

function MatriculaAluno() {
    const stylees = {
        navbar: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '10px'
        }
    }
    return (
        <>
            <Navbar />
            <Container fluid="sm" style={styles.cont}>
                <div style={stylees.navbar}>
                    <h1 style={styles.headerApp}>Matricula Alunos</h1>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Row>
                            <Col>
                                <Form.Label>Aluno</Form.Label>
                                <Form.Control type="email" placeholder="nome completo" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Data do Exame</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Validade Exame</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Meses Contrato</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <Form.Label>Data do Exame</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Validade Exame</Form.Label>
                                <Form.Control type="date" placeholder="Enter email" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Meses Contrato</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Valor Pré-Contratado</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <Form.Label>Pgto Pré-Contratado</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Valor Matrícula</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Desc</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                            <Col xs={2}>
                                <Form.Label>Valor Final Matr</Form.Label>
                                <Form.Control type="number" />
                            </Col>
                        </Row>
                        <Tableles></Tableles>
                    </Form.Group>
                </Form>
            </Container>
        </>
    );
}

export default MatriculaAluno;
