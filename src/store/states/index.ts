import { combineReducers } from 'redux'
import { reducer as auth } from '../states/auth'

const appReducer = combineReducers({ auth })

export default appReducer
