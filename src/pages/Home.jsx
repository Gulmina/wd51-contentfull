import MovieList from "../components/MovieList";

const Home = ({ cfMovies }) => {
    const fBtnStyles = 'border bg-white rounded shadow py-1 px-2'
    const waitList = cfMovies?.filter(movie => !movie.fields.viewedDate);
    const viewedList = cfMovies?.filter(movie => movie.fields.viewedDate);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10">
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Waiting List</h2>
                    <p className="flex justify-end items-center gap-2 my-2">Rating:
                        <button className={fBtnStyles}> all</button>
                        <button className={fBtnStyles}> &gt;7</button>
                        <button className={fBtnStyles}> &gt;8</button>
                        <button className={fBtnStyles}> &gt;9</button>
                    </p>
                    <MovieList mList={waitList} />
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4">Viewed Movies</h2>
                    <p className="flex justify-end items-center gap-2 my-2">My rating:
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