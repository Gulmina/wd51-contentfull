// import { useEffect, useState } from 'react'
import { useState } from 'react'
import SearchResultList from '../components/SearchResultList';

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState(null);
    const [inputString, setInputString] = useState('');
    const [curPage, setCurPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // const apiKey = import.meta.env.VITE_OMDB_API_KEY
    const apiKey = import.meta.env.VITE_OMDB_API_KEY_II
    const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

    const borderStyle = "border border-gray-300 bg-sky-800 text-white px-4 py-2 rounded-md";

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
        e.preventDefault()
        fetchSearchResults(inputString)
    }

    const changePageHandler = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurPage(page)
            fetchSearchResults(inputString, page)
        }
    }

    return (
        <section className="container mx-auto p-4">
            <h2 className="text-3xl font-bold my-4 text-center">Search movie in OMDB</h2>
            <form onSubmit={searchFormHandler}  className="flex justify-start items-end gap-2 my-4">
                <label className="block">Search movie
                    <input
                        value={inputString}
                        onChange={e => setInputString(e.target.value)}
                        name="title" type="text"
                        placeholder="Enter the title or part of it"
                        className="w-80 block border border-gray-300 rounded-md px-4 py-2"
                    />
                </label>
                <button type="submit" className={borderStyle}>Search</button>
            </form>

            {
                searchResult
                && (
                    searchResult.Response === 'True'
                    ?   <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10">
                            <div>
                                <p className='my-4'>Total results: {searchResult.totalResults}</p>
                                <SearchResultList movieList={searchResult.Search} />
                                {totalPages > 1
                                    && <>
                                            <div className='my-4 flex gap-12 justify-between items-center'>
                                                <button inert={curPage <= 1 ? '' : null} onClick={() => changePageHandler(curPage - 1)} className={borderStyle}>Prev</button>
                                            <p> Page {curPage} of {totalPages}</p>
                                                <button inert={curPage >= totalPages ? '' : null} onClick={() => changePageHandler(curPage + 1)} className={borderStyle}>Next</button>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    :   <p>Error: {searchResult?.Error}</p>
                )
            }

        </section>
    )
}

export default SearchPage;