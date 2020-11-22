import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User, AuthParams, UserState } from '../../../models/User'
import { AuthService } from '../../../services/Auth'
import jwt from 'jsonwebtoken'
import { TypeStatus } from '../../../models'
import NProgress from 'nprogress'

const INITIAL_STATE: UserState = {
  user: {
    email: '',
    name: ''
  },
  error: '',
  status: 'NONE'
}

const postAuth = createAsyncThunk(
  'Auth/postAuth',
  (payload: AuthParams, { rejectWithValue }) =>
    AuthService.post(payload)
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        return jwt.decode(data.access_token)
      })
      .then((user: User) => {
        return {
          email: user.email,
          name: user.name
        }
      })
      .catch(err => rejectWithValue(err))
)

const changeStatus = (state: UserState, action: PayloadAction<TypeStatus>) => ({
  ...state,
  status: action.payload
})

const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: INITIAL_STATE,
  reducers: {
    changeStatus
  },
  extraReducers: builder => {
    builder
      .addCase(postAuth.pending.type, state => {
        NProgress.start()
        return {
          ...state,
          user: {
            ...state.user
          },
          status: 'LOADING'
        }
      })
      .addCase(postAuth.rejected.type, (state, { payload }: any) => {
        NProgress.done()
        return {
          ...state,
          user: {
            email: '',
            name: ''
          },
          error: payload.message,
          status: 'ERROR'
        }
      })
      .addCase(
        postAuth.fulfilled.type,
        (state, { payload }: PayloadAction<User>) => {
          NProgress.done()
          return {
            ...state,
            user: {
              ...state.user,
              email: payload.email,
              name: payload.name
            },
            status: 'SUCCESS'
          }
        }
      )
  }
})

export { actions, INITIAL_STATE, postAuth, reducer }
