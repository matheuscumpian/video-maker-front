import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RegisterParams, RegisterState } from '../../../models/User'
import { AuthService } from '../../../services/Auth'
import { toast } from 'react-toastify'

const INITIAL_STATE: RegisterState = {
  email: '',
  name: '',
  password: '',
  error: '',
  status: 'NONE'
}

const registerUser = createAsyncThunk(
  'Register/registerUser',
  (payload: RegisterParams, { rejectWithValue }) =>
    AuthService.registerUser(payload)
      .then(({ data }) => {
        return data
      })
      .catch(err => {
        toast.error(err.data.message, {
          autoClose: 4000,
          position: 'top-center',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        })
        return rejectWithValue(err)
      })
)

const { actions, reducer } = createSlice({
  name: 'Register',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending.type, state => {
        console.log('PENDING')
        return {
          ...state,
          status: 'LOADING'
        }
      })
      .addCase(registerUser.rejected.type, (state, { payload }: any) => {
        console.log('REJECTED')
        return {
          email: '',
          name: '',
          password: '',
          error: payload.data.message,
          status: 'ERROR'
        }
      })
      .addCase(registerUser.fulfilled.type, state => {
        console.log('SUCCESS')
        return {
          ...state,
          status: 'SUCCESS'
        }
      })
  }
})

export { actions, INITIAL_STATE, reducer, registerUser }
