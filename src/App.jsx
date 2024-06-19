import { useEffect, useState } from 'react'
// import { createClient } from 'contentful'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import SearchPage from './pages/SearchPage'

const btnStyle = "border border-gray-300 bg-sky-800 text-white px-4 py-2 rounded-md";

// const cfClient = createClient({
//   space: import.meta.env.VITE_CF_SPACE,
//   accessToken: import.meta.env.VITE_CF_DELIVERY_KEY
// })

function App() {
  // const [cfList, setCfList] = useState([])
  const [movieList, setMovieList] = useState([])


  useEffect(() => {
    // const fetchCfMovies = async () => {
    //   try {
    //     const entries = await cfClient.getEntries({
    //       content_type: 'watchedMovies'
    //     })
    //     setCfList(entries.items)
    //   } catch (error) {
    //     console.error(error)
    //   }      
    // }

    const fetchMovies = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_MOVIE_URL)
        const data = await response.json()
        console.log(data)
        setMovieList(data)
      } catch (error) {
        console.error(error)
      }
    }
    // fetchCfMovies()
    fetchMovies()


  }, [])

  const favMovies = mL => mL.filter(movie => (
    movie.vieweddate && movie.myrating > 3
  ))

  return (
    <BrowserRouter basename="/wd51-contentfull">
      <Header />
      <Routes>
        <Route path="/favorites" element={<Favorites favMovies={favMovies(movieList)} />} />
        <Route path="/search" element={<SearchPage setMovieList={setMovieList} btnStyle={btnStyle} />} />
        <Route path="/" element={<Home movieList={movieList} setMovieList={setMovieList} btnStyle={btnStyle} />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
