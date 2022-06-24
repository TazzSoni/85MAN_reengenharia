import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar'
import Tablelas from '../../components/Tablelas/Tablelas'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import styles from "./Styles"

function Vendas() {
    const history = useHistory()

    const routeHome = () => {
        history.push('/home')
    }

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
                    <h1 style={stylees.headerApp}>Vendas</h1>
                </div>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Venda para</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Aluno</Form.Label>
                                <Form.Check aria-label="option 1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={1}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Visitante</Form.Label>
                                <Form.Check aria-label="option 1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Aluno</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Data</Form.Label>
                                <Form.Control type='date' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Tipo Venda</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Bar</Form.Label>
                                <Form.Check aria-label="option 1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={1}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Loja</Form.Label>
                                <Form.Check aria-label="option 1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Produto</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Pagamento</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>A vista</Form.Label>
                                <Form.Check aria-label="option 1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={1}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>A prazo</Form.Label>
                                <Form.Check aria-label="option 1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Preço Un</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Qtd</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Total</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col style={styles.but}>
                        <Button>Adicionar</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Lista de compras</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Tablelas></Tablelas>
                </Row>
                <Row>
                    <Col xl={2}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Impressão</Form.Label>
                                <Form.Control type='number' placeholder='Nro vias' />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xl={2}>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Total compras</Form.Label>
                                <Form.Control type='number' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Container fluid="sm">
                        <Row>
                            <Col>
                                <Button>Gravar</Button>
                            </Col>
                            <Col>
                                <Button>Cancelar</Button>
                            </Col>
                            <Col>
                                <Button>Excluir</Button>
                            </Col>
                            <Col>
                                <Button>Página Inicial</Button>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>

        </>
    );
}

export default Vendas;
