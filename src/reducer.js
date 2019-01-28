import { combineReducers } from 'redux'

const reducersContext = require.context('./reducers', false, /\.reducer\.js$/)

const reducers = {}
reducersContext.keys().forEach(reducer => {
  const module = reducersContext(reducer).default
  if (reducers[module.name]) return
  reducers[module.name] = module
})

export default combineReducers(reducers)