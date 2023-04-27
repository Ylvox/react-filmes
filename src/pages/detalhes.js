import { useParams } from "react-router-dom";
import Titulo from '../components/Titulo/index';
import Sessao from '../components/Sessao/index';
import Header from '../components/Header/index';
import { useEffect, useState } from "react";

const coments = [{
  "nome": "Ricardo",
  "foto": "user.png",
  "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque vitae ipsum vel blandit. Nunc vel luctus sem. Vestibulum auctor pulvinar libero eget egestas. Praesent tincidunt neque sit amet ipsum congue cursus. Donec ut placerat diam. In eu tempor velit. Nullam consequat arcu velit, ac interdum velit varius at. Praesent interdum finibus turpis, ut luctus purus tincidunt sit amet."
},
{
  "nome": "Henrique",
  "foto": "user.png",
  "comentario": "Vivamus scelerisque nulla vel nisi malesuada suscipit. Donec euismod tempor nisl id laoreet. Vestibulum porttitor nisl nec felis ultrices, id vulputate diam malesuada. Pellentesque lobortis, tellus vitae aliquam mattis, nisi neque pulvinar neque, id mollis quam ipsum et lorem. Duis sed ultricies est. Phasellus non lacinia orci, eu pharetra dui. Suspendisse potenti. Integer vitae risus sem. Maecenas ligula erat, consectetur ut semper non, dignissim sit amet nibh. Aenean efficitur tortor sapien, quis mattis nibh sodales dignissim. Phasellus sodales gravida mi vel molestie. Fusce id nibh justo. Sed tristique nibh sed purus condimentum pellentesque cursus eu dolor."
},
{
  "nome": "Julia",
  "foto": "user.png",
  "comentario": "Vivamus vitae rutrum ligula, quis rutrum turpis. Sed iaculis, dui eu euismod maximus, augue mauris maximus leo, sed ullamcorper enim lacus et lacus. Sed odio erat, tincidunt ac ante non, suscipit tempor massa."
}
]

function Detalhes() {

  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/' + id)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
  }, []);

  if (!data) {
    return (
      <div className="text-center m-auto col-12">
        <h4>Carregando...</h4>
      </div>
    );
  }

  return (
    <>
      <Header menu='outros' />
      <Titulo title='Detalhes' text={data.titulo} />
      <div className="Detalhes mt-5">
        {(() => {
          if(data.id == null){
            return (
              <div className="text-center m-auto col-12">
                <h4>Filme indisponivel</h4>
              </div>
            );
          }else{
            return <Sessao tipo='detalhes' dados={data} />;
          }
        })()}
        <Sessao tipo='comentarios' dados={coments} />
      </div>
    </>
  );
}

export default Detalhes;