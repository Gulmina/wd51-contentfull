const SearchResultList = ({ movieList, selectedMovie, setSelectedMovie }) => {
    
    return (
        <ul className="grid gap-1">
            {movieList.map(movie => {       
                
                return (
                    <li key={movie.imdbID} >
                        <button
                            className={`
                                grid gap-4 grid-cols-[9ch_1fr] min-w-full items-center px-2 py-1 rounded-md shadow-sm
                                ${selectedMovie === movie.imdbID ? 'bg-sky-200' : 'bg-white'}            }
                            `}
                            onClick={() => setSelectedMovie(movie.imdbID)}
                        >
                            <div className="grid justify-items-center">
                                <div className="text-gray-500">{movie.Year}</div>
                                <div className="text-xs">{movie.Type}</div>
                            </div>
                            <div className="text-start font-semibold text-balance">{movie.Title}</div>
                        </button>
                    </li>
                )
            })}
        </ul>  
    )
}

export default SearchResultList;