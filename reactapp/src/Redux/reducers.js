
const defState = {
    data: {value: [], totalItemsCount: 0},
    page: 0,
    showMore: false
}

const defState2 = {
    data: []
}

const SET_FAVOURITE = 'setFavouriteProduct'
const SET_PRODUCTS = 'setProducts'
const CLEAR_FAVOURITE = 'clearFavState'
const SET_MORE_PRODUCTS = 'setMoreProducts'
const SET_PAGE = 'setPage'
const SET_SHOWMORE_true = 'setShowMoreTrue'

export const red = (state = defState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state, data: action.payload}
        }
        case SET_MORE_PRODUCTS: {
            return {...state, data: {value: [...state.data.value, action.payload.data.value]}, showMore: false}
        }
        case SET_PAGE: {
            return {...state, page: action.payload}
        }
        case SET_SHOWMORE_true: {
            return {...state, showMore: true}
        }
        default:
            return state
    }
}

export function redFav (state = defState2, action) {
    if (action.type == SET_FAVOURITE) {
        return {...state, data: action.payload}
    }
    else return state
}


export const setPage = payload => {return {type: SET_PAGE, payload: payload}}
export const setShowTrue = () => {return {type: SET_SHOWMORE_true}}
export function fetchMoreProducts(payload) {
    return {type: SET_MORE_PRODUCTS, payload: payload}
}

export function fetchFavourite(payload) {
    return {type: SET_FAVOURITE, payload: payload}
}

export function fetchProducts(payload) {
    return {type: SET_PRODUCTS, payload: payload}
}