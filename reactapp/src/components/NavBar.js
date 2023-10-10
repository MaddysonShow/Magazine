import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import logo from "../media/BugLogoMarket.png";
import styles from '../styles.module/NavBar.module.css'
import {useDispatch} from "react-redux";
import {switchShowCatalog} from "../Redux/EventsReducer";
import RightMenu from "./RatingStarsFuncAndMenu/rightMenu";
import Fac from "./FavouriteAndCart/FAC";
import MyInput from "./UI/MyInput";

const NavBar = () => {
    const [direction, setDir] = useState("down");
    const dispatch = useDispatch()

    const {CartIsFull, LikeIsFull} = Fac()
    const NavRef = useRef()

    // const navigate = useNavigate()
    function showCatalog(e) {
        e.preventDefault()
        dispatch(switchShowCatalog())
    }

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const updateScrollDir = () => {
            const scrollY = window.scrollY;
            if (Math.abs(scrollY - lastScrollY) < 0) {
                return;
            }
            setDir(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        const onScroll = () => {
            if (window.scrollY < 50) {
                if (direction == 'up') {
                    setDir('down')
                }
                return
            }
            window.requestAnimationFrame(updateScrollDir);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [direction]);

    return (
        <nav className={direction == 'down' ? styles.navBarnonSticky : styles.navBarSticky} ref={NavRef}>
            <Link to={'/main'} datatooltip={'Home'} className={'h-[100%]'}><img src={logo} alt={'LOGOTYPE'} className={'h-[90%]'}/></Link>
            <button
                className={"ml-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded active:bg-amber-500"}
                onClick={(e) => {
                    showCatalog(e)
                }}>Catalog
            </button>
            <MyInput direction={direction}/>
            <span className={'flex ml-auto'}>
                <Link to={'/liked'} className={'mr-5 hover:'} datatooltip={'Favourites'}><img
                    src={LikeIsFull()}/></Link>
                <Link to={'/shopingcart'} className={'mr-5'} datatooltip={'To Cart'}><img src={CartIsFull()}/></Link>
            </span>
            <RightMenu isShown={direction}/>
        </nav>
    );
};

export default NavBar


