import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap'
import styles from './Styles'

function Tablelas() {
    return (
        <>
            <Table striped bordered hover style={styles.table}>
                <thead>
                    <tr>
                        <th>cod</th>
                        <th>Atividade</th>
                        <th>Local Atividade</th>
                        <th>Dia semana</th>
                        <th>Início</th>
                        <th>Final</th>
                        <th>Professor</th>
                        <th>V Dis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>127</td>
                        <td>Boxe Cirvuito</td>
                        <td>Sala de Lutas</td>
                        <td>Seg</td>
                        <td>08:10</td>
                        <td>09:10</td>
                        <td>Paulo Cintura</td>
                        <td>0</td>
                    </tr>

                </tbody>
            </Table>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Horário Atividade/Equipamento em que o aluno está matriculado</Form.Label>
                </Form.Group>
            </Form>
            <Table striped bordered hover style={styles.table}>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor Unitário</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Par Porta Luvas</td>
                        <td>R$ 50,00</td>
                        <td>1</td>
                        <td>R$ 50,00</td>
                    </tr>

                </tbody>
            </Table>
        </>
    );
}

export default Tablelas;