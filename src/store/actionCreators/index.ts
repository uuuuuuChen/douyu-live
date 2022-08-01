import {
    getPartitionsRequest,
    getListRequest,
    getMixvideosRequest,
    getTodaytopRequest
} from '@/api/request'
import { AnyAction, Dispatch } from 'redux'
import * as actionTypes from '../action-types'

export const getHomeDataAction = () => {
    return (dispatch: Dispatch) => {
        // dispatch(setLoading(true))
        return Promise.all([
            getPartitionsRequest(),
            // getListRequest(),
            getMixvideosRequest(),
            getTodaytopRequest()
            // , listResult
        ]).then(([partitionsResult, mixvideosResult, todaytopResult]) => {
            // console.log(partitionsResult,mixvideosResult.data.data[0].list,todaytopResult)
            dispatch(setPartitions(partitionsResult.data))
            dispatch(setMixvideos(mixvideosResult.data.data))
            dispatch(setTodaytop(todaytopResult.data.data))
            // dispatch(setList(listResult))
            dispatch(setLoading(false))
        })
    }
}

export const getListAction = () => {
    return (dispatch: Dispatch) => {
        return getListRequest()
            .then(data => {
                console.log(data)
                dispatch(setList(data.data.data))
            })
    }
}


export const setPartitions = (data: any[]): AnyAction => ({
    type: actionTypes.SET_PARTITIONS,
    data
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