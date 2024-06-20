// import { useEffect, useState } from 'react'
import { useState } from 'react'
import SearchResultList from '../components/SearchResultList';
import SearchForm from '../components/SearchForm';
import PrevNextBtns from '../components/PrevNextBtns';
import SearchMoviePreview from '../components/SearchMoviePreview';

const SearchPage = ({ setMovieList, btnStyle }) => {
    const [searchResult, setSearchResult] = useState(null);
    const [inputString, setInputString] = useState('');
    const [curPage, setCurPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState('');

    // const apiKey = import.meta.env.VITE_OMDB_API_KEY
    const apiKey = import.meta.env.VITE_OMDB_API_KEY_II
    const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

    const fetchSearchResults = async (searchString, page = 1) => {
        const urlString = encodeURIComponent(searchString.trim().toLowerCase())
        const urlPage = page > 1 ? `&page=${page}` : ''
        try {
            const response = await fetch(`${apiURL}&s=${urlString}${urlPage}`)
            const data = await response.json()
            setSearchResult(data)
            if  (data.Response === 'True' && data.totalResults > 10) {
                setTotalPages(Math.ceil(data.totalResults / 10))
            }
        } catch (error) {
            console.error(error)
        }
    }

    const searchFormHandler = (e) => {
        fetchSearchResults(inputString)
        setCurPage(1)
        setSelectedMovie('')
        e.preventDefault()
    }

    const changePageHandler = (page) => {
        if (page > 0 && page <= totalPages) {
            fetchSearchResults(inputString, page)
            setCurPage(page)
            setSelectedMovie('')
        }
    }

    return (
        <section className="container mx-auto p-4">
            <h2 className="text-3xl font-bold my-4 text-center">Search movie in OMDB</h2>
            <SearchForm
                searchFormHandler={searchFormHandler}
                inputString={inputString}
                setInputString={setInputString}
                btnStyle={btnStyle}
            />

            {
                searchResult
                && (
                    searchResult.Response === 'True'
                    ?   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className='my-4'>Total results: {searchResult.totalResults}</p>
                                <SearchResultList movieList={searchResult.Search} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
                                {totalPages > 1
                                    && <PrevNextBtns
                                        changePageHandler={changePageHandler}
                                        totalPages={totalPages}
                                        curPage={curPage}
                                        btnStyle={btnStyle}
                                    />
                                }
                            </div>
                            <SearchMoviePreview imdbID={selectedMovie} setSelectedMovie={setSelectedMovie} setMovieList={setMovieList}  btnStyle={btnStyle} />
                        </div>
                    :   <p>Error: {searchResult?.Error}</p>
                )
            }
        </section>
    )
}

export default SearchPage;