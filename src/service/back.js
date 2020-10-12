import qs from 'query-string'
import { message } from 'antd'
import fetch, { generateFetch } from './fetch'
import { filterKey } from '../util'

const mfetch = generateFetch({
  root: '//localhost:3001',
  // root: '//106.14.121.159/back',
  stringify: true,
  toJson: true,
  handleUnexpectedCode: (res) => {
    res.code !== 0 && message.error(res.message)
    return res
  },
})

const getSenlist = ({ content, pageIndex, pageSize }) => {
  let body = { content, pageIndex, pageSize }
  body = filterKey(body)
  return mfetch(`/sentence?${qs.stringify(body)}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9vdCIsImlkIjoiNWY0OGRiYTk5NTlmNjk2YjU1NDdjZGU1IiwiaWF0IjoxNjAyMzE3MTc4LCJleHAiOjE2MDI5MjE5Nzh9.hzkGrCVAKXgjjCg0sX5M9CpGGnlpt_NAqdE7gzV9FO0',
    },
  }) // todo
}

const getWordList = () => {}

const getMaterial = (parentIds) => {
  let url =
    'http://za-epiphron.test.za-tech.net/api/material/epiphron/dict/listByParentId?dictTypeCode=MaterialType'
  if (parentIds) {
    url += `&parentIds=${parentIds.join(',')}`
  }
  return fetch(url)
}

const login = ({ account, passwd }) => {
  return fetch(`//106.14.121.159/back/user/login`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      account,
      passwd,
    }),
  }).then((res) => {
    return res.json()
  })
}

// login()

// setTimeout(() => {
//   console.log(99, a)
//   fetch('//106.14.121.159/back/user', {
//     headers: {
//       Authorization: `Bearer ${a}`,
//     },
//   })
// }, 1000)

export default {
  login,
  getSenlist,
  getWordList,
  getMaterial,
}
