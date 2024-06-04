import MovieCard from "./MovieCard"

const MovieList = ({ mList }) => {

    return (
        <ul className="grid grid-cols-1 gap-6">
            {mList?.map(m => <MovieCard key={m.sys.id} movie={m.fields} />)}
        </ul>
    )
};

export default MovieList;