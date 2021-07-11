import {
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
} from '../constants/paymentConstants';
import * as payment from '../api/paymentApi';
import { sendNotification } from './notificationActions';

export const makePayment =
  (orderId, amount, currency, name, email, contact) => async () => {
    const { RAZORPAY_KEY_ID } = process.env;

    payment
      .loadRazorPay()
      .then(() => {
        const options = {
          key: RAZORPAY_KEY_ID,
          amount,

          currency,
          name: 'Movil Shop',
          description: 'Movil Shop Payment',
          image: '/static/media/logo.9c9eff40.svg',

          order_id: orderId,

          handler(response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
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
            color: '#3399cc',
          },
        };

        const rzp1 = new window.Razorpay(options);

        rzp1.on('payment.failed', (response) => {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });

        rzp1.open();
      })
      .catch((err) => {
        sendNotification(err.message, true);
      });
  };

export const createAnOrder = (orderDetails) => async (dispatch) => {
  const { totalPrice, name, email, contact } = orderDetails;

  console.log(orderDetails);

  dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN });

  try {
    const res = await payment.createAnOrder(totalPrice);

    if (res) {
      //
      const { id, amount, currency } = res.data.order;
      dispatch({
        type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
        payload: id,
      });

      dispatch(makePayment(id, amount, currency, name, email, contact));
    } else {
      dispatch(sendNotification('Could not create order id!', true));
      dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR });
    }
  } catch (err) {
    console.log(err);
    const { msg } = err.response.data;
    dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR });

    dispatch(sendNotification(msg, true));
  }
};
