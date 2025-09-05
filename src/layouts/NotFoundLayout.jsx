import { Outlet } from "react-router-dom";

function NotFoundLayout() {


    return (
        <>
            <header>
                <div className="container">
                    <img className="logo-header" src="/logo.png" alt="logo" />
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Ogni foglia conta: trova la tua pianta perfetta!</p>
            </footer>

        </>
    )
}

export default NotFoundLayout;