import { combineReducers } from 'redux'
import { reducer as auth } from '../states/auth'
import { reducer as register } from '../states/register'

const appReducer = combineReducers({ auth, register })

export default appReducer
