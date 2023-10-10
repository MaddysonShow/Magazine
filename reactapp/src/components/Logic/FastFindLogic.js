import React from 'react';
import {useSelector} from "react-redux";


export const FastFindLogic = (searchValue) => {
    const fromStore = useSelector(state => state.red)
    let FastTemporary = {}
    FastTemporary.data = fromStore.data

    if (searchValue.length !== 0) {
        FastTemporary.data = FastTemporary.data.filter((el) => {
            return el.title.toLowerCase().includes(searchValue.toLowerCase()) || el.category.toLowerCase().includes(searchValue.toLowerCase())
        })
        // console.log(fromStore);
    }
    return FastTemporary
}

export default FastFindLogic;

