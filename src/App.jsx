import { useEffect, useState } from 'react'

import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
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

  return (
    <>
      <Header />
      <Main allMovies={moviesList}/>
      <Footer />    
    </>
  )
}

export default App
