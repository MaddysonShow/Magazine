import React, {useEffect, useState} from 'react';
import {fetchFavourite} from "../Redux/reducers";
import {useDispatch, useSelector} from "react-redux";
import FavouriteProdCards from "./favouriteProdCards";
import {devURL} from "../DevProps";
import {getData} from "./fetching/fetch";

const Favourites = () => {
    const favourite = useSelector(state => state.redFav)
    const [prods, setProds] = useState(localStorage.favourite ? JSON.parse(localStorage.favourite) ?? [] : [])
    // console.log(favourite);
    const dispatch = useDispatch()

    useEffect(() => {
            if (prods.length == 0) return;
            let temporary = []
            let iter = 0
            for (let i = 0; i < prods.length; i++) {
                getData(`${devURL}api/product/${prods[i]}`)
                    .then(data => data.json())
                    .then(data => temporary.push(data))
                    .catch(err => console.log(err.toString()))
                    .finally(() => {
                        iter++;
                        if (iter === temporary.length) onFinaly();
                    })
            }

            function onFinaly() {
                if (temporary.length === prods.length) {
                    // console.log(iter, prods.length)
                    if (iter === prods.length) {
                        // console.log(temporary);
                        temporary.length !== 0 && dispatch(fetchFavourite(temporary))
                        // set load false
                    }
                }
            }
        }, []
    )

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