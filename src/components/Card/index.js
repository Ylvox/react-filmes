import './Card.css';
import Button from '../button/index';
import { useState, useEffect } from 'react';

function Assistido({ jaVisto }) {
    if (jaVisto) {
        return (<p className="text-success">Assistido</p>);
    } else {
        return (<p className="text-danger">Nao assistido</p>);
    }
}

function Card({ tipo, dados }) {

    const [data, setData] = useState(null);
    const [filtro, setFiltro] = useState('titulo');
    const [titulo, setTitulo] = useState('');

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, []);

    if (!data) {
        return (
            <div className="text-center m-auto col-12">
                <h4>Carregando...</h4>
            </div>
        );
    }

    function renderFilmes() {
        if(filtro == 'titulo'){
            return(
                data.filter((dataF) => { return dataF.titulo.toLowerCase().includes(titulo.toLowerCase()) }).sort((a, b) => a.titulo > b.titulo ? 1 : -1).map((result, index) => (
                    <div className='col-md-4 my-4' key={result.ano}>
                        <div className="card text-center shadow">
                            <img src={result.poster} alt={result.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{result.titulo} - {result.ano}</h5>
                                <p>Nota: {result.nota} de 5</p>
                                <Button message={result.assistido} dados={result.id} tipo='home' />
                            </div>
                        </div>
                    </div>
                ))
            );
        }
        if(filtro == 'ano'){
            return(
                data.filter((dataF) => { return dataF.titulo.toLowerCase().includes(titulo.toLowerCase()) }).sort((a, b) => a.ano > b.ano ? -1 : 1).map((result, index) => (
                    <div className='col-md-4 my-4' key={result.ano}>
                        <div className="card text-center shadow">
                            <img src={result.poster} alt={result.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{result.titulo} - {result.ano}</h5>
                                <p>Nota: {result.nota} de 5</p>
                                <Button message={result.assistido} dados={result.id} tipo='home' />
                            </div>
                        </div>
                    </div>
                ))
            );
        }
        if(filtro == 'nota'){
            return(
                data.filter((dataF) => { return dataF.titulo.toLowerCase().includes(titulo.toLowerCase()) }).sort((a, b) => a.nota > b.nota ? -1 : 1).map((result, index) => (
                    <div className='col-md-4 my-4' key={result.ano}>
                        <div className="card text-center shadow">
                            <img src={result.poster} alt={result.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{result.titulo} - {result.ano}</h5>
                                <p>Nota: {result.nota} de 5</p>
                                <Button message={result.assistido} dados={result.id} tipo='home' />
                            </div>
                        </div>
                    </div>
                ))
            );
        }
    }

    return (
        <>
            {(() => {
                if (tipo == "home") {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className='col-12 mb-3'>
                                    <form className='row'>
                                        <div className='col-3'></div>
                                        <div className='col-6'>
                                            <input type='text' className='form-control' placeholder='Pesquisar filme' onChange={e => setTitulo(e.target.value)}></input>
                                        </div>
                                        <div className='col-1'></div>
                                        <div className='col-2'>
                                            <select className='form-select' onChange={e => setFiltro(e.target.value)}>
                                                <option selected value='titulo'>Titulo</option>
                                                <option value='ano'>Ano</option>
                                                <option value='nota'>Nota</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <hr></hr>
                                {renderFilmes()}
                            </div>
                        </div>
                    );
                } else if (tipo == "planos") {
                    return (
                        <div className="container">
                            <div className="row">
                                {dados.map((dado) => (
                                    <div className='col-md-4 my-4'>
                                        <div className="card text-center shadow">
                                            <div className="card-body">
                                                <h5 className="card-title">{dado.plano}</h5>
                                                <p>R$ {dado.preco}</p>
                                                <p>{dado.detalhes}</p>
                                                <div className='d-grid'>
                                                    <Button message='Comprado :)' dados='Adquirir' tipo='planos' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }
            })()}
        </>
    );
}

export default Card;