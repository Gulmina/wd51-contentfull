import MovieList from "../components/MovieList";

const Home = ({ movieList, btnStyle, setMovieList, showDeleted, setShowDeleted }) => {
    const fBtnStyles = 'border bg-white rounded shadow py-1 px-2 text-gray-300'
    const waitList = movieList?.filter(movie => !movie.vieweddate)
    const viewedList = movieList?.filter(movie => movie.vieweddate)
   
    return (
        <div className="container mx-auto p-4">
            <div>
                <label>
                    <input type="checkbox" checked={showDeleted} onChange={() => setShowDeleted(s => !s)} />
                    Show deleted movies
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-sky-800">Waiting List — {waitList?.length} items</h2>
                    <p className="flex justify-end items-center gap-2 my-2 text-gray-300">Rating:
                        <button className={fBtnStyles}> all</button>
                        <button className={fBtnStyles}> &gt;7</button>
                        <button className={fBtnStyles}> &gt;8</button>
                        <button className={fBtnStyles}> &gt;9</button>
                    </p>
                    <MovieList mList={waitList} setMovieList={setMovieList} btnStyle={btnStyle} showDeleted={showDeleted} />
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-sky-800">Viewed Movies — {viewedList?.length} items</h2>
                    <p className="flex justify-end items-center gap-2 my-2 text-gray-300">My rating:
                        <button className={fBtnStyles}> all</button>
                        <button className={fBtnStyles}> &gt;3</button>
                        <button className={fBtnStyles}> &gt;4</button>
                        <button className={fBtnStyles}> =5</button>
                    </p>
                    <MovieList mList={viewedList} />
                </section>
            </div>
        </div>
    )
}

export default Home;