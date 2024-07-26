import { Route, Routes } from "react-router-dom"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import HomePage from "./pages/HomePage/HomePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Header from "./components/Header/Header"


function App() {
return (
  <div>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movies" element={<MoviesPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </div>
)
}

export default App
