import axios from 'axios';
import apiUrl, { options } from './apiUrl';

const authenticate = () =>
  axios.get(`${apiUrl}/users/authenticate`, { ...options });

const logIn = (email, password) =>
  axios.post(`${apiUrl}/users/sign-in`, { email, password }, { ...options });

// Signing up with credentials and an image
const signUp = (formData) =>
  axios.post(`${apiUrl}/users/sign-up`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...options,
  });

const accountInfo = () =>
  axios.get(`${apiUrl}/users/account-info`, { ...options });

const logOut = () =>
  axios.get(`${apiUrl}/users/log-out`, {
    ...options,
  });

const checkIsEmailRegistered = (email) =>
  axios.post(`${apiUrl}/users/exists`, { email }, { ...options });

const update = (data, _id) => axios.put(`/users/${_id}`, data, { ...options });

const changeDP = (formData, _id) =>
  axios.put(`${apiUrl}/users/${_id}/dp`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...options,
  });

const addToCart = (userId, mobile) =>
  axios.put(`${apiUrl}/users/${userId}/cart`, mobile, { ...options });

const increaseOrDecreaseCartItemQuantity = (userId, cartItemId, action) =>
  axios.put(
    `${apiUrl}/users/${userId}/cart/item/${cartItemId}`,
    { action },
    { ...options }
  );

const deleteCartItem = (userId, cartItemId) =>
  axios.delete(`${apiUrl}/users/${userId}/cart/item/${cartItemId}`, {
    ...options,
  });

const removeAllCartItems = (userId) =>
  axios.delete(`${apiUrl}/users/${userId}/cart/items`, { ...options });

const saveDeliveryAddress = (userId, deliveryAddress) =>
  axios.put(`${apiUrl}/users/${userId}/deliveryAddress`, deliveryAddress, {
    ...options,
  });

const saveUserOrders = (userId, cart) =>
  axios.put(`${apiUrl}/users/${userId}/orders`, cart, { ...options });

export {
  logIn,
  signUp,
  accountInfo,
  logOut,
  checkIsEmailRegistered,
  authenticate,
  update,
  changeDP,
  addToCart,
  increaseOrDecreaseCartItemQuantity,
  deleteCartItem,
  removeAllCartItems,
  saveDeliveryAddress,
  saveUserOrders,
};
