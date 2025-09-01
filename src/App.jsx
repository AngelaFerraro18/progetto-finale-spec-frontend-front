import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import PlantsList from "./components/PlantsList"

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* pagine principali dell'App */}
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<PlantsList />} />
            <Route path="/plant/:id" element={<p>Dettaglio</p>} />
            <Route path="/preferiti" element={<p>Preferiti</p>} />
          </Route>

          {/* route per la pagina Not Found  */}
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
