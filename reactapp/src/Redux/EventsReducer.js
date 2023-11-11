const defState = {
    showCatalog: false,
    windowDirection: false,
    search: '',
    lock: false
}
const SWITCHER = 'switcher'
const WINDOW_DIRECTION = 'windowDirection'
const GLOBAL_SEARCH = 'globalSearch'
const LOCK = 'lock' // залочим пути к остальным путям

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
        case LOCK: {
            return {...state, lock: action.payload} //костыль
        }
        default: return state
    }
}
export function globalSearch(data) {
    return {type: GLOBAL_SEARCH, payload: data}
}

export const locker = (sost) => {
    return {type: LOCK, payload: sost}
}

export function switchShowCatalog() {
     return {type: SWITCHER}
}
export function windowDirection(dir) {
    return{type: WINDOW_DIRECTION, payload: dir}
}

