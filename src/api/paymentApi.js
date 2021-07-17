import axios from 'axios';
import apiUrl from './apiUrl';

axios.defaults.withCredentials = true;

export const createAnOrder = async (totalPrice) =>
  axios.post(`${apiUrl}/orders`, { amount: totalPrice });

// Load Razor Pay Script
export const loadRazorPay = () =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject();
    };

    document.body.appendChild(script);
  });
