import { AnyAction, combineReducers } from "redux"
import * as actionTypes from './action-types'

const initialState = {
    home: {
        partitions: [],
        cate1Info: [],
        cate2Info: [],
        mixvideos: [{}],
        todaytop: [],
        loading: true,
    },
    search: {
        searchresult: [{}],
        searchlist: [{}],
        anchor: [{}]
    }

}

export const partitionsReducer = (state = initialState.home, action: AnyAction) => {
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
            for (let i = 0; i < len; i++) {
                arr.push(...action.data[i].list)
            }
            // let lolvideos = action.data[1].list
            // console.log(arr)
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

const mixvideosReducer = (state = initialState.home.mixvideos, action: AnyAction) => {
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

const todaytopReducer = (state = initialState.home.todaytop, action: AnyAction) => {
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

const loadingReducer = (state = initialState.home.loading, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_LOADING: {
            return action.data
        }
        default:
            return state
    }
}

const SearchReducer = (state = initialState.search, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_RESULT: {
            // console.log(action.data,state.searchlist[0].nickname)
            var res:any = []
            state.searchlist.map(
                (todo, index) => {
                    let nickname = state.searchlist[index].nickname
                    let roomname = state.searchlist[index].roomName
                    // console.log(typeof nickname,roomname)
                    if(nickname.includes(action.data) || roomname.includes(action.data) ) {
                        res.push(todo)
                    }
                }
            )
            // console.log(res)
            return {
                ...state,
                searchresult: res
            }
        }
        case actionTypes.SET_ANCHOR: {
            var res1:any = []
            state.searchlist.map(
                (todo, index) => {
                    let nickname = state.searchlist[index].nickname
                    // console.log(typeof nickname,roomname)
                    if(nickname.includes(action.data) ) {
                        res1.push(todo)
                    }
                }
            )
            // console.log(res)
            return {
                ...state,
                anchor: res1
            }
        }
        case actionTypes.SET_SEARCH_LIST: {
            return {
                ...state,
                searchlist: action.data
            }
        }
        default:
            return state
    }
}

export default combineReducers({
    homedata: partitionsReducer,
    searchdata: SearchReducer
    // mixvideos:mixvideosReducer,
    // list: listReducer,
    // todaytop: todaytopReducer,
    // loading: loadingReducer
})