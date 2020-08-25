import React, { useEffect, useReducer, useCallback, useState } from 'react'
import { Input, Pagination } from 'antd'
import api from '../../service/back'
import { useMount } from '../../util/hook'

const init = { pageIndex: 1, pageSize: 10 }
const enums = {
  merge: 'merge',
  reset: 'reset',
}

export default function Sentence() {
  const [list, setlist] = useState([])
  const [total, setTotal] = useState(0)

  const [filter, dispatchFilter] = useReducer((state, action) => {
    const { type, payload } = action
    if (type === enums.merge) {
      return { ...state, ...payload }
    }
    if (type === enums.reset) {
      return init
    }
    return state
  }, init)

  // const search = useCallback(() => {
  //   api.getSenlist(filter).then((res) => {
  //     const { code, data } = res
  //     if (code !== 0) return

  //     const { total: total_1, list: list_1 } = data
  //     setTotal(total_1)
  //     setlist(list_1)
  //   })
  // }, [filter])

  const search = () => {
    api.getSenlist(filter).then((res) => {
      const { code, data } = res
      if (code !== 0) return

      const { total: total_1, list: list_1 } = data
      setTotal(total_1)
      setlist(list_1)
    })
  }

  useMount(search)
  // 搜索条件集中在filter中。某些搜索条件修改会立即查询，如pageIndex。 某些搜索条件修改不立即查询，点查询按钮后才查询，如字段模糊查询
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(search, [filter.pageIndex])

  const pageChange = (page) => {
    console.log(111, page)
    dispatchFilter({ type: enums.merge, payload: { pageIndex: page } })
  }

  const inputChange = (e) => {
    dispatchFilter({ type: enums.merge, payload: { content: e.target.value } })
  }

  const onSearch = (value) => {
    // 主动查询，应该重置pageIndex 然后查询
    // 此处不能依赖pageIndex去查询，pageIndex可能没改变。
    // pageIndex如果改了，再主动调查询，就多调了一次
    // 总结： 依赖pageIndex,自动查询繁琐，还是手动调查询方便
    dispatchFilter({ type: enums.merge, payload: { pageIndex: 1 } })
  }

  // 搜索条件如果受控，即使不点击查询，在切换pageIndex的时候也会生效！
  // 搜索条件如果不受控。如果有多个搜索条件，在点击一个查询时，要setState多个值。缓存一份搜索条件？
  // 总结： 受控更方便

  return (
    <div className="page-sentence">
      <Input.Search onSearch={onSearch} value={filter.content} onChange={inputChange} />
      {list.map((item) => (
        <div key={item._id} className="sentence">
          {item.content}
        </div>
      ))}
      <Pagination total={total} current={filter.pageIndex} onChange={pageChange} />
    </div>
  )
}
