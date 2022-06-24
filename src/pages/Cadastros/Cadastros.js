import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form, Image } from 'react-bootstrap'
import styles from "./Styles"

function Cadastros() {
    const history = useHistory()

    const routeCadastroALuno = () => {
        history.push('/home/cadastroAluno')
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
                <Row>
                    <Col>
                        <Button >Profissionais</Button>
                    </Col>
                    <Col>
                        <Button>Atividades</Button>
                    </Col>
                    <Col>
                        <Button>Equipamentos</Button>
                    </Col>
                    <Col>
                        <Button>Horários</Button>
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row style={styles.row}>
                    <Col>
                        <Button>Bancos</Button>
                    </Col>
                    <Col>
                        <Button>Usuários</Button>
                    </Col>
                    <Col>
                        <Button onClick={routeCadastroALuno}>Alunos</Button>
                    </Col>
                    <Col>
                        <Button>Produtos</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Cadastros;
