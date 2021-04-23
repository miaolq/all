import React, { useRef, useMemo } from 'react'
import { Input, InputProps } from 'antd'

export interface InputerIF {
  upperCase?: boolean
  validator?: (val: string) => boolean
}

// /^(0?|[1-9]\d*)$/ 0 空字符串 非0开头的数字

export const regex = {
  naturalNumber: /^(0?|[1-9]\d*)$/, // 0 空字符串 非0开头的数字
  integer: /^\d*$/,
  number: /^\d*\.?\d*$/,
  integerAll: /^-?\d*$/,
  numberAll: /^-?\d*\.?\d*$/,
}

export default function Inputer(props: any & InputProps) {
  const { upperCase = false, onChange, ...rest } = props
  const composition = useRef(false)

  const _onChange = e => {
    let val: string = e.target.value.trim()
    if (upperCase && !composition.current) {
      val = val.toUpperCase()
    }
    console.log(999, val, !/^\d*$/.test(val), props.value)

    if (!/^\d*$/.test(val)) {
      return
    }
    onChange(val)
  }

  const onCompositionStart = () => {
    composition.current = true
  }

  const onCompositionEnd = e => {
    composition.current = false
    _onChange(e)
  }

  return (
    <Input
      {...rest}
      {...merge}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
      onChange={_onChange}
    />
  )
}
