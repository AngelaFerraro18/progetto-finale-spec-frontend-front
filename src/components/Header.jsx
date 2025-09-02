import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavouritesContext";

function Header() {

    const { favorites } = useFavorites();

    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/preferiti">{`Preferiti (${favorites.length})`}</NavLink>
        </>
    )
}

export default Header;