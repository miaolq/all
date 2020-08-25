import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import Home from './page/home'
import Sentence from './page/sentence'
import Form from './page/form'

export default function App() {
  return (
    <BrowserRouter>
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
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
