import React, {memo, useEffect, useRef} from 'react';
import styles from '../../styles.module/RightMenu.module.css'
import {useSelector} from "react-redux";
import CatalogEntry from "../../CatalogRoute/CatalogRoute";
import {useNavigate} from "react-router-dom";

const RightMenu = ({isShown}) => {
        const state = useSelector(state1 => state1.Events)
        const catalog = CatalogEntry()
        // console.log(state);
        // console.log(isShown)
        const navigate = useNavigate()
        function NavTo(category) {
            navigate(`/main/?category=${category}`)
        }

        // Динамическое меню, берем из карточек Фетченных продуктов их категорию и отрисовываем в боковом меню, а в Поисковик MyInput
        // выводим в том числе и категории и сами совпадающие карточки товаров

        return (
            <div
                className={!state.showCatalog ? styles.rightHidden : isShown === 'down' ? styles.rightShown : styles.rightStickyShow}>
                <div
                    className={state.showCatalog ? "bg-transparent w-[100%] rounded-lg flex flex-col text-sm py-4 px-2 text-gray-500 shadow-lg" : 'hidden'}>
                    <div className="flex justify-center py-1 px-2 rounded hover:cursor-default">
                        <div>Menu</div>
                    </div>
                    <hr className="my-3 border-gray-300"/>
                    {
                        catalog.map((el, ind) => {
                            return (<div className="flex hover:bg-gray-100 py-1 px-2 rounded" key={el+ind}
                            onClick={()=> {NavTo(el)}}>
                                <div className="w-8 text-gray-900"><span className="text-xs">{ind+1}</span></div>
                                <div># {el}</div>
                            </div>)
                        })
                    }

                    {/*<div className="flex hover:bg-gray-100 py-1 px-2 rounded">*/}
                    {/*    <div className="w-8 text-gray-900"><span className="text-xs">1</span></div>*/}
                    {/*    <div># Heading 1</div>*/}
                    {/*</div>*/}
                    <hr className="my-3 border-gray-300"/>
                </div>
            </div>
        );
    }
;

export default RightMenu;