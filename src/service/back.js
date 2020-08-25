import qs from 'query-string'
import fetch, { generateFetch } from './fetch'

const mfetch = generateFetch({
  root: '//localhost:3001',
  // root: '//106.14.121.159/back',
  stringify: true,
  toJson: true,
})

const getSenlist = ({ content, pageIndex, pageSize }) => {
  const body = { pageIndex, pageSize }
  if (content) {
    body.content = content
  }
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

export default {
  getSenlist,
  getWordList,
  getMaterial,
}
