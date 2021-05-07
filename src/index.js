import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import store from './redux/index'
import AutoRoute from './auto-route/index.jsx'
import './style/root.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    console.log('app render')
    const { error, errorInfo } = this.state
    if (error || errorInfo) {
      return (
        <div>
          <div>出错了</div>
          <div>{error}</div>
          <div>{errorInfo}</div>
        </div>
      )
    }

    return (
      <React.StrictMode>
        <ConfigProvider locale={zhCN}>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path="/ar" component={AutoRoute} />
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path="/cube" component={Cube} /> */}
                {/* Routes without a path always match. */}
                {/* <Route component={Home} /> */}
              </Switch>
            </BrowserRouter>
          </Provider>
        </ConfigProvider>
      </React.StrictMode>
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
