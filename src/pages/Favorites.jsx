import MovieList from "../components/MovieList";

const Favorites = ({ favMovies }) => {
    return (
        <section className="container mx-auto p-4">
            <h2 className="text-3xl font-bold my-4 text-center">List of the favorite movies</h2>
            <p className="my-2 text-end">(watched and rated ≥ 4 stars)</p>
            <MovieList mList={favMovies} />
        </section>
    )
}

export default Favorites;