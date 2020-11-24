import { combineReducers } from 'redux';
import { reducer as auth } from '../states/auth';
import { reducer as register } from '../states/register';
import { reducer as video } from '../states/video';

const appReducer = combineReducers({ auth, register, video });

export default appReducer;
