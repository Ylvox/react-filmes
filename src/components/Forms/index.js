import { useState } from 'react';

export default function Forms({ tipo }) {

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [plano, setPlano] = useState('');
    const [cartao, setCartao] = useState('');
    const [cvv, setCvv] = useState('');
    const [nomeTitular, setNomeTitular] = useState('');
    const [dataVal, setDataVal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`${nome} - ${endereco} - ${telefone} - ${plano} - ${cartao} - ${cvv} - ${nomeTitular} - ${dataVal}`);
    }

    return (
        <>
            {(() => {
                if (tipo == 'cadastro') {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6 bg-light shadow rounded">
                                    <form onSubmit={handleSubmit}>
                                        <h4 className="text-center mb-3">Formulario</h4>
                                        <div className="mb-3">
                                            <label for="fNome" className="form-label">Nome:</label>
                                            <input id="fNome" className="form-control" type="text" onChange={e => setNome(e.target.value)}></input>
                                        </div>
                                        <div className="mb-3">
                                            <label for="fEndereco" className="form-label">Endereço:</label>
                                            <input id="fEndereco" className="form-control" type="text" onChange={e => setEndereco(e.target.value)}></input>
                                        </div>
                                        <div className="mb-3">
                                            <label for="fTel" className="form-label">Telefone:</label>
                                            <input id="fTel" className="form-control" type="text" maxLength="11" onChange={e => setTelefone(e.target.value)}></input>
                                        </div>
                                        <h5>Plano escolhido:</h5>
                                        <div className="mb-3" role="group">
                                            <input type="radio" className='btn-check' autoComplete='off' id='freeSel' name='planoRadio' onChange={e => setPlano('Free')}></input>
                                            <label for='freeSel' className='btn btn-outline-primary me-2'>Free</label>
                                            <input type="radio" className='btn-check' autoComplete='off' id='plusSel' name='planoRadio' onChange={e => setPlano('Plus')}></input>
                                            <label for='plusSel' className='btn btn-outline-primary'>Plus</label>
                                        </div>
                                        <h5>Dados bancarios:</h5>
                                        <div className="mb-3 row">
                                            <div className="col-9 mb-3">
                                                <input className="form-control" type="text" placeholder="Numero do cartao" maxlength="20" onChange={e => setCartao(e.target.value)}></input>
                                            </div>
                                            <div className="col-3 mb-3">
                                                <input className="form-control" type="password" placeholder="CVV" maxlength="3" onChange={e => setCvv(e.target.value)}></input>
                                            </div>
                                            <div className="col-9 mb-3">
                                                <input className="form-control" type="text" placeholder="Nome titular" maxlength="250" onChange={e => setNomeTitular(e.target.value)}></input>
                                            </div>
                                            <div className="col-3 mb-3">
                                                <input className="form-control" type="text" placeholder="Validade" maxlength="4" onChange={e => setDataVal(e.target.value)}></input>
                                            </div>
                                        </div>
                                        <div className="mb-3 d-grid">
                                            <input type="submit" className="btn btn-primary" value="Assinar"></input>
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