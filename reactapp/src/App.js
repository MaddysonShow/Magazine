import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Glavnaya from "./components/glavnaya";
import Favourites from "./components/Favourites";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import {fetchProducts} from "./Redux/reducers";
import {useDispatch} from "react-redux";
import {FetchLogic} from "./components/fetching/ajax";
import FirstAlarm from "./components/FirstAlarm";

function App() {
    const firstAlarm = localStorage.firstalarm
    const [FA, setFA] = useState(firstAlarm == undefined ? false : true)
    const dispatch = useDispatch()
    const {getData} = FetchLogic()

    useEffect(() => {
        getData('api/product')
            .then(data => data.json())
            .then(data => dispatch(fetchProducts(data)))
            .catch(err => console.log(err.toString()))
    }, [])

    return (
        <div className='min-h-[100vh]'>
            {!FA && <FirstAlarm setFa={setFA}/>}
            <NavBar/>
            <Routes>
                <Route path='/shopingcart' element={<Cart/>}/>
                <Route path='/liked' element={<Favourites/>}/>
                <Route path='/main*' element={<Glavnaya/>}/>
                {/*<Route path='*' element={<NotFound/>}/>*/}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
