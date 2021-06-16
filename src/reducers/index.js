import { combineReducers } from 'redux';
import user from './userReducer';
import dashboard from './dashboardReducer';
import notification from './notificationReducer';

export default combineReducers({ user, dashboard, notification });
