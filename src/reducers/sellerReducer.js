import {
  SELLER_MOBILE_LIST_BEGIN,
  SELLER_MOBILE_LIST_ERROR,
  SELLER_MOBILE_LIST_SUCCESS,
} from '../constants/sellerConstants';

const initialState = {
  sellerMobiles: [],
  sellerLoading: false,
  sellerError: false,
};

const seller = (sellerState = initialState, action) => {
  switch (action.type) {
    case SELLER_MOBILE_LIST_BEGIN:
      return {
        ...sellerState,
        sellerLoading: true,
      };

    case SELLER_MOBILE_LIST_SUCCESS:
      return {
        ...sellerState,
        sellerLoading: false,
        sellerMobiles: action.payload,
      };

    case SELLER_MOBILE_LIST_ERROR:
      return {
        ...sellerState,
        sellerLoading: false,
        sellerError: true,
      };

    default:
      return sellerState;
  }
};

export default seller;
