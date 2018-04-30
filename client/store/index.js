import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import activities from './activities'
import activity from './activity'
import { web3, validNetwork, account, contract } from 'web3-state-manager'


const reducer = combineReducers({ user, activities, activity, web3, validNetwork, account, contract })
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './activities'
export * from './activity'
