const dev = require('./config/webpack.dev')
const prd = require('./config/webpack.prd')

const { NODE_ENV } = process.env

let config = prd
if (NODE_ENV === 'development') {
  config = dev
}

module.exports = config
