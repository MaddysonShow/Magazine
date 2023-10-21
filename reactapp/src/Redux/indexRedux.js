import {configureStore} from "@reduxjs/toolkit";
import {red, redFav, test123} from "./reducers";
import {Events} from './EventsReducer'
import {productApi} from "../components/fetching/RTQ";

export const store = configureStore({
    reducer: {
        red,
        Events: Events,
        redFav,
        [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store