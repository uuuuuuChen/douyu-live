const koa = require('koa')
const app = new koa()
const cors = require('koa-cors')
const router = require('koa-router')()
const partitionsRouter = require('./routes/partitions')
const mixvideosRouter = require('./routes/mixvideos')
const listRouter = require('./routes/list')
const todaytopRouter = require('./routes/todaytop')
const searchRouter = require('./routes/search')
const transferRouter = require('./routes/transfer')
const yzRouter = require('./routes/yz')
const lolRouter = require('./routes/lol')
const wzRouter = require('./routes/wz')
const hotRouter = require('./routes/hot')


app.use(cors())
app.use(yzRouter)
app.use(lolRouter)
app.use(wzRouter)
app.use(hotRouter)
router.use('/cate',partitionsRouter)
router.use('/cate',listRouter)
router.use('/home',mixvideosRouter)
router.use('/search',todaytopRouter)
router.use('/search',searchRouter)
router.use('/transfer',transferRouter)
app.use(router.routes())

app.use((ctx) => {
    ctx.body = '后端运行成功(前面的路由有问题！！)'
})

app.listen(3030, () => {
    console.log("You app is running")
})