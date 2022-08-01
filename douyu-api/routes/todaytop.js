const router = require('koa-router')()
const {
    fetchTodayTop
} = require('../api')

router.get('/todaytop', async (ctx, next) => {
    try {
        const data = await fetchTodayTop()
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