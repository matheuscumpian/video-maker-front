import NProgress from 'nprogress';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { VideoState } from '../../../models/Video';
import { VideoService } from '../../../services/Video';
import { toast } from 'react-toastify';

const INITIAL_STATE: VideoState = {
  videos: [],
  error: '',
  status: 'NONE',
};

const getVideos = createAsyncThunk('Video/getVideos', (userId: string, { rejectWithValue }) =>
  VideoService.getVideos(userId)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      toast.error('😥 Parece que houve um problema!', {
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

const { actions, reducer } = createSlice({
  name: 'Video',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getVideos.pending.type, state => {
        NProgress.start();
        return {
          ...state,
          status: 'LOADING',
        };
      })
      .addCase(getVideos.rejected.type, (state, { payload }: any) => {
        NProgress.done();
        return {
          ...state,
          error: payload.message,
          status: 'ERROR',
        };
      })
      .addCase(getVideos.fulfilled.type, (state, { payload }: PayloadAction<any>) => {
        NProgress.done();
        return {
          ...state,
          videos: payload,
          status: 'SUCCESS',
        };
      });
  },
});

export { actions, INITIAL_STATE, getVideos, reducer };
