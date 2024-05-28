import MovieList from "./MovieList";

const Main = ({ allMovies }) => {
    const waitList = allMovies?.filter(movie => !movie.watched_date);
    const watchedList = allMovies?.filter(movie => movie.watched_date);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Movie Lists</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h3 className="text-2xl font-semibold mb-4">Waiting List</h3>
                    <p className="flex justify-end items-center gap-2 my-2">Rating:
                        <button className="border bg-white rounded shadow-md py-1 px-2"> all</button>
                        <button className="border bg-white rounded shadow-md py-1 px-2"> &gt;7</button>
                        <button className="border bg-white rounded shadow-md py-1 px-2"> &gt;8</button>
                        <button className="border bg-white rounded shadow-md py-1 px-2"> &gt;9</button>
                    </p>
                    <MovieList mList={waitList} />
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">Watched Movies</h3>
                    <p className="flex justify-end items-center gap-2 my-2">My rating:
                        <button className="border bg-white rounded shadow-md py-1 px-2"> all</button>
                        <button className="border bg-white rounded shadow-md py-1 px-2"> &gt;3</button>
                        <button className="border bg-white rounded shadow-md py-1 px-2"> &gt;4</button>
                        <button className="border bg-white rounded shadow-md py-1 px-2"> =5</button>
                    </p>
                    <MovieList mList={watchedList} />    
                </section>
            </div>
        </div>
    )
}

export default Main;