import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import { movies } from "./data/fakeMoviesList.json"

function App() {
  const [moviesList, setMoviesList] = useState([])


  // Fake fetch function
  const fetchMovies =  () => {
    // const response = await fetch('')
    // const data = await response.json()
    return movies; // return fake move from local
  }
  
  useEffect(() => {
    const movies = fetchMovies()
    const fakeTimer = setTimeout(() => {
      setMoviesList(movies)
    }, 1000)

    return () => {
      clearTimeout(fakeTimer)
    }
  }, [])

  const favMovies = mL => mL.filter(movie => (
    movie.my_rating > 3 && movie.watched_date
  ))

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/favorites" element={<Favorites favMovies={favMovies(moviesList)} />} />
        <Route path="/catalog" element={<h2>Catalog</h2>} />
        <Route path="/" element={<Home allMovies={moviesList} />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
      <Footer />    
    </BrowserRouter>
  )
}

export default App
