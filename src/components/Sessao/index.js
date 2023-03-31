import './sessao.css';

export default function Sessao({tipo, dados}) {
    return (
      <>
        {(() => {
            // SESSAO DE DETALHES ----------------------------------------------------------------------------------
            if(tipo == "detalhes"){
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-4 text-center">
                                <img src={'/assets/images/' + dados.foto} className="img-fluid" alt={dados.nome}></img>
                            </div>
                            <div className="col-8 text-center">
                                <h3>{dados.nome}</h3>
                                <p>{dados.duracao}</p>
                                <p>{dados.genero}</p>
                                <p>{dados.descricao}</p>
                                <p>{dados.nota}</p>
                                <Assistido jaVisto={dados.assistido}/>
                            </div>
                        </div>
                    </div>
                );
            // SESSAO DE COMENTARIOS ----------------------------------------------------------------------------------
            }else if(tipo == "comentarios"){
                return(
                <div className='container mt-5 pt-5 border-top'>
                    <div className="row">
                        {dados.map((dado) => (
                            <>
                                <div className="col-2 text-center my-2">
                                    <img src={'/assets/images/' + dado.foto} className="img-fluid rounded-circle img-altura"></img>
                                </div>
                                <div className="col-10 my-2">
                                    <h5>{dado.nome}</h5>
                                    <p>{dado.comentario}</p>
                                </div>
                                <hr></hr> 
                            </>
                        ))}
                    </div>
                </div> 
                );
            // SESSAO DE SOBRE ----------------------------------------------------------------------------------
            }else if(tipo == "sobre"){
                return(
                    <div className="container mt-5">
                      <div className="row">
                        <div className="col-8 text-justify">
                          <p>Proin consequat nisi sit amet purus ultricies, in tempus lacus sodales. Etiam at felis maximus, posuere justo ac, aliquet arcu. Morbi ac arcu sed augue commodo rutrum a ut lorem. Cras ullamcorper, tellus eu facilisis sollicitudin, turpis est luctus nulla, sed gravida urna mauris in magna. Ut cursus dui vitae ante faucibus venenatis. Nam at ex nec sapien luctus consequat non ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet ipsum eros. Nullam eu accumsan ligula. Nam nec mauris eget lorem mattis volutpat vel sed ante. Morbi sed justo eget ex pharetra congue. Cras id sollicitudin libero, sed vehicula turpis. Morbi tristique lacinia leo nec pharetra. Praesent vitae ipsum augue. Aenean eu efficitur nisl. Cras eu porttitor nisl.</p>
                          <p>Quisque lacinia vestibulum purus auctor maximus. Integer leo augue, varius eget egestas eu, finibus in turpis. Duis et dignissim ligula, mollis auctor est. Pellentesque at mi aliquet, interdum massa quis, viverra elit. Praesent blandit ligula in risus pulvinar venenatis. Fusce congue ex sem, vel venenatis tellus sodales gravida. Praesent vulputate imperdiet efficitur. Morbi egestas efficitur posuere. Nullam pharetra vel ligula ac efficitur. Vivamus a arcu elit. Duis in dignissim odio. Nullam gravida augue a imperdiet ultricies.</p>
                          <p>In nec tellus enim. Praesent consectetur elementum enim a mattis. Aenean non est rhoncus, efficitur metus ut, cursus ante. Duis molestie nisi eros. Nulla eu pretium ante. Integer mollis dapibus risus ac vulputate. Donec id neque a sem scelerisque tincidunt in at lacus. Mauris pretium dui sed lacus commodo suscipit.</p>
                        </div>
                        <div className="col-4">
                          <img src={'/assets/images/logo.png'} className="img-fluid rounded shadow" alt="logo"></img>
                        </div>
                      </div>  
                    </div>
                );
            }
        })()}
      </>
    );
  }

  function Assistido({jaVisto}){
    if(jaVisto){
        return(<p className="text-success">Assistido</p>);
    }else{
        return(<p className="text-danger">Nao assistido</p>);
    }
  }
