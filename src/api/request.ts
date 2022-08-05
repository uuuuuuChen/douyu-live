import { axiosInstance } from './config'

import {
    URL_PARTITION,
    URL_LIST,
    URL_MIXVIDEOS,
    URL_TODAYTOP,
    URL_SEARCHRESULT
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
    (query:any,page:number) => axiosInstance.get(
        `${URL_SEARCHRESULT}?page=${page}&type=&keyword=${query}`)