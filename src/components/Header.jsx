import { NavLink } from "react-router-dom";

function Header() {

    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/preferiti">Preferiti</NavLink>
        </>
    )
}

export default Header;