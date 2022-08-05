const router = require('koa-router')()
const Data1 = require('../data/SearchData1')
const Data2 = require('../data/SearchData2')
const { 
    fetchSearchList 
} = require('../api')

router.get('/result', async (ctx, next) => {
    // const resData = {
    //     data: Data1,
    //     code: 0,
    //     message: '0'
    // }
    // ctx.body = resData
    const w = encodeURI(ctx.query.page)
    // console.log(ctx.query.page)
    try {
        const searchdata = await fetchSearchList(w)
        const searchdata1 = await fetchSearchList(2)
        const searchdata2 = await fetchSearchList(3)
        const searchdata3 = await fetchSearchList(4)
        const searchdata4 = await fetchSearchList(5)
        const data = [
            ...searchdata1.data.list,
            ...searchdata2.data.list,
            ...searchdata3.data.list,
            ...searchdata4.data.list,
             ...searchdata.data.list,
        ]
        // console.log(data)
        // console.log(searchdata)
        let resData = {
            data: data,
            code: 0,
            message: '0'
        }
        // console.log(resData)
        ctx.body = resData
    } catch (e) {
        next(e)
    } 
})

module.exports = router.routes()