import { useEffect, useState } from "react"
import SearchMovieCard from "./SearchMovieCard";
const apiKey = import.meta.env.VITE_OMDB_API_KEY_II
const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

const SearchMoviePreview = ({ imdbID, setSelectedMovie, setMovieList, btnStyle }) => {

    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`${apiURL}&i=${imdbID}`)
                const data = await response.json()
                setMovieData(data)           
            } catch (error) {
                console.error(error)
            }
        }

        imdbID
            ? fetchMovieData()
            : setMovieData(null)
    }, [imdbID])

    return (
        <div className="bg-white rounded-md shadow-sm overflow-hidden" >
        {movieData
                ? <SearchMovieCard movieData={movieData} setSelectedMovie={setSelectedMovie} setMovieList={setMovieList} btnStyle={btnStyle} />               
            : <div className="min-h-full grid place-content-center p-4">Select movie from list</div>
        }
        </div >
    )
}

export default SearchMoviePreview