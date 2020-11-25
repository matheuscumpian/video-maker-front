import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, UserState } from '../models/User';
import { ApplicationState } from '../store';
import { actions } from '../store/states/auth';
import { useMount } from './useMount';
import { useEffect } from 'react';

const useAuth = () => {
  const dispatch = useDispatch();
  //const token = localStorage.getItem('access_token');
  dispatch(
    actions.updateUserAuth(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI3ZWY2ZjE0ZTE0OTE1YTU4ZTcyYjYiLCJuYW1lIjoiTWF0aGV1cyBDdW1waWFuIiwiZW1haWwiOiJtYXRoZXVzLmN1bXBpYW5AaG90bWFpbC5jb20iLCJpYXQiOjE2MDYzMzkzMjZ9.b2vyWnHVoqw3zcYpHZAZK8Kpz3wPWBjYPMR6MzWnPhQ',
    ),
  );
};

export { useAuth };
