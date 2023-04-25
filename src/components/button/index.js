export default function Button({ message, dados, tipo }) {
    return (
        <>
            {(() => {
                if (tipo === 'planos') {
                    return (
                        <button className="btn btn-primary" onClick={() => alert(message)}>{dados}</button>
                    );
                }
                if (tipo === 'home') {
                    if (message) {
                        return (
                            <a href={'/detalhes/' + dados} className="btn btn-primary">Assistir novamente</a>
                        );
                    } else {
                        return (
                            <a href={'/detalhes/' + dados} className="btn btn-primary">Assistir</a>
                        );
                    }
                }
            })()}
        </>
    );
}