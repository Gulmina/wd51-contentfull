const MovieCard = ({ movieObj, setCfList, btnStyle }) => {

    const movie = movieObj.fields
    const starRating = Array(5).fill().map((_, i) => movie.myRating > i ? "★" : "☆").join(" ")
    const imgParams = '?fm=webp&fit=pad&w=100'
    const imgData = movie.picture.fields
    const imgUrl = `https:${imgData.file.url}${imgParams}`

    const handleRemoveBtn = () => {
        setCfList(cfl => cfl.filter(item => item.sys.id !== movieObj.sys.id))
    }

    const handleViewedBtn = () => {
        const date = new Date()
        const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${(date.getDate().toString().padStart(2, '0'))}`
        const rating = Math.floor(Math.random() * 6)
        
        setCfList(cfl => cfl.map(item => item.sys.id === movieObj.sys.id
            ? { ...item, fields: { ...item.fields, viewedDate: dateStr, myRating: rating } }
            : item))
    }

    return (
        <li className="grid gap-2 grid-cols-[100px_1fr] items-center bg-gray-300 p-2 rounded-lg shadow-md">
            <img src={imgUrl} alt={imgData.title} className="w-full h-auto" />

            <div className="">
                <h4 className="text-sky-900 text-balance text-xl font-semibold mb-2 p-2">{movie.movieName}</h4>
                <div className={`grid gap-2 items-end grid-cols-[3fr_1fr]`}>
                    <div className="rounded-md bg-gray-100 p-2">
                        <p className="text-gray-600"><strong>Released
                            Date:</strong> {movie?.year}</p>
                        <p className="text-gray-600">
                            <strong>Ratings:</strong> {movie?.ratings} / 10</p>
                        <p className="text-gray-600">
                            <strong>Duration:</strong> {movie?.durationOfMovie} mins</p>
                        <p className="text-gray-600"><strong>Genre:</strong> {movie.genre}</p>
                    </div>
                    {
                        movie.viewedDate
                            ?
                            <div>
                                <p className="text-gray-600">
                                    <strong>Date of Watch:</strong>
                                    <br />{movie.viewedDate}
                                </p>
                                <p className="text-gray-600">
                                    <strong>My rating:</strong><br />
                                    <span className="text-amber-500">{starRating}</span>
                                </p>
                            </div>
                            :
                            <div className="grid justify-center gap-2">
                                <button onClick={handleRemoveBtn} className={`${btnStyle} bg-rose-400`}>Remove</button>
                                <button onClick={handleViewedBtn} className={btnStyle}>Viewed</button>
                            </div>
                    }
                </div>
            </div>
        </li>
    )
};

export default MovieCard;