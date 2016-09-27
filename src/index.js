import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import AskForTask from './components/AskForTask'
import CurrentTask from './components/CurrentTask'
import Tasklist from './components/Tasklist'
import Profile from './components/Profile'
import { Router, Route, browserHistory } from 'react-router'
import './styles/screen.sass'

const router = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/get-task' component={AskForTask} />
      <Route path='/currentTask' component={CurrentTask} />
      <Route path='/todolist' component={Tasklist} />
      <Route path='/profile' component={Profile} />
    </Route>
  </Router>
)

render(router, document.getElementById('root'))
