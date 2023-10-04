import React, {useState} from 'react';
import FAC from "./FavouriteAndCart/FAC";
import RatingStarsFunc from "./RatingStarsFuncAndMenu/RatingStarsFunc";

const FavouriteProdCards = ({data}) => {
    const {setFavourite, getFavourite, getCart, setCart} = FAC()
    const [forRerender, setRender] = useState(false)

    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg mb-4 mt-4">
            <img className="w-full" src={data.image} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.title}</div>
                    <p className="text-gray-700 text-base">
                        {data.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {data.price}</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Count: {data.count}</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 flex justify-center">
                        {RatingStarsFunc(data.rate)}
                    </span>
                    <span
                        onClick={() => {
                            setRender(prevState => !prevState)
                            setFavourite(data.id)}}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:cursor-pointer">
                        <img src={getFavourite(data.id)} alt={'like'} className={'w-5'}/>
                    </span>
                    <span
                        onClick={() => {
                            setRender(prevState => !prevState)
                            setCart(data.id)
                        }}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:cursor-pointer">
                        <img src={getCart(data.id)} alt={'cart'} className={'w-5'}/>
                    </span>
                </div>
        </div>
    )
}

export default FavouriteProdCards;