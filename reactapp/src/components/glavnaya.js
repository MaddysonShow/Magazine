import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductsCards from "./productsCards";
import FindLogic from "./Logic/FindLogic";

function Glavnaya() {
    const {temporary} = FindLogic()
    console.log(temporary);
    console.log('renderGlavnaya')

    return (
        <div className='min-h-[100vh]'>
            {temporary.data.length === 0 && <h1 className='flex justify-center mt-10 text-lg'>Nothing found :(</h1>}
            <div className={'grid-cols-3 grid justify-items-center'}>
                {temporary.data.map((el) => {
                    return <ProductsCards data={el} key={el.id}/>
                })}
            </div>
        </div>
    )
}

export default Glavnaya;
