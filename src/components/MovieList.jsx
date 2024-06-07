import MovieCard from "./MovieCard"

const MovieList = ({ mList, btnStyle, setCfList }) => {


    return (
        <ul className="grid grid-cols-1 gap-6">
            {mList?.map(m => <MovieCard key={m.sys.id} movieObj={m} setCfList={setCfList} btnStyle={btnStyle} />)}
        </ul>
    )
};

export default MovieList