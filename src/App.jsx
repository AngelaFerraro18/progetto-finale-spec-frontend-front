import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<p>'Home'</p>} />
          <Route path="/plant/:id" element={<p>'Dettaglio'</p>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
