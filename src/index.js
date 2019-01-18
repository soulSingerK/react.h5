import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './common/scss/index.scss'
import Index from 'container/index'
import Login from 'container/login'
import Register from 'container/register'

reactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)