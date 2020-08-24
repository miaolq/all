import qs from 'query-string'
import generateFetch from './fetch'

const mfetch = generateFetch({
  root: '//106.14.121.159/back',
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

export default {
  getSenlist,
  getWordList,
}
