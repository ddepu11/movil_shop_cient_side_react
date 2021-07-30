import {
  ADMIN_LIST_USERS_BEGIN,
  ADMIN_LIST_USERS_ERROR,
  ADMIN_LIST_USERS_SUCCESS,
  ADMIN_DELETE_MOBILE_BEGIN,
  ADMIN_DELETE_MOBILE_ERROR,
  ADMIN_DELETE_MOBILE_SUCCESS,
  ADMIN_LIST_MOBILE_BEGIN,
  ADMIN_LIST_MOBILE_ERROR,
  ADMIN_LIST_MOBILE_SUCCESS,
  ADMIN_LIST_SELLER_BEGIN,
  ADMIN_LIST_SELLER_ERROR,
  ADMIN_LIST_SELLER_SUCCESS,
  ADMIN_DELETE_USER_BEGIN,
  ADMIN_DELETE_USER_ERROR,
  ADMIN_DELETE_USER_SUCCESS,
} from '../constants/adminConstants';
import * as admin from '../api/adminApi';
import { sendNotification } from './notificationActions';

export const listUsers = () => async (dispatch) => {
  dispatch({ type: ADMIN_LIST_USERS_BEGIN });

  try {
    const res = await admin.listUsers();

    if (res) {
      dispatch({ type: ADMIN_LIST_USERS_SUCCESS, payload: res.data.users });
    } else {
      dispatch({ type: ADMIN_LIST_USERS_ERROR });

      dispatch(sendNotification('Could not list users!', true));
    }
  } catch (err) {
    let msg = err.message;

    if (err.response) {
      msg = err.response.data.msg;
    }

    dispatch(sendNotification(msg, true));

    dispatch({ type: ADMIN_LIST_USERS_ERROR });
  }
};

export const deleteMobile = (mobileId) => async (dispatch) => {
  dispatch({ type: ADMIN_DELETE_MOBILE_BEGIN });

  try {
    const res = await admin.deleteMobile(mobileId);

    if (res) {
      dispatch({
        type: ADMIN_DELETE_MOBILE_SUCCESS,
        payload: mobileId,
      });

      dispatch(sendNotification('Successfully deleted a mobile!', false));
    } else {
      dispatch({ type: ADMIN_DELETE_MOBILE_ERROR });

      dispatch(sendNotification('Could not delete mobile!', true));
    }
  } catch (err) {
    let msg = err.message;

    if (err.response) {
      msg = err.response.data.msg;
    }

    dispatch({ type: ADMIN_DELETE_MOBILE_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const listMobiles = () => async (dispatch) => {
  dispatch({ type: ADMIN_LIST_MOBILE_BEGIN });

  try {
    const res = await admin.listMobiles();

    if (res) {
      dispatch({
        type: ADMIN_LIST_MOBILE_SUCCESS,
        payload: res.data.mobiles,
      });
    } else {
      dispatch(sendNotification('Could not list mobiles!', true));
    }
  } catch (err) {
    let msg = err.message;

    if (err.response) {
      msg = err.message.data.msg;
    }

    dispatch({ type: ADMIN_LIST_MOBILE_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const listSeller = () => async (dispatch) => {
  dispatch({ type: ADMIN_LIST_SELLER_BEGIN });

  try {
    const res = await admin.listSellers();

    if (res) {
      dispatch({ type: ADMIN_LIST_SELLER_SUCCESS, payload: res.data.sellers });
    } else {
      dispatch({ type: ADMIN_LIST_SELLER_ERROR });

      dispatch(sendNotification('Could not fetch sellers', true));
    }
  } catch (err) {
    let msg = err.message;

    if (err.response) {
      msg = err.response.data.msg;
    }

    dispatch({ type: ADMIN_LIST_SELLER_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: ADMIN_DELETE_USER_BEGIN });

  try {
    const res = await admin.deleteUser(userId);

    if (res) {
      dispatch({
        type: ADMIN_DELETE_USER_SUCCESS,
        payload: userId,
      });

      dispatch(sendNotification('Successfully deleted a user!', false));
    } else {
      dispatch({
        type: ADMIN_DELETE_USER_ERROR,
        payload: res.data.list,
      });

      dispatch(sendNotification('Could not delete a user!', true));
    }
  } catch (err) {
    let msg = err.message;

    if (err.response) {
      msg = err.response.data.msg;
    }

    dispatch({ type: ADMIN_DELETE_USER_ERROR });

    dispatch(sendNotification(msg, true));
  }
};
