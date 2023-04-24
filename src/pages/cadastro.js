import Titulo from '../components/Titulo/index';
import Form from '../components/Forms/index';

function cadastro() {
    return (
        <>
            <Titulo title='Cadastro' text='Cadastro de conta no site' />
            <Form tipo='cadastro'/>
        </>
    );
}

export default cadastro;