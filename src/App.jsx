import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import PlantsList from "./pages/PlantsList"
import PlantDetail from "./pages/PlantDetail"

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* pagine principali dell'App */}
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<PlantsList />} />
            <Route path="/plant/:id" element={<PlantDetail />} />
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
