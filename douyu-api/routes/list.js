const router = require('koa-router')()
const {
    fetchList
} = require('../api')

router.get('/list', async (ctx, next) => {
    try {
        const data = await fetchList()
        const resData = {
            data: data,
            code: 0,
            message: '0'
        }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

module.exports = router.routes()