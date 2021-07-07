import {
  CART_ADD_MOBILE_TO_LOCAL_BEGIN,
  CART_ADD_MOBILE_TO_LOCAL_ERROR,
  CART_ADD_MOBILE_TO_LOCAL_SUCCESS,
} from '../constants/cartConstants';

const initiateState = {
  localStorageCart: [],
  cartLoading: false,
};

const getLocalCart = () => JSON.parse(localStorage.getItem('cart'));

if (getLocalCart()) {
  initiateState.localStorageCart = getLocalCart();
}

const cart = (state = initiateState, action) => {
  switch (action.type) {
    case CART_ADD_MOBILE_TO_LOCAL_BEGIN:
      return {
        ...state,
        cartLoading: true,
      };

    case CART_ADD_MOBILE_TO_LOCAL_SUCCESS:
      return {
        ...state,
        cartLoading: false,
        localStorageCart: getLocalCart(),
      };

    case CART_ADD_MOBILE_TO_LOCAL_ERROR:
      return {
        ...state,
        cartLoading: false,
        localStorageCart: getLocalCart(),
      };

    default:
      return {
        ...state,
      };
  }
};

export default cart;
