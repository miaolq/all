import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux'
import Home from './page/home'
import Sentence from './page/sentence'
import Form from './page/form'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="all">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sentence">
            <Sentence />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
