import { create } from '../api/mobileApi';

import {
  PRODUCT_CREATE_BEGIN,
  PRODUCT_CREATE_ERROR,
  PRODUCT_CREATE_SUCCESS,
} from '../constants/mobileConstants';
import { sendNotification } from './notificationActions';

export const createMobile = (mobileInfo) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_BEGIN });

  try {
    const { data } = await create(mobileInfo);

    console.log(data);

    dispatch({ type: PRODUCT_CREATE_SUCCESS });
  } catch (err) {
    const { msg } = err.responce.data;

    dispatch({ type: PRODUCT_CREATE_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const listMobile = () => {};
