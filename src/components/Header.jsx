import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavouritesContext";

function Header() {

    const { favorites } = useFavorites();

    return (
        <>
            <header>
                <div className="container header-container">
                    <img className="logo-header" src="/logo.png" alt="logo" />

                    <div className="navs-container">
                        <NavLink to="/"><span>Home</span>
                            <img src="/icons/seeds.png" alt="home" />
                        </NavLink>
                        <NavLink to="/preferiti"><span>Preferiti</span>
                            <div className="favorites-heart">
                                {favorites.length > 0 && (<span className="favorites-num">{favorites.length}</span>)}
                                <img src="/icons/heart-plant.png" alt="heart-plant" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;