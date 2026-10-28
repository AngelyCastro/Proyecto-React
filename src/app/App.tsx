import { Route, Routes } from "react-router-dom"
import Layout from "../features/shared/layout/Layout"
import Home from "../features/home/pages/Home"
import Apartments from "../features/apartments/pages/Apartments"
import ApartmentDetail from "../features/apartments/pages/ApartmentDetail"
import Favorites from "../features/favorites/pages/Favorites"
import Contact from "../features/contact/pages/Contact"
import NotFound from "../features/shared/components/NotFound"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apartamentos" element={<Apartments />} />
        <Route path="/apartamentos/:id" element={<ApartmentDetail />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App