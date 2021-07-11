import {
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_ERROR,
  PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
} from '../constants/paymentConstants';
import * as payment from '../api/paymentApi';
import { sendNotification } from './notificationActions';

export const createAnOrderId = (orderDetails) => async (dispatch) => {
  dispatch({ type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_BEGIN });
  try {
    const res = await payment.createAnOrderId(orderDetails);

    if (res) {
      dispatch({
        type: PAYMENT_RAZORPAY_CREATE_AN_ORDER_SUCCESS,
        payload: res.data.order.id,
      });
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

export const makePayment = () => async () => {
  // Load Razor Pay Script
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  document.body.appendChild(script);

  // const { RAZORPAY_KEY_ID } = process.env;

  // const options = {
  //   key: RAZORPAY_KEY_ID,
  //   amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise

  //   currency: 'INR',
  //   name: 'Movil Shop',
  //   description: 'Test Transaction',
  //   image: '/static/media/logo.9c9eff40.svg',

  //   order_id: 'order_9A33XWu170gUtm', // This is a sample Order ID. Pass the `id` obtained in the response of Step 1

  //   handler(response) {
  //     alert(response.razorpay_payment_id);
  //     alert(response.razorpay_order_id);
  //     alert(response.razorpay_signature);
  //   },

  //   prefill: {
  //     name: 'Gaurav Kumar',
  //     email: 'gaurav.kumar@example.com',
  //     contact: '9999999999',
  //   },
  //   notes: {
  //     address: 'Razorpay Corporate Office',
  //   },
  //   theme: {
  //     color: '#3399cc',
  //   },
  // };
};
