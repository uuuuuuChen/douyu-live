const router = require('koa-router')()
const { 
    fetchPartitions 
} = require('../api')

router.get('/partitions', async (ctx, next) => {
    try {
        const videodata = await fetchPartitions()
        let resData = {
            data: videodata.data,
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