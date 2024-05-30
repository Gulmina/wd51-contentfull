// import { useEffect, useState } from 'react'
import { useState } from 'react'
import SearchResultList from '../components/SearchResultList';

const SearchPage = () => {
    const [searchResult, setSearchResult] = useState(null)
    const [inputString, setInputString] = useState('')
    // const apiKey = import.meta.env.VITE_OMDB_API_KEY
    const apiKey = import.meta.env.VITE_OMDB_API_KEY_II
    const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}`

    const fetchSearchResults = async (searchString) => {
        const urlString = encodeURIComponent(searchString.trim().toLowerCase())
        try {
            const response = await fetch(`${apiURL}&s=${urlString}`)
            const data = await response.json()
            setSearchResult(data)
        } catch (error) {
            console.error(error)
        }
    }

    const searchFormHandler = (e) => {
        e.preventDefault()
        const value = e.target.title.value
        fetchSearchResults(value)
    }
    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setSearchResult([
    //             { title: 'The Shawshank Redemption', year: 1994 },
    //             { title: 'The Godfather', year: 1972 },
    //             { title: 'The Godfather: Part II', year: 1974 },
    //             { title: 'The Dark Knight', year: 2008 },
    //             { title: '12 Angry Men', year: 1957 },
    //         ])
    //     }, 3000)
    //     return () => {
    //         clearTimeout(timer)
    //     }    
    // }, [])

    return (
        <section className="container mx-auto p-4">
            <h2 className="text-3xl font-bold my-4 text-center">Search movie in OMDB</h2>
            <p className="my-2 text-end">It&apos;s not ready keep in touch</p>
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
                <button type="submit" className="border border-gray-300 bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
            </form>

            { searchResult
                ? <SearchResultList searchResult={searchResult} />
                : <p className="text-center">No results found</p>
            }

        </section>
    )
}

export default SearchPage;