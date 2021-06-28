import { mobiles } from '../api/sellerApi';

import {
  SELLER_MOBILE_LIST_BEGIN,
  SELLER_MOBILE_LIST_ERROR,
  SELLER_MOBILE_LIST_SUCCESS,
} from '../constants/sellerConstants';

import { sendNotification } from './notificationActions';

export const listMobiles = (sellerId) => async (dispatch) => {
  dispatch({ type: SELLER_MOBILE_LIST_BEGIN });

  try {
    const res = await mobiles(sellerId);

    if (res) {
      dispatch({ type: SELLER_MOBILE_LIST_SUCCESS, payload: res.data.mobiles });
    } else {
      dispatch({ type: SELLER_MOBILE_LIST_ERROR });

      dispatch(sendNotification('Could not fetch the mobiles!!', true));
    }
  } catch (err) {
    const { msg } = err.response.data;

    dispatch({ type: SELLER_MOBILE_LIST_ERROR });

    dispatch(sendNotification(msg, true));
  }
};

export const getSeller = () => {};
