const SearchResultList = ({ searchResult }) => {
    console.log('Movie', searchResult)
    
    return (
        
            searchResult.Response === 'True'
            ?
                <>
                    <p>
                        <span>Total results: {searchResult.totalResults}</span>
                        {searchResult.totalResults > 10 && <span> Page 1 of {Math.ceil(searchResult.totalResults / 10)}</span>}
                    </p>
                    <ul>
                        {searchResult.Search.map(movie => {                           
                            
                            return (
                                <li key={movie.imdbID}>
                                    <span className="text-gray-500">{movie.Year}</span>
                                    <span className="font-semibold"> {movie.Title}</span>
                                    <span className="text-sm"> {movie.Type}</span>
                                </li>
                            )
                        })}
                    </ul>
                </>
            :
                <p>Error: {searchResult.Error}</p>        
    )
}

export default SearchResultList;