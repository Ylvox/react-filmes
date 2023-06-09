import './pages.css';
import { useParams } from "react-router-dom";
import Titulo from '../components/Titulo/index';
import Sessao from '../components/Sessao/index';
import Header from '../components/Header/index';

function Sobre() {
  const { name } = useParams();

  return (
    <>
      <Header menu='outros'/>
      <Titulo title='Sobre' text={name} />
      <Sessao tipo='sobre' />
    </>
  );
}

export default Sobre;