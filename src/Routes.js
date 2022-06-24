import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/index';
import CadastroAluno from './pages/Cadastro/CadastroAluno';
import Cadastros from './pages/Cadastros/Cadastros';
import Caixa from './pages/Caixa/Caixa';
import Alunos from './pages/Alunos/Alunos';
import Vendas from './pages/Vendas/Vendas';
import Recebimento from './pages/Recebimento/Recebimento';
import Questionario from './pages/Questionario/Questionario';
import MatriculaAluno from './pages/MatriculaAluno/MatriculaAluno';


function Routes() {



    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/home/cadastroAluno' component={CadastroAluno} />
                <Route path='/home/cadastros' component={Cadastros} />
                <Route path='/home/questionario' component={Questionario} />
                <Route path='/home/caixa' component={Caixa} />
                <Route path='/home/alunos' component={Alunos} />
                <Route path='/home/vendas' component={Vendas} />
                <Route path='/home/recebimento' component={Recebimento} />
                <Route path='/home/matriculaaluno' component={MatriculaAluno} />
            </Switch>
        </Router>
    )
}

export default Routes