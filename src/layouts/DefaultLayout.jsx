import { Outlet } from "react-router-dom";

function DefaultLayout() {

    return (
        <>
            <header>Sono l'header</header>
            <main>
                <Outlet />
            </main>
            <footer>Sono il footer</footer>
        </>
    )
}

export default DefaultLayout;