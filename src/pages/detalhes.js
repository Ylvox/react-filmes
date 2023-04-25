import { useParams } from "react-router-dom";
import Titulo from '../components/Titulo/index';
import Sessao from '../components/Sessao/index';
import Header from '../components/Header/index';

const filmes = [{
  "nome": "Harry Potter",
  "foto": "harrypotter.jpg",
  "duracao": "2H",
  "genero": "Açao/Aventura",
  "descricao": "Filme mt loco do harry potter",
  "nota": 7,
  "assistido": true
},
{
  "nome": "Harry Potter 2",
  "foto": "harrypotter.jpg",
  "duracao": "2H",
  "genero": "Açao/Aventura",
  "descricao": "Filme mt loco dos magico",
  "nota": 9,
  "assistido": false
},
{
  "nome": "Zootopia",
  "foto": "zootopia.jpg",
  "duracao": "2H",
  "genero": "Animaçao",
  "descricao": "Simplesmente foda",
  "nota": 10,
  "assistido": true
}
]

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
  const { filmenome } = useParams();

  return (
    <>
      <Header menu='outros' />
      <Titulo title='Detalhes' text={filmenome} />
      <div className="Detalhes mt-5">
        {filmes.map(filme => {
          if (filmenome == filme.nome) {
            return (
              <Sessao tipo='detalhes' dados={filme} />
            );
          }
        })
        }
        <Sessao tipo='comentarios' dados={coments} />
      </div>
    </>
  );
}

export default Detalhes;