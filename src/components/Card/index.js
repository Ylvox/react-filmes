import './Card.css';

function Assistido({ jaVisto }) {
    if (jaVisto) {
        return (<p className="text-success">Assistido</p>);
    } else {
        return (<p className="text-danger">Nao assistido</p>);
    }
}

function Card({ tipo, dados }) {
    return (
        <>
            {(() => {
                if (tipo == "home") {
                    return (
                        <div className="container">
                            <div className="row">
                                {dados.map((dado) => (
                                    <div className='col-md-4 my-4'>
                                        <div className="card text-center shadow">
                                            <img src={'/assets/images/' + dado.foto} alt={dado.nome} className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{dado.nome} ({dado.ano})</h5>
                                                <p>{dado.duracao}</p>
                                                <Assistido jaVisto={dado.assistido} />
                                                <a href={'/detalhes/' + dado.nome} className="btn btn-primary">Detalhes</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                } else if (tipo == "planos") {
                    function handleClick() {
                        alert('Comprado :)');
                    }
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
                                                    <button onClick={handleClick} className="btn btn-primary">Adquirir</button>
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