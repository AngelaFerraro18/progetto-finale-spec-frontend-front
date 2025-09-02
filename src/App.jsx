import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import PlantsList from "./pages/PlantsList"
import PlantDetail from "./pages/PlantDetail"
import ComparePlants from "./pages/ComparePlants"
import { FavouritesProvider } from "./context/FavouritesContext"
import FavoritesPlants from "./pages/FavoritesPlants"

function App() {


  return (
    <>
      <FavouritesProvider>
        <BrowserRouter>
          <Routes>
            {/* pagine principali dell'App */}
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<PlantsList />} />
              <Route path="/plant/:id" element={<PlantDetail />} />
              <Route path="/preferiti" element={<FavoritesPlants />} />
              <Route path="/confronta-le-piante" element={<ComparePlants />} />
            </Route>

            {/* route per la pagina Not Found  */}
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </BrowserRouter>
      </FavouritesProvider>
    </>
  )
}

export default App
