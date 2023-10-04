const defState = {
    showCatalog: false,
    windowDirection: false,
    search: ''
}
const SWITCHER = 'switcher'
const WINDOW_DIRECTION = 'windowDirection'
const GLOBAL_SEARCH = 'globalSearch'

export const Events = (state = defState, action) => {
    switch (action.type) {
        case SWITCHER: {
            return {...state, showCatalog: !state.showCatalog}
        }
        case WINDOW_DIRECTION: {
            return {...state, windowDirection: action.payload}
        }
        case GLOBAL_SEARCH: {
            return {...state, search: action.payload}
        }
        default: return state
    }
}
export function globalSearch(data) {
    return {type: GLOBAL_SEARCH, payload: data}
}

export function switchShowCatalog() {
     return {type: SWITCHER}
}
export function windowDirection(dir) {
    return{type: WINDOW_DIRECTION, payload: dir}
}

