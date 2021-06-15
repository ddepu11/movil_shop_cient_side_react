import { combineReducers } from 'redux';
import user from './userReducer';
import dashboard from './dashboardReducer';

export default combineReducers({ user, dashboard });
