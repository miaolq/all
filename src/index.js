import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import Home from './page/home'
import Login from './page/login'
import './style/root.scss'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="all">
        <Switch>
          <Route path="/login" component={Login} />
          {/* Routes without a path always match. */}
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
