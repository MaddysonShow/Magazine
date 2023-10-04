import React, {useEffect, useState} from 'react';
import {clearFavState, fetchFavourite} from "../Redux/reducers";
import {useDispatch, useSelector} from "react-redux";
import {FetchLogic} from "./fetching/ajax";
import FavouriteProdCards from "./favouriteProdCards";

const Favourites = () => {
    const favourite = useSelector(state => state.redFav)
    const [prods, setProds] = useState(localStorage.favourite ? JSON.parse(localStorage.favourite) ?? [] : [])
    // console.log(favourite);
    const dispatch = useDispatch()
    const {getData} = FetchLogic()
    useEffect(() => {
        if (prods.length == 0) return;
        let temporary = []
        for (let i = 0; i < prods.length; i++) {
            getData(`api/product/${prods[i]}`)
                .then(data => data.json())
                .then(data => temporary.push(data))
                .catch(err => console.log(err.toString()))
        }
        setTimeout(() => {
            temporary.length !== 0 ? dispatch(fetchFavourite(temporary)) : console.log('Empty Favourite', temporary);
        }, 1000)

    }, [prods.length])

    return (
        <div className={'justify-center flex flex-col items-center min-h-[100vh]'}>
            {favourite.data.length == 0 && <h1>No Favourite Products</h1>}
            {
                favourite.data.map((el) => <FavouriteProdCards key={el.id} data={el}/>)
            }
        </div>
    );
};

export default Favourites;