import {
  PAYMENT_CLEAR_STATE,
  PAYMENT_MAKE_BEGIN,
  PAYMENT_MAKE_ERROR,
  PAYMENT_MAKE_SUCCESS,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
} from '../constants/paymentConstants';
import * as payment from '../api/paymentApi';
import { sendNotification } from './notificationActions';
import { removeAllLocalCartItems } from './cartActions';
import { emptyUserCart, saveUserOrders } from './userActions';
import logo from '../assests/logo.svg';

export const clearPaymentState = () => (dispatch) =>
  dispatch({ type: PAYMENT_CLEAR_STATE });

export const makeAPayment =
  (orderId, amount, currency, name, email, contact, userId, cart) =>
  async (dispatch) => {
    dispatch({ type: PAYMENT_MAKE_BEGIN });

    const { REACT_APP_RAZORPAY_KEY_ID } = process.env;

    payment
      .loadRazorPay()
      .then(() => {
        const options = {
          key: REACT_APP_RAZORPAY_KEY_ID,
          amount,

          currency,
          name: 'Movil Shop',
          description: 'Movil Shop Payment',
          image: logo,

          order_id: orderId,

          // response
          handler() {
            dispatch(saveUserOrders(userId, cart));
            dispatch({ type: PAYMENT_MAKE_SUCCESS });
            dispatch(sendNotification('Payment Successfull!', false));
            dispatch(removeAllLocalCartItems());
            dispatch(emptyUserCart(userId));

            dispatch(clearPaymentState());
            // console.log(response.razorpay_payment_id);
            // console.log(response.razorpay_order_id);
            // console.log(response.razorpay_signature);
          },

          prefill: {
            name,
            email,
            contact,
          },

          notes: {
            address: 'Razorpay Corporate Office',
          },

          theme: {
            color: '#231e23',
          },
        };

        const rzp1 = new window.Razorpay(options);

        // response
        rzp1.on('payment.failed', () => {
          dispatch({ type: PAYMENT_MAKE_ERROR });

          dispatch(sendNotification('Sorry Could not make a payment!!', true));

          // console.log(response.error.code);
          // console.log(response.error.description);
          // console.log(response.error.source);
          // console.log(response.error.step);
          // console.log(response.error.reason);
          // console.log(response.error.metadata.order_id);
          // console.log(response.error.metadata.payment_id);
        });

        rzp1.open();
      })
      .catch(() => {
        dispatch({ type: PAYMENT_MAKE_ERROR });

        sendNotification('Sorry Could not make a payment!!', true);
      });
  };

export const createAnOrder = (orderDetails, cart) => async (dispatch) => {
  const { totalPrice, name, email, contact, userId } = orderDetails;

  dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN });

  try {
    const res = await payment.createAnOrder(totalPrice);

    if (res) {
      const { id, amount, currency } = res.data.order;

      dispatch({
        type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
      });

      dispatch(
        makeAPayment(id, amount, currency, name, email, contact, userId, cart)
      );
    } else {
      dispatch(sendNotification('Could not create order id!', true));

      dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR });
    }
  } catch (err) {
    const { msg } = err.response.data;

    dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR });

    dispatch(sendNotification(msg, true));
  }
};
