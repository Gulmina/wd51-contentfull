import { useRef } from 'react'
const fields = {
    Title: { show: false, hideTitle: true },
    Year: { show: false, hideTitle: true },
    Runtime: { show: false },
    Genre: { show: false },
    Director: { show: true },
    Actors: { show: true },
    Writer: { show: true },
    Plot: { show: false, hideTitle: true },
    Rated: { show: true },
    Released: { show: true },
    Ratings: { show: false },
    Language: { show: true },
    Country: { show: true },
    Awards: { show: true },
    Metascore: { show: true },
    imdbRating: { show: true },
    imdbVotes: { show: true },
    imdbID: { show: false },
    Type: { show: true },
    DVD: { show: false },
    BoxOffice: { show: true },
    Production: { show: false },
    Website: { show: false },
    Response: { show: false },
    Poster: { show: false },
}

const movieServerURL = import.meta.env.VITE_MOVIE_URL || 'https://moviebuffserver.onrender.com/api/v1/movies'

const SearchMovieCard = ({ movieData, setSelectedMovie, setMovieList, btnStyle }) => {
    const addedDialog = useRef(null)

    const handleAddBtn = async () => {
        try {
            const response = await fetch(movieServerURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData),
            })
            const addedMovie = await response.json()
            if (addedMovie.imdbid) {

                setMovieList(ml => {
                    if (ml.length === 0) return [addedMovie]
                    if (ml.find(movie => movie.imdbid === addedMovie.imdbid)) return ml
                        return [addedMovie, ...ml]
                    })
        
                addedDialog.current.showModal()
                setTimeout(() => {
                    addedDialog.current.close()
                setSelectedMovie(null)
                }, 3000)
            }

        } catch (error) {
            console.error("Add movie error", error)
        }
    }

    return (
        <div className="grid [grid-template-areas:'card'] min-h-full ">
            {
                movieData?.Poster !== 'N/A'
                && < img className="[grid-area:card] object-cover min-w-full min-h-full blur-[2px]" src={movieData?.Poster} alt={movieData?.Title} loading="lazy" />
            }
            <div className="[grid-area:card] min-h-full p-4 z-10 bg-white/70">
                <div className="mb-2">
                    <h3 className="text-lg text-sky-900 font-semibold text-balance">{movieData?.Title}</h3>
                    <p className=" mb-2 flex flex-wrap justify-between gap-2"><span>{movieData?.Year}, {movieData?.Runtime}</span><em>{movieData?.Genre}</em></p>
                    {movieData?.Plot !== 'N/A' && <p>{movieData?.Plot}</p>}
                    {movieData?.Poster !== 'N/A' && <a className="text-sky-900 underline" href={movieData?.Poster} target="_blank" rel="noopener noreferrer">Poster link</a>}
                </div>
                {Object.entries(fields).map(([key, { show, hideTitle }]) => (
                    show && movieData[key] !== 'N/A' && (
                        <p key={key}>
                            {hideTitle ? movieData[key] : (<><strong>{key}:</strong> {movieData[key]}</>)}
                        </p>
                    )
                ))}
                <div className="text-center">
                    <button onClick={handleAddBtn} className={btnStyle}>Add to waiting list</button>
                </div>
            </div>
            <dialog ref={addedDialog} className="py-8 px-4 bg-sky-900 text-white rounded-md">
                <p>Movie added to the waiting list</p>
            </dialog>
        </div>
    )
}

export default SearchMovieCard