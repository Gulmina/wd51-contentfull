const SearchResultList = ({ movieList }) => {
    
    return (
        <ul className="grid gap-1">
            {movieList.map(movie => {       
                console.log('Movie', movie)
                
                return (
                    <li key={movie.imdbID} className="grid gap-4 grid-cols-[9ch_1fr] items-center bg-white px-2 py-1 rounded-md shadow-sm">
                        <div className="grid justify-items-center">
                            <div className="text-gray-500">{movie.Year}</div>
                            <div className="text-xs"> {movie.Type}</div>
                        </div>
                        <div className="font-semibold text-balance"> {movie.Title}</div>
                    </li>
                )
            })}
        </ul>  
    )
}

export default SearchResultList;