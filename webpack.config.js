const dev = require('./config/webpack.dev')
const test = require('./config/webpack.test')
const prd = require('./config/webpack.prd')

const { NODE_ENV, P_ENV } = process.env

let config = prd
if (NODE_ENV === 'development') {
  config = dev
}

if (P_ENV === 'test') {
  config = test
}

module.exports = config
