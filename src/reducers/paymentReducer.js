import {
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
} from '../constants/paymentConstants';

const initialState = {
  paymentLoading: true,
  paymentError: false,
};

const payment = (state = initialState, action) => {
  switch (action.type) {
    // Create an order
    case PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN:
      return {
        ...state,
        paymentLoading: true,
      };

    case PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS:
      return {
        ...state,
        paymentLoading: false,
      };

    case PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR:
      return {
        ...state,
        paymentLoading: false,
        paymentError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default payment;
