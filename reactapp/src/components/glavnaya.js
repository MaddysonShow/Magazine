import React, {useState} from 'react';
import ProductsCards from "./productsCards.tsx";
import {useFindLogic} from "./Logic/FindLogic";
import Pagination from "./Pagination.tsx";
import Loading from "./UI/Loading";
import {maxCount} from "../DevProps";

function Glavnaya() {
    // console.log('renderGlavnaya');

    const [page, setPage] = useState(0)
    const [lastTemporary, setlastTemporary] = useState({value: [], totalItemsCount: 0})
    const [showMore, setShowMore] = useState(false)

    const {temporary: data, isLoading, Error} = useFindLogic(page, setPage, lastTemporary, setlastTemporary)

    let pageCount = Math.ceil(+data?.totalItemsCount / maxCount) ?? 0

    function changePage(pageSet) {
        // console.log(pageSet)
        setPage(pageSet)
        setlastTemporary({value: [], totalItemsCount: 0})
    }

    function more() {
        setPage(page+1)
        setlastTemporary({value: data.value, totalItemsCount: data.totalItemsCount, showMore: true})
    }

    return (
        <div className='min-h-[100vh]'>
            {data.value?.length === 0 && <h1 className='flex justify-center mt-10 text-lg'>Nothing found :(</h1>}
            {isLoading && <div className={'flex justify-center'}><Loading/></div>}
            {Error && <div className={'flex justify-center text-lg text-red-500'}>An error was occured</div>}
            {data?.value && !isLoading && <Pagination onClick={changePage} pageCount={pageCount ?? 0} currentPage={page}/>}

            <div className={'grid-cols-3 grid justify-items-center'}>
                {data.value?.map((el) => {
                    return <ProductsCards data={el} key={el.id}/>
                })}
            </div>
            {data?.value && !isLoading && !Error && pageCount > (page + 1) &&
                <div className='flex justify-center'>
                <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={more}
                >Show more</button>
            </div>}
        </div>
    )
}

export default Glavnaya;
