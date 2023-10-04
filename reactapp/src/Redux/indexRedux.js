import {configureStore} from "@reduxjs/toolkit";
import {red, redFav} from "./reducers";
import {Events} from './EventsReducer'

export const store = configureStore({
    reducer: {
        red: red,
        Events: Events,
        redFav
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {

            }
        })
})

export default store