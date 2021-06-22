import { combineReducers } from 'redux';
import user from './userReducer';
import mobile from './mobileReducer';
import notification from './notificationReducer';

export default combineReducers({ user, mobile, notification });
