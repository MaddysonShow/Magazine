import React, {useMemo, useState} from 'react';
import {Debounce} from '../Logic/Debouncer'
import FastFindLogic from "../Logic/FastFindLogic";
import {useNavigate} from "react-router-dom";

const MyInput = ({direction}) => {
    const [search, setSearch] = useState('')
    const debounce = Debounce(search)
    const FastTemporary = FastFindLogic(debounce)
    const navigate = useNavigate()

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const uniqCatalog = useMemo(() => {
        const temp = []
        for (let i = 0; i < FastTemporary.data.length; i++) {
            if (!temp.includes(FastTemporary.data[i].category)) {
                temp.push(FastTemporary.data[i].category)
            }
        }
        return temp
    }, [debounce])

    const FastItems = useMemo(() => {
        const temp = []
        for (let i = 0; i < FastTemporary.data.length; i++) {
            temp.push([FastTemporary.data[i].title, FastTemporary.data[i].id])
        }
        return temp
    }, [debounce])


    const find = (e, searchCategory, singleProduct, globalSearch) => {
        e.preventDefault()
        if (singleProduct) {
            navigate(`/product/?id=${singleProduct}`)
        } else if (searchCategory) {
            navigate(`/main/?category=${searchCategory}`)
            // при клике мы должны переместиться в каталог catalog?=jewelery
        } else {
            navigate(`/main/?search=${globalSearch}`)
        }
        /// ПРИ ИЗМЕНЕНИИ СТЕЙТА (search) FindLogic получает строку запроса который сортирует массив продуктов без мутации основного массива//
        // Алг. поиска задействованы только локально, без вызова в Бэк и БД!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        setSearch('') // ? 50/50 т.к. условие закрытия и чтобы вернуть несортированный массив приходится нажимать поиск
    }

    return (
        <form className={'flex ml-auto'}>
            <div className="flex">
                <div className="relative w-[400px]">
                    <input type="search"
                           className={debounce.length < 2 ? "rounded-lg block p-2.5 w-full z-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                               : "rounded-t-lg block p-2.5 w-full z-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"}
                           placeholder="Search T-shirt, jewelery, MajorBugs and more..." required value={search}
                           onChange={(e) => onChange(e)}
                    />
                    <button type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={(e) => {
                                find(e, null, null, search)
                            }}>
                        <div className={'max-h-md'}>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    </button>

                    {/*УСЛОВИЕ ПО КОТОРОМУ ОТКРОЕТСЯ ВЫПАДАЮЩИЙ СПИСОК! стоит добавить стейт*/}

                    {search.length > 2 &&
                        <div className='absolute w-[100%] justify-center flex flex flex-col'>
                            {
                                // TITLE PRODUCTS//////////////////////////////////////////
                                FastItems.map((el, ind) => {
                                    return <span className={direction == 'up' ?
                                        'p-2 bg-gray-700 bg-opacity-50 justify-center text-gray-50 text-md border-1 border border-gray-300 border-opacity-50 dark:border-l-gray-700  dark:border-gray-600 line-clamp-1 hover:cursor-pointer'
                                        : 'p-2 bg-gray-700 justify-center text-gray-50 text-md border-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-l-gray-700  dark:border-gray-600 dark:focus:border-blue-500 line-clamp-1 hover:cursor-pointer'}
                                                 onClick={(e) => {
                                                     console.log(el);
                                                     find(e, null, el[1])
                                                     // ТУТ НАДО ЧТОБЫ ЮЗЕР ШЕЛ СРАЗУ НА ЕДИНИЧНЫЙ ТОВАР
                                                 }}
                                                 key={ind + el}>{el[0]}</span>
                                })}
                            {
                                // УНИКАЛЬНЫЕ ИМЕНА КАТЕГОРИЙ///////////////////////////
                                uniqCatalog.map((el, ind) => {
                                    return <span className={direction == 'up' ?
                                        'p-2 bg-gray-700 bg-opacity-50 justify-center text-gray-50 text-md border-1 border border-gray-300 border-opacity-50 dark:border-l-gray-700  dark:border-gray-600 line-clamp-1 hover:cursor-pointer'
                                        : 'p-2 bg-gray-700 justify-center text-gray-50 text-md border-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-l-gray-700  dark:border-gray-600 dark:focus:border-blue-500 line-clamp-1 hover:cursor-pointer'}
                                                 onClick={(e) => {
                                                     console.log(el);
                                                     find(e, el)
                                                 }}
                                                 key={ind + el}>Category: {el}</span>
                                })
                            }

                        </div>
                    }
                </div>

            </div>
        </form>
    )
}

export default MyInput;