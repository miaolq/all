import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Layout, Menu } from 'antd'
import store from './redux'
import Sentence from './page/sentence'
import Form from './page/form'
import './style/root.scss'

const { Header, Sider, Content } = Layout
const { Item } = Menu

const menu = [
  { to: '/sentence', label: 'sentence' },
  { to: '/form', label: 'form' },
  { to: '/word', label: 'word' },
]

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="all">
        <Route path="/">
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
              <Header>header</Header>
              <Content>
                <Switch>
                  <Route path="/sentence">
                    <Sentence />
                  </Route>
                  <Route path="/form">
                    <Form />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Route>
      </BrowserRouter>
    </Provider>
  )
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
