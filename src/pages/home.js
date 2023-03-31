import Card from '../components/Card/index';
import Titulo from '../components/Titulo/index';

const filmes = [{
  "nome": "Harry Potter",
  "duracao": "2H",
  "foto": "harrypotter.jpg",
  "ano": 2002,
  "assistido": true,
},
{
  "nome": "Zootopia",
  "duracao": "2H",
  "foto": "zootopia.jpg",
  "ano": 2016,
  "assistido": true,
},
{
  "nome": "Harry Potter 2",
  "duracao": "2H",
  "foto": "harrypotter.jpg",
  "ano": 2011,
  "assistido": false,
}]

function Home() {
  return (
    <>
      <Titulo title='Catálogo de filmes' text='Filmes disponiveis' />
      <Card tipo='home' dados={filmes} />
    </>
  );
}

export default Home;