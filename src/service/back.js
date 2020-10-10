import qs from 'query-string'
import { message } from 'antd'
import fetch, { generateFetch } from './fetch'
import { filterKey } from '../util'

const mfetch = generateFetch({
  root: '//106.14.121.159/back',
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
  return mfetch(`/sentence?${qs.stringify(body)}`) // todo
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

const login = () => {
  console.log(9999)
  fetch(`//106.14.121.159/back/user/login`, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      account: 'root2',
      passwd: 'root',
    }),
  })
}

login()

setTimeout(() => {
  fetch('//106.14.121.159/back/user', {
    credentials: 'include',
  })
}, 1000)

export default {
  getSenlist,
  getWordList,
  getMaterial,
}
