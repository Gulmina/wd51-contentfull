const MovieCard = ({ movie }) => {
    
    // console.log('Movie', movie)
    const actorsList = movie.actors.join(', ');
    const genreList = movie.genre.join(', ');

    return (
        <li className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">{movie.title}</h4>
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
            {
                movie.watched_date
                &&
                <>
                    <hr/>
                    <p className="text-gray-600"><strong>Date of
                        Watch:</strong> {movie.watched_date}</p>
                    <p className="text-gray-600">
                        <strong>My rating:</strong> {movie.my_rating}</p>
                    <p className="text-gray-600">
                        <strong>Feedback:</strong> {movie.feedback}</p>
                </>
            }
        </li>
    )
};

export default MovieCard;