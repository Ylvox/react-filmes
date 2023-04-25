import { useState } from 'react';

export default function Forms({ tipo }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const setIsActive = (index) => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === index) {
                return 0;
            }
            return index;
        });
    };

    return (
        <>
            {(() => {
                if (tipo == 'cadastro') {
                    return (
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
                                        <h5>Plano escolhido:</h5>
                                        <div className="mb-3" role="group">
                                            <input type="radio" className='btn-check' autoComplete='off' id='freeSel' value='' name='planoRadio'></input>
                                            <label for='freeSel' className='btn btn-outline-primary me-2'>Free</label>
                                            <input type="radio" className='btn-check' autoComplete='off' id='plusSel' value='' name='planoRadio'></input>
                                            <label for='plusSel' className='btn btn-outline-primary'>Plus</label>
                                        </div>
                                        <h5>Dados bancarios:</h5>
                                        <div className="mb-3 row">
                                            <div className="col-9 mb-3">
                                                <input className="form-control" type="text" placeholder="Numero do cartao" maxlength="20"></input>
                                            </div>
                                            <div className="col-3 mb-3">
                                                <input className="form-control" type="password" placeholder="CVV" maxlength="3"></input>
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