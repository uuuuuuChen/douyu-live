import { axiosInstance } from './config'

import {
    URL_PARTITION,
    URL_LIST,
    URL_MIXVIDEOS,
    URL_TODAYTOP,
    URL_SEARCHRESULT,
    URL_YZLIST,
    URL_LOLLIST,
    URL_WZLIST,
    URL_HOTLIST
} from './url'

// export const getPartitonsRequest = ():Promise<any[]> => {
//     const p = new Promise<any[]>((resolve, reject) => {
//         fetch("http://localhost:3030/partitions")
//             .then(data => data.json())
//             .then(data => {
//                 console.log(data)
//                 resolve(data)
//             })
//     })
//     return p
// }

export const getPartitionsRequest = () => axiosInstance.get(URL_PARTITION)
export const getListRequest = () => axiosInstance.get(URL_LIST)
export const getMixvideosRequest = () => axiosInstance.get(URL_MIXVIDEOS)
export const getTodaytopRequest = () => axiosInstance.get(URL_TODAYTOP)
export const getSearchResultRequest = 
    (query:any) => axiosInstance.get(
        `${URL_SEARCHRESULT}?page=1&type=&keyword=${query}`)

export const getSearchListRequest = 
    (page:number) => axiosInstance.get(
        `${URL_SEARCHRESULT}?page=${page}&type=`)

export const getYZListRequest = 
        () => axiosInstance.get(
            `${URL_YZLIST}?page=1&type=`)

export const getLOLListRequest = 
        () => axiosInstance.get(
            `${URL_LOLLIST}?page=1&type=`)

export const getWZListRequest = 
            () => axiosInstance.get(
                `${URL_WZLIST}?page=1&type=`)
    
export const getHOTListRequest = 
                () => axiosInstance.get(
                    `${URL_HOTLIST}?page=1&type=`)