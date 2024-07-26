import { Route, Routes } from "react-router-dom"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"


function App() {
return (
  <div>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movie" element={<MoviesPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </div>
)
}

export default App
