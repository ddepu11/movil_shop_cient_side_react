import { create, getMobile, listAll } from '../api/mobileApi';

import {
  MOBILE_CLEAR_SAVED,
  MOBILE_CREATE_BEGIN,
  MOBILE_CREATE_ERROR,
  MOBILE_CREATE_SUCCESS,
  MOBILE_GET_BEGIN,
  MOBILE_GET_ERROR,
  MOBILE_GET_SUCCESS,
  MOBILE_LIST_BEGIN,
  MOBILE_LIST_ERROR,
  MOBILE_LIST_SUCCESS,
} from '../constants/mobileConstants';
import { loadMobiles } from './filterMobileActions';

import { sendNotification } from './notificationActions';
import { listMobiles } from './sellerActions';

export const createMobile = (formData, id) => async (dispatch) => {
  dispatch({ type: MOBILE_CREATE_BEGIN });

  try {
    await create(formData);

    dispatch({ type: MOBILE_CREATE_SUCCESS });

    dispatch(sendNotification('Successfuly saved mobile info!!!', false));

    dispatch(listMobiles(id));
  } catch (err) {
    const { msg } = err.response.data;

    dispatch({ type: MOBILE_CREATE_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const clearMobileSaved = () => (dispatch) =>
  dispatch({ type: MOBILE_CLEAR_SAVED });

export const listAllMobiles = () => async (dispatch) => {
  dispatch({ type: MOBILE_LIST_BEGIN });

  try {
    const res = await listAll();

    if (res) {
      dispatch({ type: MOBILE_LIST_SUCCESS, payload: res.data.mobiles });
      dispatch(loadMobiles(res.data.mobiles));
    } else {
      dispatch({ type: MOBILE_LIST_ERROR });

      dispatch(sendNotification('Sorry could not fetch mobiles!', true));
    }
  } catch (err) {
    const { msg } = err.response.data;

    dispatch({ type: MOBILE_LIST_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const getMobileById = (id) => async (dispatch) => {
  dispatch({ type: MOBILE_GET_BEGIN });

  try {
    const res = await getMobile(id);

    if (res) {
      dispatch({ type: MOBILE_GET_SUCCESS, payload: res.data.mobile });
    } else {
      dispatch({ type: MOBILE_GET_ERROR });
      dispatch(sendNotification('Could not get the infomation!', true));
    }
  } catch (err) {
    const { msg } = err.response.data;

    dispatch({ type: MOBILE_GET_ERROR });
    dispatch(sendNotification(msg, true));
  }
};
