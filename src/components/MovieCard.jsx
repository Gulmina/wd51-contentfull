const MovieCard = ({ movie }) => {

    // console.log('Movie', movie)
    const starRating = Array(5).fill().map((_, i) => movie.myRating > i ? "★" : "☆").join(" ")
    const imgParams = '?fm=webp&fit=pad&w=100'
    const imgData = movie.picture.fields
    console.log('Picture', imgData)
    const imgUrl = `https:${imgData.file.url}${imgParams}`

    return (
        <li className="grid gap-2 grid-cols-[100px_1fr] items-center bg-gray-300 p-2 rounded-lg shadow-md">
            <img src={imgUrl} alt={imgData.title} className="w-full h-auto" />

            <div className="">
                <h4 className="text-sky-900 text-balance text-xl font-semibold mb-2 p-2">{movie.movieName}</h4>
                <div className={`grid gap-4 items-end ${movie.viewedDate ? 'grid-cols-[2fr_1fr]' : ''}`}>
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
                        &&
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
                    }
                </div>
            </div>
        </li>
    )
};

export default MovieCard;