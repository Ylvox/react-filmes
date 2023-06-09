import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Cadastro from './pages/cadastro';

export default function ConfigRoute(){
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/planos' element={<Planos />}></Route>
            <Route path='/sobre/:name' element={<Sobre />}></Route>
            <Route path='/detalhes/:id' element={<Detalhes />}></Route>
            <Route path='/cadastro' element={<Cadastro />}></Route>
            <Route path='*' element={<h1 className="text-center text-danger mt-5">404 - Pagina nao encontrada!</h1>}></Route>
        </Routes>
    );
}