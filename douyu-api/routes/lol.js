const router = require('koa-router')()
const {
    fetchLOLList
} = require('../api')

router.get('/lol', async (ctx, next) => {
    const w = encodeURI(ctx.query.page)
    try {
        const searchdata = await fetchLOLList(w)
        const searchdata1 = await fetchLOLList(2)
        const searchdata2 = await fetchLOLList(3)
        const searchdata3 = await fetchLOLList(4)
        const searchdata4 = await fetchLOLList(5)
        const searchdata5 = await fetchLOLList(6)
        const searchdata6 = await fetchLOLList(7)
        const searchdata7 = await fetchLOLList(8)
        const searchdata8 = await fetchLOLList(9)
        const searchdata9 = await fetchLOLList(10)
        const searchdata10 = await fetchLOLList(11)
        const searchdata11 = await fetchLOLList(12)
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