import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* pagine principali dell'App */}
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<p>'Home'</p>} />
            <Route path="/plant/:id" element={<p>'Dettaglio'</p>} />
          </Route>

          {/* route per la pagina Not Found  */}
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
