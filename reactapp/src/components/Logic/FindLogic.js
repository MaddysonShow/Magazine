import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


export const FindLogic = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const fromStore = useSelector(state => state.red)
    let temporary = {}
    temporary.data = fromStore.data
    const getSearchUrl = searchParams.get('search')
    const getCatalogUrl = searchParams.get('category')
    console.log(getSearchUrl);
    console.log(getCatalogUrl);

    if (getSearchUrl && !getCatalogUrl) {
        if (getSearchUrl.length >= 1) {
            temporary.data = temporary.data.filter((el) => {
                return el.title.toLowerCase().includes(getSearchUrl.toLowerCase()) || el.category.toLowerCase().includes(getSearchUrl.toLowerCase())
            })
            console.log(temporary.data);
        }
    }

    else if (getCatalogUrl && !getSearchUrl) {
        if (getCatalogUrl.length >= 1) {
            temporary.data = temporary.data.filter((el) => {
                return el.category.toLowerCase() === (getCatalogUrl.toLowerCase())
            })
            console.log(temporary.data);
        }
    }
    else temporary.data = fromStore.data

    return {temporary}
};

export default FindLogic;

