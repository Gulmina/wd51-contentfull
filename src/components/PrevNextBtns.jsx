const PrevNextBtns = ({ changePageHandler, totalPages, curPage, btnStyle }) => {

    return (
        <div className='my-4 flex gap-12 justify-between items-center'>
            <button inert={curPage <= 1 ? '' : null} onClick={() => changePageHandler(curPage - 1)} className={btnStyle}>Prev</button>
            <p> Page {curPage} of {totalPages}</p>
            <button inert={curPage >= totalPages ? '' : null} onClick={() => changePageHandler(curPage + 1)} className={btnStyle}>Next</button>
        </div>
    )
}

export default PrevNextBtns