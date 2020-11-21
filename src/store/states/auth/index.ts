import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User, AuthParams, UserState } from '../../../models/User'
import { AuthService } from '../../../services/Auth'
import jwt from 'jsonwebtoken'

const INITIAL_STATE: UserState = {
  user: {
    email: '',
    name: '',
    password: '',
    passwordConfirm: ''
  },
  error: '',
  status: 'NONE'
}

export const postAuth = createAsyncThunk(
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

const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postAuth.pending.type, state => {
        console.log('PENDING')
        return {
          ...state,
          user: {
            ...state.user
          },
          status: 'LOADING'
        }
      })
      .addCase(postAuth.rejected.type, (state, { payload }: any) => {
        console.log('REJECTED')
        return {
          ...state,
          user: {},
          error: payload.message,
          status: 'ERROR'
        }
      })
      .addCase(
        postAuth.fulfilled.type,
        (state, { payload }: PayloadAction<User>) => {
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

export { reducer, INITIAL_STATE, actions }
