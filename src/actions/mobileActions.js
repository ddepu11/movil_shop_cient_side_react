import { create } from '../api/mobileApi';

import {
  MOBILE_CLEAR_SAVED,
  MOBILE_CREATE_BEGIN,
  MOBILE_CREATE_ERROR,
  MOBILE_CREATE_SUCCESS,
} from '../constants/mobileConstants';

import { sendNotification } from './notificationActions';

export const createMobile = (formData) => async (dispatch) => {
  dispatch({ type: MOBILE_CREATE_BEGIN });

  try {
    const { data } = await create(formData);

    console.log(data);

    dispatch({ type: MOBILE_CREATE_SUCCESS });

    dispatch(sendNotification('Successfuly saved mobile info!!!', false));
  } catch (err) {
    const { msg } = err.responce.data;

    dispatch({ type: MOBILE_CREATE_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const clearMobileSaved = () => (dispatch) =>
  dispatch({ type: MOBILE_CLEAR_SAVED });

export const listMobile = () => {};
