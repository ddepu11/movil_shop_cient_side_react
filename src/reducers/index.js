import { combineReducers } from 'redux';
import user from './userReducer';
import mobile from './mobileReducer';
import notification from './notificationReducer';
import seller from './sellerReducer';
import filterMobile from './filterMobileReducer';
import cart from './cartReducer';

export default combineReducers({
  user,
  mobile,
  notification,
  seller,
  filterMobile,
  cart,
});
