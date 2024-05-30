import MovieCard from "./MovieCard";

const MovieList = ({ mList }) => {

    return (
        <ul className="grid grid-cols-1 gap-6">
            {mList?.map(m => <MovieCard key={m.id} movie={m} />)}
        </ul>
    )
};

export default MovieList;