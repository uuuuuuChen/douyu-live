import {
    getPartitionsRequest,
    getListRequest,
    getMixvideosRequest,
    getTodaytopRequest,
    getSearchResultRequest,
    getSearchListRequest,
    getYZListRequest,
    getLOLListRequest,
    getWZListRequest,
    getHOTListRequest
} from '@/api/request'
import { AnyAction, Dispatch } from 'redux'
import * as actionTypes from '../action-types'

export const getHomeDataAction = () => {
    return (dispatch: Dispatch) => {
        // dispatch(setLoading(true))
        return Promise.all([
            getPartitionsRequest(),
            getMixvideosRequest(),
            getTodaytopRequest(),
            getYZListRequest(),
            getLOLListRequest(),
            getWZListRequest(),
            getHOTListRequest()
        ]).then((
            [partitionsResult, mixvideosResult, todaytopResult,yzResult,lolResult,wzResult,hotResult]
        ) => {
            // console.log(yzResult,lolResult,wzResult,hotResult)
            dispatch(setPartitions(partitionsResult.data))
            dispatch(setMixvideos(mixvideosResult.data.data))
            dispatch(setTodaytop(todaytopResult.data.data))
            dispatch(setYZResult(yzResult.data))
            dispatch(setLOLResult(lolResult.data))
            dispatch(setWZResult(wzResult.data))
            dispatch(setHOTesult(hotResult.data))
            // dispatch(setList(listResult))
            dispatch(setLoading(false))
        })
    }
}

export const getListAction = () => {
    return (dispatch: Dispatch) => {
        return getListRequest()
            .then(data => {
                // console.log(data)
                dispatch(setList(data.data.data))
            })
    }
}
export const getSearchListAction = (page:number) => {
    return (dispatch: Dispatch<AnyAction>) => {
        return getSearchListRequest(page)
            .then(data => {
                // console.log(data)
                dispatch(setSearchList(data.data))
            })
    }
}
export const getSearchResultAction = (query:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setSearchResult(query))
    }
}
export const getAnchorAction = (query:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setAnchor(query))
    }
}

export const setPartitions = (data: any[]): AnyAction => ({
    type: actionTypes.SET_PARTITIONS,
    data,
    
})

export const setSearchResult = (data: any): AnyAction => ({
    type: actionTypes.SET_SEARCH_RESULT,
    data: data,
})

export const setYZResult = (data: any[]): AnyAction => ({
    type: actionTypes.SET_YZ_RESULT,
    data: data,
})

export const setLOLResult = (data: any[]): AnyAction => ({
    type: actionTypes.SET_LOL_RESULT,
    data: data,
})

export const setWZResult = (data: any[]): AnyAction => ({
    type: actionTypes.SET_WZ_RESULT,
    data: data,
})

export const setHOTesult = (data: any[]): AnyAction => ({
    type: actionTypes.SET_HOT_RESULT,
    data: data,
})

export const setAnchor = (data: any): AnyAction => ({
    type: actionTypes.SET_ANCHOR,
    data: data,
})

export const setSearchList = (data: any): AnyAction => ({
    type: actionTypes.SET_SEARCH_LIST,
    data: data,
})

export const setList = (data: any[]): AnyAction => ({
    type: actionTypes.SET_LIST,
    data
})

export const setMixvideos = (data: any[]): AnyAction => ({
    type: actionTypes.SET_MIXVIDEOS,
    data
})

export const setTodaytop = (data: any[]): AnyAction => ({
    type: actionTypes.SET_TODAYTOP,
    data
})

export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})