import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import logo from "../media/BugLogoMarket.png";
import styles from '../styles.module/NavBar.module.css'
import {useDispatch} from "react-redux";
import {switchShowCatalog} from "../Redux/EventsReducer";
import RightMenu from "./RatingStarsFuncAndMenu/rightMenu";
import Fac from "./FavouriteAndCart/FAC";
import MyInput from "./UI/MyInput";
import {productApi} from "./fetching/RTQ";
import HeaderNav from "./header/HeaderNav";
import HeaderLogoContainer from "./header/HeaderLogo";
import HeaderContacts from "./header/HeaderContacts";
import '../components/header/header.scss'
// import '../index.scss'

const NavBar = () => {

    const {data: catalog, isFetching, isError} = productApi.endpoints.getCatalog.useQuery()

    const [direction, setDir] = useState("down");
    const dispatch = useDispatch()

    const {CartIsFull, LikeIsFull} = Fac()
    const NavRef = useRef()

    // const navigate = useNavigate()
    function showCatalog(e) {
        e.preventDefault()
        dispatch(switchShowCatalog())
    }

    return (
        <header className={"header container"}>
            {/*<Link to={'/main'} datatooltip={'Home'} className={'h-[100%]'}><img src={logo} alt={'LOGOTYPE'} className={'h-[90%]'}/></Link>*/}
            {/*<button*/}
            {/*    className={"ml-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded active:bg-amber-500"}*/}
            {/*    onClick={(e) => {*/}
            {/*        showCatalog(e)*/}
            {/*    }}>Catalog*/}
            {/*</button>*/}
            {/*<MyInput direction={direction} catalog={catalog}/>*/}
            {/*<span className={'flex ml-auto'}>*/}
            {/*    <Link to={'/liked'} className={'mr-5 hover:'} datatooltip={'Favourites'}><img*/}
            {/*        src={LikeIsFull()}/></Link>*/}
            {/*    <Link to={'/shopingcart'} className={'mr-5'} datatooltip={'To Cart'}><img src={CartIsFull()}/></Link>*/}
            {/*</span>*/}
            {/*<RightMenu isShown={direction} catalogItems={catalog}/>*/}

                <HeaderLogoContainer />
                <HeaderNav />
                <HeaderContacts />
            </header>

    );
};

export default NavBar


