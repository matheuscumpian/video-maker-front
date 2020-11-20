import { combineReducers, Reducer } from 'redux'
import { reducer as AuthReducer } from '../states/auth'

const appReducer: Reducer = () =>
  combineReducers({
    AuthReducer
  })

export default appReducer
