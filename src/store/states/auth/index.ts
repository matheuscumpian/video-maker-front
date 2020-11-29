import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthParams, UserState } from '../../../models/User';
import { AuthService } from '../../../services/Auth';
import jwt from 'jsonwebtoken';
import { TypeStatus } from '../../../models';
import NProgress from 'nprogress';
import { toast } from 'react-toastify';

const INITIAL_STATE: UserState = {
  user: {
    email: '',
    name: '',
    _id: '',
  },
  authenticated: false,
  error: '',
  status: 'NONE',
};

const postAuth = createAsyncThunk('Auth/postAuth', (payload: AuthParams, { rejectWithValue }) =>
  AuthService.post(payload)
    .then(({ data }) => {
      localStorage.setItem('access_token', data.access_token);
      return jwt.decode(data.access_token);
    })
    .then((user: User) => {
      return {
        email: user.email,
        name: user.name,
        _id: user._id,
      };
    })
    .then((user: User) => {
      toast.success('😁 Logged in!', {
        autoClose: 3000,
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return user;
    })
    .catch(err => {
      toast.error(`😥 ${err.data.message}`, {
        autoClose: 4000,
        position: 'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return rejectWithValue(err);
    }),
);

const changeStatus = (state: UserState, action: PayloadAction<TypeStatus>) => ({
  ...state,
  status: action.payload,
});

const updateUserAuth = (state: UserState, action: PayloadAction<string>) => {
  const token = action.payload;
  const user = jwt.decode(token) as User;
  if (!!user && typeof window !== 'undefined') {
    if (!window.location.href.includes('/dashboard')) window.location.pathname = '/dashboard';
  }
  if (!user && typeof window !== 'undefined') {
    if (window.location.pathname != '/' && window.location.pathname != '/login' && window.location.pathname != '/register')
      window.location.pathname = '/';
  }
  return {
    ...state,
    user: {
      email: user?.email,
      name: user?.name,
      _id: user?._id,
    },
    authenticated: !!user,
  };
};

const logout = (state: UserState): UserState => {
  localStorage.removeItem('access_token');
  return {
    ...state,
    user: {},
    authenticated: false,
  };
};

const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: INITIAL_STATE,
  reducers: {
    changeStatus,
    updateUserAuth,
    logout,
  },
  extraReducers: builder => {
    builder
      .addCase(postAuth.pending.type, state => {
        NProgress.start();
        return {
          ...state,
          status: 'LOADING',
        };
      })
      .addCase(postAuth.rejected.type, (state, { payload }: any) => {
        NProgress.done();
        return {
          ...state,
          user: {
            email: '',
            name: '',
          },
          authenticated: false,
          error: payload.message,
          status: 'ERROR',
        };
      })
      .addCase(postAuth.fulfilled.type, (state, { payload }: PayloadAction<User>) => {
        NProgress.done();
        return {
          ...state,
          user: {
            ...state.user,
            email: payload.email,
            name: payload.name,
          },
          authenticated: true,
          status: 'SUCCESS',
        };
      });
  },
});

export { actions, INITIAL_STATE, postAuth, reducer };
