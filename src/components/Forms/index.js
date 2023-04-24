export default function forms({tipo}){
    return(
        <>
            {(() => {
                if(tipo == 'cadastro'){
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6 bg-light shadow rounded">
                                    <form>
                                        <h4 className="text-center mb-3">Formulario</h4>
                                        <div className="mb-3">
                                            <label for="fNome" className="form-label">Nome:</label>
                                            <input id="fNome" className="form-control" type="text"></input>
                                        </div>
                                        <div className="mb-3">
                                            <label for="fEndereco" className="form-label">Endereço:</label>
                                            <input id="fEndereco" className="form-control" type="text"></input>
                                        </div>
                                        <div className="mb-3">
                                            <label for="fTel" className="form-label">Telefone:</label>
                                            <input id="fTel" className="form-control" type="text"></input>
                                        </div>
                                        <h5>Preferencias de filmes:</h5>
                                        <div className="mb-3">
                                            <button className="btn btn-outline-primary m-2">Ação</button>
                                            <button className="btn btn-outline-primary m-2">Comédia</button>
                                            <button className="btn btn-outline-primary m-2">Ficção</button>
                                            <button className="btn btn-outline-primary m-2">Animação</button>
                                        </div>
                                        <h5>Dados bancarios:</h5>
                                        <div className="mb-3 row">
                                            <div className="col-9 mb-3">
                                                <input className="form-control" type="text" placeholder="Numero do cartao"></input>
                                            </div>
                                            <div className="col-3 mb-3">
                                                <input className="form-control" type="text" placeholder="CVV" maxlength="3"></input>
                                            </div>
                                            <div className="col-9 mb-3">
                                                <input className="form-control" type="text" placeholder="Nome titular"></input>
                                            </div>
                                            <div className="col-3 mb-3">
                                                <input className="form-control" type="text" placeholder="Validade" maxlength="4"></input>
                                            </div>
                                        </div>
                                        <div className="mb-3 d-grid">
                                            <button className="btn btn-primary">Enviar</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    );
                }
            })()}
        </>
    );
}