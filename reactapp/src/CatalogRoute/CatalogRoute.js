import React from 'react';
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";

const CatalogEntry = () => {
    const fromStore = useSelector(state => state.red.data)
    // console.log(fromStore);
    const tempRoute = []
    for (let i = 0; i < fromStore.length; i++) {
        if (!tempRoute.includes(fromStore[i].category)) {
            // fromStore[i].category
            tempRoute.push(fromStore[i].category)
        }
    }
    // console.log(tempRoute);
    return tempRoute
        // tempRoute.map((el, ind) => {
        //     <Route path={`:${el}`}>{children}</Route>
        //
        // })

};

export default CatalogEntry;