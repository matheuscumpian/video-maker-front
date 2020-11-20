import { composeWithDevTools } from '@reduxjs/toolkit/src/devtoolsExtension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './states'
import { UserState } from '../models/User'
import { INITIAL_STATE as user } from './states/auth/index'

export interface ApplicationState {
  loadingBar: boolean
  user: UserState
}

export const initialStateApplication: ApplicationState = {
  loadingBar: false,
  user
}

const configureStore = (preloadedState: ApplicationState) =>
  createStore(appReducer, preloadedState, applyMiddleware(thunk))

export const store = configureStore(initialStateApplication)
