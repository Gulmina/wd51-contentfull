import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import SearchPage from './pages/SearchPage'

const movieServerURL = import.meta.env.VITE_MOVIE_URL || 'https://moviebuffserver.onrender.com/api/v1/movies'
const btnStyle = "border border-gray-300 bg-sky-800 text-white px-4 py-2 rounded-md";

function App() {
  const [movieList, setMovieList] = useState([])
  const [showDeleted, setShowDeleted] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      const delQuery = showDeleted ? '?del=true' : ''
      try {
        const response = await fetch(`${movieServerURL}${delQuery}`)
        const data = await response.json()
        
        setMovieList(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchMovies()

  }, [showDeleted])

  const favMovies = mL => mL.filter(movie => (
    movie.vieweddate && movie.myrating > 3
  ))

  return (
    <BrowserRouter basename="/wd51-contentfull">
      <Header />
      <Routes>
        <Route path="/favorites" element={<Favorites favMovies={favMovies(movieList)} />} />
        <Route path="/search" element={<SearchPage setMovieList={setMovieList} btnStyle={btnStyle} />} />
        <Route path="/" element={<Home movieList={movieList} setMovieList={setMovieList} btnStyle={btnStyle} showDeleted={showDeleted} setShowDeleted={setShowDeleted} />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
