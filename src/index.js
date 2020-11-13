import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import Home from './page/home'
import Login from './page/login'
import './style/root.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>出错了</div>
    }
    return (
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter basename="all">
            <Switch>
              <Route path="/login" component={Login} />
              {/* Routes without a path always match. */}
              <Route component={Home} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
