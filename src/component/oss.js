import React from 'react'
import { Upload } from 'antd'

export default function Oss() {
  return <Upload>oss</Upload>
}

// const Oss = require('ali-oss')
// const fs = require('fs')
// const ps = require('path')

// const client = new Oss({
//   region: 'oss-cn-shanghai',
//   accessKeyId: 'LTAI4G4RfAS7DP7EQrV61e3H',
//   accessKeySecret: 'hI8BtzWZGTKQs5QeF6ErAe8ihl03HT',
//   bucket: 'good-oss',
// })

// console.log(__dirname)
// const data = fs.readFileSync(ps.resolve(__dirname, '../files/imgs/f1.jpeg'))

// async function putObject() {
//   try {
//     const result = await client.put('key', data, {})
//     console.log(result)
//   } catch (e) {
//     console.error(e)
//   }
// }

// // putObject()

// client.list().then((o) => {
//   console.dir(o)
// })
