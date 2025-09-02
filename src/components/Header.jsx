import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavouritesContext";

function Header() {

    const { favorites } = useFavorites();

    return (
        <>
            <header>
                <div className="container header-container">
                    <img className="logo-header" src="/logo.png" alt="logo" />

                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/preferiti">{`Preferiti (${favorites.length})`}</NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;