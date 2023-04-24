import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menuzin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to='/planos' className="nav-link">Planos</Link></li>
                        <li className="nav-item"><Link to='/sobre/EMPRESA' className="nav-link">Sobre</Link></li>
                        <li className="nav-item"><Link to='/cadastro' className="nav-link">Cadastrar</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Header;


