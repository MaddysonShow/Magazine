
const defState = {
    data: []
}
const SET_FAVOURITE = 'setFavouriteProduct'
const SET_PRODUCTS = 'setProducts'
const CLEAR_FAVOURITE = 'clearFavState'

export const red = (state = defState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state, data: action.payload}
        }
        default:
            return state
    }
}

export function redFav (state = defState, action) {
    if (action.type == SET_FAVOURITE) {
        return {...state, data: action.payload}
    }
    else if (action.type == CLEAR_FAVOURITE) {
        return {...state, data: []}
    }
    else return state
}

export function clearFavState() {
    return {type: CLEAR_FAVOURITE}
}

export function fetchFavourite(payload) {
    return {type: SET_FAVOURITE, payload: payload}
}

export function fetchProducts(payload) {
    return {type: SET_PRODUCTS, payload: payload}
}