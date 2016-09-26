import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import { Router, Route, browserHistory } from 'react-router'
import './styles/screen.sass'

const router = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
