import MovieCard from "./MovieCard"

const MovieList = ({ mList, btnStyle, setMovieList, showDeleted }) => {


    return (
        <ul className="grid grid-cols-1 gap-6">
            {mList?.map(m => <MovieCard key={m.imdbid} movieObj={m} setMovieList={setMovieList} btnStyle={btnStyle} showDeleted={showDeleted} />)}
        </ul>
    )
};

export default MovieList