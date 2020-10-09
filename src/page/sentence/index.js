import React, { useReducer, useState } from 'react'
import { Input, Pagination, Button } from 'antd'
import api from '../../service/back'
import { useMount } from '../../util/hook'
import './style.scss'

const init = { pageIndex: 1, pageSize: 10, content: '' }

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

  const search = (condition) => {
    const copy = { ...filter, ...condition }
    api.getSenlist(copy).then((res) => {
      const { code, data } = res
      if (code !== 0) return

      const { total: total_1, list: list_1 } = data
      setTotal(total_1)
      setlist(list_1)
    })
  }

  useMount(search)

  const pageChange = (page) => {
    dispatchFilter({ type: enums.merge, payload: { pageIndex: page } })
    search({ pageIndex: page })
  }

  const inputChange = (e) => {
    dispatchFilter({ type: enums.merge, payload: { content: e.target.value } })
  }

  const onSearch = () => {
    dispatchFilter({ type: enums.merge, payload: { pageIndex: 1 } })
    search({ pageIndex: 1 })
  }

  const reset = () => {
    dispatchFilter({ type: enums.reset })
    search(init)
  }

  return (
    <div className="page-sentence">
      <img src="https://oss-miao.oss-cn-shanghai.aliyuncs.com/img/black-cat.jpg" alt="" />
      <img src="https://oss-miao.oss-cn-shanghai.aliyuncs.com/key" alt=""/>

      <Input.Search
        style={{ width: 300 }}
        onSearch={onSearch}
        value={filter.content}
        onChange={inputChange}
      />
      <Button onClick={reset}>重置</Button>
      <div className="sentence-wrap">
        {list.map((item) => (
          <div key={item._id} className="sentence">
            {item.content}
          </div>
        ))}
      </div>
      <Pagination total={total} current={filter.pageIndex} onChange={pageChange} />
    </div>
  )
}
