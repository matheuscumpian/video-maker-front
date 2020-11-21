import thunk from 'redux-thunk'
import appReducer from './states'
import { UserState } from '../models/User'
import { INITIAL_STATE as user } from './states/auth/index'
import { configureStore } from '@reduxjs/toolkit'

export interface ApplicationState {
  auth: UserState
}

export const initialStateApplication: ApplicationState = {
  auth: user
}

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = configureStore({
  reducer: appReducer,
  middleware: [thunk, logger],
  preloadedState: initialStateApplication,
  devTools: true
})

export default store
