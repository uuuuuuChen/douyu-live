const fetch = require('node-fetch')

const URL_PARTITIONS = 'https://m.douyu.com/api/cate/recList'
const URL_MIXVIDEOS = 'https://m.douyu.com/api/home/mix'
const URL_LIST = 'https://m.douyu.com/api/cate/list'
const URL_TODAYTOP = 'https://m.douyu.com/api/search/getTodayTop'

const fetchPartitions = () => {
    const params = [
        `cid=`,
        `ct=`
    ]
    // console.log(URL_PARTITIONS + '?' + params.join("&"));
    return fetch(URL_PARTITIONS + '?' + params.join("&"))
        .then(res => res.json())
        .then(data => data)
}

const fetchMixVideos = () => {
    return fetch(URL_MIXVIDEOS)
        .then(res => res.json())
        .then(data => data)
}

const fetchList = () => {
    return fetch(URL_LIST)
        .then(res => res.json())
        .then(data => data)
}

const fetchTodayTop = () => {
    const params = [
        `count=10`,
        `isAjax=1`
    ]
    return fetch(URL_TODAYTOP + '?' + params.join("&"))
        .then(res => res.json())
        .then(data => data)
}

module.exports = {
    fetchPartitions,
    fetchMixVideos,
    fetchList,
    fetchTodayTop
}