import React, { useEffect, useRef, useState } from 'react'
import { Cascader } from 'antd'
import { getBankArea } from '../apis/supplier/advance-pay'

function format(arr, parent) {
  const isLeaf = !!(parent && parent.parent) // 省/市/区三层，区是leaf
  return arr.map((item) => ({ label: item.resName, value: item.resCode, parent, isLeaf }))
}
/**
 * Cascader的局限性： 不支持search，异步加载不支持多值的defaultValue
 * @param {*} props
 */
export default function Area(props) {
  const [provinces, setProvince] = useState([])
  const ref = useRef({})

  const loadData = (selected) => {
    const target = selected[selected.length - 1]
    target.loading = true
    return getBankArea(target.value).then((res) => {
      if (+res.code === 0) {
        const children = res.result.cfgResources
        target.children = format(children, target)
        target.loading = false
        console.log('setprovince', provinces)
        setProvince([...provinces])
      }
    })
  }

  console.log('new loadata')
  ref.current.loadData = loadData // 排除依赖loadData

  useEffect(() => {
    getBankArea().then((res) => {
      const data = format(res.result.cfgResources)
      console.log('set province111', provinces)

      setProvince(data) // !!! 此处setState不在合成事件、生命周期中，所以是同步的，所以上面的 console.log('new loadata')会打印出来，所以loadData已经变了，ref.current.loadData 也被赋予了新的loadData,
      // 新的loadData里是可以获取到新的province的。 老的province，已经被丢弃
      // https://zhuanlan.zhihu.com/p/50335551
      console.log('aafter set province111', provinces)

      const [dftProvince, dftCity, dftCounty] = props.defaultValue
      if (dftCity) {
        const proObj = data.find((item) => item.value === dftProvince)
        console.log('use loaddata1', provinces)
        ref.current.loadData([proObj]).then(() => {
          if (dftCounty) {
            const cityObj = proObj.children.find((item) => item.value === dftCity)
            console.log('use loaddata2')
            ref.current.loadData([cityObj])
          }
        })
      }
    })
  }, [props.defaultValue])

  return (
    <Cascader
      style={{ width: '100%' }}
      loadData={loadData}
      changeOnSelect
      options={provinces}
      {...props}
    />
  )
}
