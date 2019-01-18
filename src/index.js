import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './common/scss/index.scss'
import Login from './container/login'

reactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)