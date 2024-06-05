const SearchForm = ({ searchFormHandler, inputString, setInputString, btnStyle }) => {

    return (
        <form onSubmit={searchFormHandler} className="flex justify-start items-end gap-2 my-4">
            <label className="block">Search movie
                <input
                    value={inputString}
                    onChange={e => setInputString(e.target.value)}
                    name="title" type="text"
                    placeholder="Enter the title or part of it"
                    className="w-80 block border border-gray-300 rounded-md px-4 py-2"
                />
            </label>
            <button type="submit" className={btnStyle}>Search</button>
        </form>
    )
}

export default SearchForm