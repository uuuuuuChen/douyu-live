const router = require('koa-router')()
const fetch = require('node-fetch')

router.get('/image', async (ctx, next) => {
    // ctx.body = 'image'
    // 拿到图片
    const url = ctx.query.pic
    // ctx.body = url
    // 后端就去访问图片  丢掉浏览器思维， http协议思维
    // 请求头 和 浏览器就不一样了
    // 白名单， 接入机制...
    const res = await fetch(url)   // B站的图片服务器接受你 
    // 请求完成才往后执行  通过node-fetch后台请求  不要浏览器代理请求
    const data = await res.buffer() // 图片格式  二进制流(buffer流)  .buffer  -> buffer格式
    // console.log(data)
    ctx.set('Content-Type', 'image/jpeg')
    ctx.body = data
})

module.exports = router.routes()