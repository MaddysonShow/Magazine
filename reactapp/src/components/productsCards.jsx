// @ts-ignore
import React, {FC, useState} from 'react';
// import '../index.scss'
import '../styles.module/ProductCards.module.css'
import RatingStarsFunc from "./RatingStarsFuncAndMenu/RatingStarsFunc";
import FAC from "./FavouriteAndCart/FAC";
import {useNavigate} from "react-router-dom";



const ProductsCards = ({data})=> {
    // console.log('PCrender');

    const [forRerender, setRender] = useState(false)
    const navigate = useNavigate()
    const RatingStars = (data) => RatingStarsFunc(data)
    const {setFavourite, getFavourite, getCart, setCart} = FAC()
    const toSingleProduct = (e) => {
        e.stopPropagation()
        navigate(`/product/?id=${data.id}`)
    }

    return (
        <div className={'shadow-lg flex flex-col items-center text-center border-2 outline-1 outline-cyan-500 outline outline-offset-1 rounded border-indigo-500 w-[90%] h-[90%] pt-4 pb-14 mx-1 my-2'}>
            <div className={'max-h-[220px] min-h-[219px] flex justify-center'}>
                <img src={data.image} alt={'LOGOTYPE'} className={'w-auto h-auto object-contain'}/>
            </div>
            <div>
                <h2 className={'text-lg accent-red-950 line-clamp-1 px-1 hover:cursor-pointer px-3'} style={{height: '28px'}}
                    onClick={(e) => {toSingleProduct(e)}}
                >{data.title}</h2>
                <h3>{data.category}</h3>
            </div>
            <div className={'mb-auto ml-auto mr-2 flex relative mt-2'}>
                {RatingStars(data.rate)}
                <div className={'mr-3 flex items-center hover:cursor-pointer'}
                onClick={() => {
                    setRender(forRerender ? false : true)
                    setFavourite(data.id)
                }}>
                    <img src={getFavourite(data.id)} alt={'like'} className={'w-5'}/></div>
                <div className={'mr-3 flex items-center hover:cursor-pointer'}
                onClick={() => {
                    setRender(forRerender ? false : true)
                    setCart(data.id)
                }}>
                    <img src={getCart(data.id)} alt={'pull in cart'} className={'w-5'}/></div>
            </div>
        </div>
    );
};

export default ProductsCards;