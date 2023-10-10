import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Glavnaya from "./components/glavnaya";
import Favourites from "./components/Favourites";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import {fetchProducts} from "./Redux/reducers";
import {useDispatch} from "react-redux";
import FirstAlarm from "./components/FirstAlarm";
import SingleItem from "./components/SingleItem";
import {Fetching} from "./components/fetching/Fetching";
import Loading from "./components/UI/Loading";

function App() {
    const firstAlarm = localStorage.firstalarm
    const [FA, setFA] = useState(firstAlarm == undefined ? false : true)
    const dispatch = useDispatch()
    const {isFetching, isError, data} = Fetching()

    useEffect(() => {
        console.log(data)
        if (data) {
            dispatch(fetchProducts(data))
        }
    }, [data])

    return (
        <div className='min-h-[100vh]'>
            {!FA && <FirstAlarm setFa={setFA}/>}
            <NavBar/>
            {isFetching && <div className={'flex justify-center'}><Loading/></div>}
            {isError && <div className={'flex justify-center text-lg text-red-500'}>An error was occured</div>}
            <Routes>
                <Route path='/shopingcart' element={<Cart/>}/>
                <Route path='/liked' element={<Favourites/>}/>
                <Route path='/main' element={<Glavnaya/>}/>
                <Route path='*' element={<Glavnaya/>}/>
                <Route path='/product' element={<SingleItem/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
