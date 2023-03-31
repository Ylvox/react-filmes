export default function Titulo({title, text}) {
    return (
        <div className="Titulo mt-5">
            <div className="container text-center">
                <h1>{title}</h1>
                <p className="text-muted">{text}</p>
                <hr></hr>
            </div>
        </div>
    );
}