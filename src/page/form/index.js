import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Select, Checkbox, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import data from '../../service/back'

// 手动注册的输入组件不会自动填充（例如：register({ name: 'test' })），因为React Hook Form没有自定义register表单项的ref。

export default function Form() {
  const { register, handleSubmit, watch, errors, setValue, control } = useForm({
    defaultValues: { name: 'ming', province: 'a', married: true },
  })

  useEffect(() => {
    data.getSenlist({ pageIndex: 1 })
    data.getMaterial()
  }, [])

  console.log('render', watch(['name', 'province']))

  const submit = handleSubmit((...o) => {
    console.log('submit', ...o)
  })

  return (
    <div className="form">
      {/* <input name="name" ref={register} />
      <select name="province" ref={register}>
        <option value="a">1</option>
        <option value="b">2</option>
      </select> */}
      <Controller as={Input} name="name" control={control} prefix={<UserOutlined />} size="small" />
      <Controller as={Select} name="province" control={control}>
        <Select.Option value="a">1</Select.Option>
        <Select.Option value="b">2</Select.Option>
      </Controller>
      <Controller
        name="married"
        control={control}
        render={({ onChange, value }) => (
          <Checkbox
            checked={value}
            onChange={(e) => {
              console.log(11, e, e.target.checked)
              onChange(e.target.checked)
            }}
          >
            check
          </Checkbox>
        )}
      />
      <Button onClick={submit}>submit</Button>
    </div>
  )
}
