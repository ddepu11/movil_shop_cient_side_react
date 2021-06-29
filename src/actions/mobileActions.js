import { create } from '../api/mobileApi';

import {
  MOBILE_CLEAR_SAVED,
  MOBILE_CREATE_BEGIN,
  MOBILE_CREATE_ERROR,
  MOBILE_CREATE_SUCCESS,
} from '../constants/mobileConstants';

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
