import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Glavnaya from "./components/glavnaya";
import Favourites from "./components/Favourites";
import Cart from "./components/Cart";
import Footer from "./components/Footer/Footer";
import FirstAlarm from "./components/FirstAlarm";
import SingleItem from "./components/SingleItem.jsx";
import Loading from "./components/UI/Loading";
import useFindLogic from "./components/Logic/FindLogic";
import Threevision from "./components/threevision";
import {useSelector} from "react-redux";

function App() {
    const firstAlarm = localStorage.firstalarm
    const [FA, setFA] = useState(firstAlarm == undefined ? false : true)
    const data = useSelector(state => state.Events.lock)

    if (data === true) {
        return null
    }

    return (
    <div>
        {/*{!FA && <FirstAlarm setFa={setFA}/>}*/}
        <NavBar/>
        <Routes>
            {/*<Route path='/shopingcart' element={<Cart/>}/>*/}
            {/*<Route path='/liked' element={<Favourites/>}/>*/}
            <Route path='/main' element={<Glavnaya/>}/>
            <Route path='/product' element={<SingleItem/>}/>
            <Route path='*' element={<Glavnaya/>}/>
        </Routes>
        <Footer/>
    </div>
    );
}

export default App;
