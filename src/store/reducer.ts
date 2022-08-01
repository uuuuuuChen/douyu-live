import { AnyAction, combineReducers } from "redux"
import * as actionTypes from './action-types'

const initialState = {
    partitions: [],
    cate1Info: [],
    cate2Info: [],
    mixvideos: [{}],
    todaytop: [],
    loading: true
}

export const partitionsReducer = (state = initialState, action:AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_PARTITIONS:
            return {
                ...state,
                partitions: action.data
            }
            break
        case actionTypes.SET_MIXVIDEOS:
            let len = action.data.length
            let arr = []
            for(let i = 0; i < len; i++) {
                arr.push(...action.data[i].list)
            }
            // let lolvideos = action.data[1].list
            // console.log(len,arr,arr[0].rid)
            return {
                ...state,
                mixvideos: arr
            }
            break
        case actionTypes.SET_LIST:
            let cate1Info = action.data.cate1Info
            let cate2Info = action.data.cate2Info
            // console.log(action,cate1Info)
            return {
                ...state,
                cate1Info: cate1Info,
                cate2Info: cate2Info
            }
            break
        case actionTypes.SET_TODAYTOP:
            return {
                ...state,
                todaytop: action.data
            }
            break
        case actionTypes.SET_LOADING: 
            return {
                ...state,
                loading: action.data
            }
            break
        default:
            return state
    }
}

const mixvideosReducer = (state = initialState.mixvideos, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_MIXVIDEOS:
            return {
                ...state,
                mixvideos: action.data
            }
            break
        default:
            return state
    }
}

// const listReducer = (state = initialState.list, action: AnyAction) => {
//     switch (action.type) {
//         case actionTypes.SET_LIST:
//             return {
//                 ...state,
//                 list: action.data
//             }
//             break
//         default:
//             return state
//     }
// }

const todaytopReducer = (state = initialState.todaytop, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_TODAYTOP:
            return {
                ...state,
                todaytop: action.data
            }
            break
        default:
            return state
    }
}

const loadingReducer = (state = initialState.loading, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_LOADING: {
            return action.data
        }
        default:
            return state
    }
}

export default combineReducers({
    homedata: partitionsReducer,
    // mixvideos:mixvideosReducer,
    // list: listReducer,
    // todaytop: todaytopReducer,
    // loading: loadingReducer
})