import {
  CART_ADD_MOBILE_BEGIN,
  CART_ADD_MOBILE_ERROR,
  CART_ADD_MOBILE_SUCCESS,
} from '../constants/cartConstants';

const initiateState = {
  cart: [],
  cartLoading: false,
};

const getLocalCart = () => JSON.parse(localStorage.getItem('cart'));

if (getLocalCart()) {
  initiateState.cart = getLocalCart();
}

const cart = (state = initiateState, action) => {
  switch (action.type) {
    case CART_ADD_MOBILE_BEGIN:
      return {
        ...state,
        cartLoading: true,
      };

    case CART_ADD_MOBILE_SUCCESS:
      return {
        ...state,
        cartLoading: false,
        cart: getLocalCart(),
      };

    case CART_ADD_MOBILE_ERROR:
      return {
        ...state,
        cartLoading: false,
        cart: getLocalCart(),
      };

    default:
      return {
        ...state,
      };
  }
};

export default cart;
