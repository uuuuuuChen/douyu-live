const router = require('koa-router')()
const {
    fetchMixVideos
} = require('../api')

router.get('/mixvideos', async (ctx, next) => {
    try {
        const data = await fetchMixVideos()
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