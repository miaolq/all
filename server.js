const Koa = require('koa')
const koaStatic = require('koa-static')
const compress = require('koa-compress')
const path = require('path')

const app = new Koa()

app.use(
  compress({
    filter(content_type) {
      return /(text|javascript)/i.test(content_type)
    },
    threshold: 2048,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    br: false, // disable brotli
  })
)

app.use(koaStatic(path.resolve(__dirname, 'dist')))

app.listen(3000)
