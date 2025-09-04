import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {

    return (
        <>
            <Header />
            <main className="container margin-top">
                <Outlet />
            </main>
            <footer>
                <p>Ogni foglia conta: trova la tua pianta perfetta!</p>
            </footer>
        </>
    )
}

export default DefaultLayout;