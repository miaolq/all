import React, { useEffect } from 'react'
import { Input } from 'antd'
import data from '../../service/back'

export default function Sentence() {
  useEffect(() => {
    data.getSenlist({ pageIndex: 1, pageSize: 10 })
  }, [])

  return (
    <div className="sentence">
      <Input />
    </div>
  )
}
