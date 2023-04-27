import Card from '../components/Card/index';
import Titulo from '../components/Titulo/index';
import Header from '../components/Header/index';

const filmes = [];

function Home() {
  return (
    <>
      <Header menu='outros'/>
      <Titulo title='Catálogo de filmes' text='Filmes disponiveis' />
      <Card tipo='home' dados={filmes} />
    </>
  );
}

export default Home;