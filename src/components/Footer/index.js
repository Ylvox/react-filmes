import './Footer.css';

const ano = 2022;


function Footer() {
  return (
    <div className="Menu mt-5">
        <footer className="bg-light fixed-bottom">
            <div className="p-2">
                <p className="text-center text-muted">Filmes - {ano}</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;