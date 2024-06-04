import { useEffect, useState } from 'react'
import { createClient } from 'contentful'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import SearchPage from './pages/SearchPage'

const cfClient = createClient({
  space: import.meta.env.VITE_CF_SPACE,
  accessToken: import.meta.env.VITE_CF_DELIVERY_KEY
})

function App() {
  const [cfList, setCfList] = useState([])


  useEffect(() => {
    const fetchCfMovies = async () => {
      try {
        const entries = await cfClient.getEntries({
          content_type: 'watchedMovies'
        })
        setCfList(entries.items)
      } catch (error) {
        console.error(error)
      }      
    }
    fetchCfMovies()
  }, [])

  const favMovies = mL => mL.filter(movie => (
     movie.fields.viewedDate && movie.fields.myRating > 3
  ))

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/favorites" element={<Favorites favMovies={favMovies(cfList)} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home cfMovies={cfList} />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
