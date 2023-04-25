import Titulo from '../components/Titulo/index';
import Form from '../components/Forms/index';
import Header from '../components/Header/index';

function cadastro() {
    return (
        <>
            <Header menu='cadastro'/>
            <Titulo title='Cadastro' text='Cadastro de conta no site' />
            <Form tipo='cadastro'/>
        </>
    );
}

export default cadastro;