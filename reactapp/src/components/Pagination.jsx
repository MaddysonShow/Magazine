// @ts-ignore
import React, {FC, memo} from 'react';
import {useSelector} from "react-redux";


const Pagination = memo(({onClick, pageCount, currentPage}) => {

    // console.log('paginationRender');

    if (isNaN(pageCount)) {return}
    function Count() {
        let temp = []
        let i = 0
        for (let i = 0; i < pageCount; i++) {
            temp.push(
            // last: and first: не работает!
                    <button key={i}
                            disabled={currentPage === i}
                        onClick={() => {onClick(i)}}
                        className={`
                        ${i == 0 && 'rounded-l-2xl'}
                        ${i == pageCount-1 && 'rounded-r-2xl'}
                        flex items-center justify-center px-4 h-10 leading-tight ${currentPage === i ? 'dark:text-red-400' : 'text-gray-400'} bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >{i + 1}</button>
            )
        }
        return temp
    }

    return (
        <div className='flex justify-center'>
            <nav className='mt-3'>
                <ul className="inline-flex -space-x-px text-base h-10">
                    {Count()}
                </ul>
            </nav>
        </div>
    );
})

export default Pagination;