import './Menu.css';


function Menu() {
  return (
    <div className="Menu mb-5">
        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menuzin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Planos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Menu;