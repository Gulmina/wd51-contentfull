const movieServerURL = import.meta.env.VITE_MOVIE_URL || 'https://moviebuffserver.onrender.com/api/v1/movies'

const MovieCard = ({ movieObj, setMovieList, btnStyle, showDeleted }) => {

    const movieData = movieObj
    const starRating = Array(5).fill().map((_, i) => movieData?.myrating > i ? "★" : "☆").join(" ")
    const vDate = new Date(movieData?.vieweddate)
    // const imgParams = '?fm=webp&fit=pad&w=100'
    // const imgUrl = `https:${imgData.file.url}${imgParams}`

    const handleRemoveBtn = async () => {
        try {
            const res = await fetch(`${movieServerURL}/${movieData.imdbid}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            
            setMovieList(ml => {
                if (showDeleted) {
                    return ml.map(m => m.imdbid === data.imdbid ? { ...m, is_deleted: !m.is_deleted } : m)
                }
                else { 
                    return ml.filter(m => m.imdbid !== data.imdbid)
                } 
            })
        } catch (error) {
            console.error('Delete error', error)
        }
    }

    const handleViewedBtn = async () => {
        const date = new Date()
        const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate().toString().padStart(2, '0'))}`
        const rating = Math.floor(Math.random() * 6)
        const myMovieData = { vieweddate: dateStr, myrating: rating }
        try {
            const res = await fetch(`${movieServerURL}/${movieData.imdbid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(myMovieData),
            })
            const data = await res.json()

            setMovieList(ml => ml.map(m => m.imdbid === data.imdbid ? data : m))
        } catch (error) {
            console.error('Set viewed error', error)
        }
    }

    return (
        <li className={`grid gap-2 grid-cols-[100px_1fr] items-center bg-gray-300 p-2 rounded-lg shadow-md ${movieData.is_deleted ? 'shadow-red-300' : ''}`}>
            <img src={movieData.poster} alt={movieData.title} className="w-full h-auto" />

            <div className="">
                <h4 className="text-sky-900 text-balance text-xl font-semibold mb-2 p-2">{movieData.title}</h4>
                <div className={`grid gap-2 items-end grid-cols-[3fr_1fr]`}>
                    <div className="rounded-md bg-gray-100 p-2">
                        <p className="text-gray-600"><strong>Released
                        </strong> {movieData?.yearstart}</p>
                        <p className="text-gray-600">
                            <strong>Ratings:</strong> {movieData?.imdbrating} / 10</p>
                        <p className="text-gray-600">
                            <strong>Duration:</strong> {movieData?.runtime} mins</p>
                        <p className="text-gray-600"><strong>Genre:</strong> {movieData.genre}</p>
                    </div>
                    {
                        movieData.vieweddate
                            ?
                            <div>
                                <p className="text-gray-600">
                                    <strong>Date of Watch:</strong>
                                    <br />{vDate.toLocaleDateString()}
                                </p>
                                <p className="text-gray-600">
                                    <strong>My rating:</strong><br />
                                    <span className="text-amber-500">{starRating}</span>
                                </p>
                            </div>
                            :
                            <div className="grid justify-center gap-2">
                                {
                                    !movieData.is_deleted
                                    ? <button onClick={handleRemoveBtn} className={`${btnStyle} bg-yellow-900`}>Remove</button>
                                    : <button onClick={handleRemoveBtn} className={`${btnStyle} bg-violet-900`}>Restore</button>
                                }
                                <button onClick={handleViewedBtn} className={btnStyle}>Viewed</button>
                            </div>
                    }
                </div>
            </div>
        </li>
    )
};

export default MovieCard;