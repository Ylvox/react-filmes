import './pages.css';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Titulo from '../components/Titulo/index';
import Sessao from '../components/Sessao/index';

function Sobre() {
  const { name } = useParams();

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
      <Titulo title='Sobre' text={name} />
      <Sessao tipo='sobre' />
      <button className={activeIndex === 0? "btn btn-outline-primary m-2 active": "btn btn-outline-primary m-2"}onClick={() => setIsActive(0)}>Free</button>
                                            <button className={activeIndex === 1? "btn btn-outline-primary m-2 active": "btn btn-outline-primary m-2"}onClick={() => setIsActive(1)}>Plus</button>
    </>
  );
}

export default Sobre;