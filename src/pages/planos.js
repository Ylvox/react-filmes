import Titulo from '../components/Titulo/index';
import Card from '../components/Card/index';

const planos = [{
    "plano": "Plano A",
    "preco": 20,
    "detalhes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mauris, consequat a laoreet ut, sollicitudin vel ex. Etiam semper purus ut erat tempus auctor. Aenean aliquet sagittis ultrices. Cras."
},
{
    "plano": "Plano B",
    "preco": 30,
    "detalhes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mauris, consequat a laoreet ut, sollicitudin vel ex. Etiam semper purus ut erat tempus auctor. Aenean aliquet sagittis ultrices. Cras."
},
{
    "plano": "Plano C",
    "preco": 40,
    "detalhes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat mauris, consequat a laoreet ut, sollicitudin vel ex. Etiam semper purus ut erat tempus auctor. Aenean aliquet sagittis ultrices. Cras."
}
]

function Planos() {
    return (
        <>
            <Titulo title='Planos' text='Lista de planos disponiveis' />
            <Card tipo='planos' dados={planos} />
        </>
    );
}

export default Planos;