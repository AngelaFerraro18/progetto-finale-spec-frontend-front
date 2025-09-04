import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div className="not-found-container">
            <div className="container">
                <h1 className="plant-list-title">Ops, qualcosa è andato storto!</h1>

                <h2>404 Not Found</h2>

                <img className="not-found-img" src="/icons/bugs.png" alt="bugs" />

                <p>La pagina che stavi cercando non è stata trovata, forse divorata da qualche insetto.
                    Premi il pulsante "Home" per tornare sano e salvo nel tuo angolo verde!</p>

                <Link className="btn-sort-items btn-home" to={'/'}>Home

                    <img className="home-found" src="/icons/home-plant.png" alt="home-plant" />
                </Link>
            </div>
        </div>
    )
}

export default NotFound;