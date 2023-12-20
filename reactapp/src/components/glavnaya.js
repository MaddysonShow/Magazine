import React, {useState} from 'react';
import ProductsCards from "./productsCards.jsx";
import {useFindLogic} from "./Logic/FindLogic";
import Pagination from "./Pagination.jsx";
import Loading from "./UI/Loading";
import {maxCount} from "../DevProps";
import './style.css'
import product1 from '../media/product-header.png'


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
        setPage(page + 1)
        setlastTemporary({value: data.value, totalItemsCount: data.totalItemsCount, showMore: true})
    }


    return (
        // <div className='min-h-[100vh]'>
        //     {data.value?.length === 0 && <h1 className='flex justify-center mt-10 text-lg'>Nothing found :(</h1>}
        //     {isLoading && <div className={'flex justify-center'}><Loading/></div>}
        //     {Error && <div className={'flex justify-center text-lg text-red-500'}>An error was occured</div>}
        //     {data?.value && !isLoading && <Pagination onClick={changePage} pageCount={pageCount ?? 0} currentPage={page}/>}
        //
        //     <div className={'grid-cols-3 grid justify-items-center'}>
        //         {data.value?.map((el) => {
        //             return <ProductsCards data={el} key={el.id}/>
        //         })}
        //     </div>
        //     {data?.value && !isLoading && !Error && pageCount > (page + 1) &&
        //         <div className='flex justify-center'>
        //         <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        //         onClick={more}
        //         >Show more</button>
        //     </div>}
        // </div>
        <div>
        <div id="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-md-none d-block">
                        <div className="header-img">
                            <img src={product1}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-content">
                            <h1>Муфельные<br/> <span>печи</span></h1>
                            <p>
                                Муфельные печи собстенной разработки, Российская компонентная база!
                            </p>
                            <a className="btn" href="https://aquaman-msk.ru/">Купить</a>
                        </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                        <div className="header-img">
                           <img src={product1} alt="Product Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div id="feature-mini">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3 col-sm-6">
                    <div className="feature-item">
                        <i className="fas fa-fire"></i>
                        <h3>Теплоизоляция</h3>
                        <p>Лучшая на рынке</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="feature-item">
                        <i className="fas fa-terminal"></i>
                        <h3>Управление</h3>
                        <p>Встроенный контроллер</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="feature-item">
                        <i className="fas fa-bolt"></i>
                        <h3>Мощность</h3>
                        <p>100кВт</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="feature-item">
                        <i className="fa fa-gamepad"></i>
                        <h3>Что-то еще</h3>
                        <p>И еще что то</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            <div id="feature">
                <div className="container">
                    <div className="section-header">
                        <p>Лучшие</p>
                        <h1>технологии</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="product-feature">
                                <div className="product-content">
                                    <h2>Легкое управление</h2>
                                    <p>Ступенчатые терморегуляторы и классические</p>
                                </div>
                                <div className="product-icon">
                                    <i className="fas fa-terminal"></i>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-content">
                                    <h2>Температура</h2>
                                    <p>Стабильное поддержание температуры</p>
                                </div>
                                <div className="product-icon">
                                    <i className="fas fa-fire"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-img">
                                <img src={product1} alt="Product Image"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-feature">
                                <div className="product-icon">
                                    <i className="fas fa-desktop"></i>
                                </div>
                                <div className="product-content">
                                    <h2>Мониторинг</h2>
                                    <p>Возможность мониторинга и управления с ПК</p>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <div className="product-content">
                                    <h2>Материалы</h2>
                                    <p>Лучшие материалы на рынке России</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="process">
                <div className="container">
                    <div className="section-header">
                        <p>Процесс</p>
                        <h1>установки</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="process-col">
                                <i className="fa fa-plug"></i>
                                <h2>Подключи</h2>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="process-col">
                                <i className="fa fa-sliders-h"></i>
                                <h2>Сконфигурируй</h2>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="process-col">
                                <i className="fa fa-check"></i>
                                <h2>Твори</h2>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        )
}

export default Glavnaya;
