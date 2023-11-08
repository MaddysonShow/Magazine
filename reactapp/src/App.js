import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Glavnaya from "./components/glavnaya";
import Favourites from "./components/Favourites";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import FirstAlarm from "./components/FirstAlarm";
import SingleItem from "./components/SingleItem.jsx";
import Loading from "./components/UI/Loading";
import useFindLogic from "./components/Logic/FindLogic";
import Threevision from "./components/threevision";

function App() {
    const firstAlarm = localStorage.firstalarm
    const [FA, setFA] = useState(firstAlarm == undefined ? false : true)

    return (
        <div className='min-h-[100vh]'>
            {!FA && <FirstAlarm setFa={setFA}/>}
            <NavBar/>
            <Routes>
                <Route path='/3dvision' element={<Threevision/>}/>
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
