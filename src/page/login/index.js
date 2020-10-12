import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { loginT } from '../../redux/user-rd'

export default function Login() {
  const [account, setAccount] = useState('')
  const [passwd, setPasswd] = useState('')

  const dispatch = useDispatch()

  const click = () => {
    dispatch(loginT({ account: 'root', passwd: 'root' }))
  }

  return (
    <div>
      <Input value={account} onChange={(e) => setAccount(e.target.value)} />
      <Input type="password" value={passwd} onChange={(e) => setPasswd(e.target.value)} />
      <Button onClick={click}>登录</Button>
    </div>
  )
}
