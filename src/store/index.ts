import thunk from 'redux-thunk'
import appReducer from './states'
import { RegisterState, UserState } from '../models/User'
import { VideoState } from '../models/Video'
import { INITIAL_STATE as user } from './states/auth'
import { INITIAL_STATE as register } from './states/register'
import { INITIAL_STATE as video } from './states/video'
import { configureStore } from '@reduxjs/toolkit'

export interface ApplicationState {
  auth: UserState
  register: RegisterState
  video: VideoState
}

export const initialStateApplication: ApplicationState = {
  auth: user,
  register: register,
  video: video
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
