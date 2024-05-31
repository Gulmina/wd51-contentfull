const MovieCard = ({ movie }) => {
    
    // console.log('Movie', movie)
    const actorsList = movie.actors.join(', ');
    const genreList = movie.genre.join(', ');
    const starRating = Array(5).fill().map((_, i) => movie.my_rating > i ? "★" : "☆").join(" ")

    return (
        <li className="bg-gray-300 p-2 rounded-lg shadow-md">
            <h4 className="text-balance text-xl font-semibold mb-2 p-2">{movie.title}</h4>
            <div className={`grid gap-4 items-end ${movie.watched_date ? 'grid-cols-[2fr_1fr]'  : '' }`}>
                <div className="rounded-md bg-gray-100 p-2">
                    <p className="text-gray-600"><strong>Released
                        Date:</strong> {movie.realeased_date}</p>
                    <p className="text-gray-600">
                        <strong>Ratings:</strong> {movie.ratings[0]}/{movie.ratings[1]}</p>
                    <p className="text-gray-600">
                        <strong>Director:</strong> {movie.director}</p>
                    <p className="text-gray-600">
                        <strong>Actors:</strong> {actorsList}</p>
                    <p className="text-gray-600">
                        <strong>Duration:</strong> {movie.duration} mins</p>
                    <p className="text-gray-600"><strong>Genre:</strong> {genreList}</p>
                </div>
                {
                    movie.watched_date
                    &&
                    <div>
                        <p className="text-gray-600"><strong>Date of
                            Watch:</strong><br/>{movie.watched_date}</p>
                        <p className="text-gray-600">
                                <strong>My rating:</strong><br/><span className="text-amber-500">{ starRating }</span> </p>
                        <p className="text-gray-600">
                            <strong>Feedback:</strong><br/>{movie.feedback}</p>
                    </div>
                }
            </div>
        </li>
    )
};

export default MovieCard;