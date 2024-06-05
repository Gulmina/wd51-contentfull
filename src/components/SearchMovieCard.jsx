const SearchMovieCard = ({ movieData }) => {

    const fields = {
        Title: { show: true, hideTitle: true },
        Year: { show: true, hideTitle: true },
        Runtime: { show: true },
        Genre: { show: true },
        Director: { show: true },
        Writer: { show: true },
        Actors: { show: true },
        Plot: { show: true, hideTitle: true },
        Rated: { show: true },
        Released: { show: true },
        Ratings: { show: false },
        Language: { show: true },
        Country: { show: true },
        Awards: { show: true },
        Poster: { show: false },
        Metascore: { show: true },
        imdbRating: { show: true },
        imdbVotes: { show: true },
        imdbID: { show: false },
        Type: { show: true },
        DVD: { show: false },
        BoxOffice: { show: true },
        Production: { show: false },
        Website: { show: false },
        Response: { show: false },
    }

    return (
        <div className="p-4">
            {Object.entries(fields).map(([key, { show, hideTitle }]) => (
                show && (
                    <p key={key}>
                        {hideTitle ? movieData[key] : (<><strong>{key}:</strong> {movieData[key]}</>)}
                    </p>
                )
            ))}
        </div>
    )
}

export default SearchMovieCard