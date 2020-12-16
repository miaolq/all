import React from 'react'
import { Layout, Menu, Popover } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'
import Sentence from '../sentence'
import Form from '../form'
import Login from '../login'
import Prop from '../test/Prop'
import Portal from '../test/Portal'
import Context from './context'
import Key from '../key'
import VL from '../virtual-list'
import RT from '../redux-thunk'
import Busy from '../busy'
import './style.scss'

const { Header, Sider, Content } = Layout
const { Item } = Menu

const menu = [
  { to: '/sentence', label: 'sentence' },
  { to: '/form', label: 'form' },
  { to: '/word', label: 'word' },
  { to: '/test', label: 'test' },
  { to: '/portal', labrl: 'portal' },
  { to: '/context', label: 'context' },
  { to: '/vl', label: 'vl' },
  { to: '/key', label: 'key' },
  { to: '/thunk', label: 'thunk' },
  { to: '/busy', label: 'busy' },
]

export default function Home() {
  return (
    <Layout className="root-layout">
      <Sider>
        <div className="menu-title">ALL</div>
        <Menu theme="dark">
          {menu.map((item) => (
            <Item key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </Item>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span />
          <Popover content={<div>退出登录</div>}>
            <img
              style={{ borderRadius: '50%', width: 30, height: 30 }}
              src={`${GOOD}/avatar/avatar2.jpg`}
            />
          </Popover>
        </Header>
        <Content>
          <Route path="/sentence">
            <Sentence />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/test">
            <Prop />
            <Portal />
          </Route>
          <Route path="/context">
            <Context />
          </Route>
          <Route path="/vl">
            <VL />
          </Route>
          <Route path="/busy" component={Busy} />
          <Route path="/form/login">
            <Login />
          </Route>
          <Route path="/key">
            <Key />
          </Route>
          <Route path="/thunk" component={RT} />
        </Content>
      </Layout>
    </Layout>
  )
}
