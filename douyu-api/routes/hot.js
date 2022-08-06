const router = require('koa-router')()
const {
    fetchHotList
} = require('../api')

router.get('/rmyx', async (ctx, next) => {
    const w = encodeURI(ctx.query.page)
    try {
        const searchdata = await fetchHotList(w)
        const searchdata1 = await fetchHotList(2)
        const searchdata2 = await fetchHotList(3)
        const searchdata3 = await fetchHotList(4)
        const searchdata4 = await fetchHotList(5)
        const searchdata5 = await fetchHotList(6)
        const searchdata6 = await fetchHotList(7)
        const searchdata7 = await fetchHotList(8)
        const searchdata8 = await fetchHotList(9)
        const searchdata9 = await fetchHotList(10)
        const searchdata10 = await fetchHotList(11)
        const searchdata11 = await fetchHotList(12)
        const data = [
            ...searchdata1.data.list,
            ...searchdata2.data.list,
            ...searchdata3.data.list,
            ...searchdata4.data.list,
            ...searchdata5.data.list,
            ...searchdata6.data.list,
            ...searchdata7.data.list,
            ...searchdata8.data.list,
            ...searchdata9.data.list,
            ...searchdata10.data.list,
            ...searchdata11.data.list,
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