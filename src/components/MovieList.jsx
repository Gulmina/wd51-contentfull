import MovieCard from "./MovieCard"

const MovieList = ({ mList, btnStyle, setMovieList }) => {


    return (
        <ul className="grid grid-cols-1 gap-6">
            {mList?.map(m => <MovieCard key={m.imdbid} movieObj={m} setMovieList={setMovieList} btnStyle={btnStyle} />)}
        </ul>
    )
};

export default MovieList