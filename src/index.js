import React from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './common/scss/index.scss'
import Index from 'container/index'
import Login from 'container/login'
import Register from 'container/register'
// import '@/config/getPathsInDirectory.js'
import reducers from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))

reactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)