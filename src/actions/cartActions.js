import {
  CART_ADD_MOBILE_TO_LOCAL_BEGIN,
  CART_ADD_MOBILE_TO_LOCAL_SUCCESS,
  CART_ADD_MOBILE_TO_LOCAL_ERROR,
} from '../constants/cartConstants';
import { sendNotification } from './notificationActions';

export const addMobileToLocalStorageCart =
  (mobileId, picture, title, color, sellerName, sellerEmail, price) =>
  (dispatch) => {
    dispatch({ type: CART_ADD_MOBILE_TO_LOCAL_BEGIN });

    const getLocalCart = () => JSON.parse(localStorage.getItem('cart'));

    if (!getLocalCart()) {
      localStorage.setItem(
        'cart',
        JSON.stringify([
          {
            mobileId,
            picture,
            title,
            color,
            sellerName,
            sellerEmail,
            price,
          },
        ])
      );
      dispatch({ type: CART_ADD_MOBILE_TO_LOCAL_SUCCESS });
    } else {
      const cart = getLocalCart();

      let flag = false;

      cart.forEach((m) => {
        if (m.mobileId === mobileId) flag = true;
      });

      if (flag) {
        dispatch(sendNotification('Already Added in cart!', false));

        dispatch({ type: CART_ADD_MOBILE_TO_LOCAL_ERROR });
      } else {
        cart.push({
          mobileId,
          picture,
          title,
          color,
          sellerName,
          sellerEmail,
          price,
        });

        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch({ type: CART_ADD_MOBILE_TO_LOCAL_SUCCESS });
      }
    }
  };

export const removeFromCart = () => (dispatch) => {
  dispatch({ type: CART_ADD_MOBILE_TO_LOCAL_BEGIN });
};
