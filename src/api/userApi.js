import axios from 'axios';

const apiUrl = 'https://movil-shop.herokuapp.com';

const authenticate = () => axios.get(`${apiUrl}/users/authenticate`);

const logIn = (email, password) =>
  axios.post(`${apiUrl}/users/sign-in`, { email, password });

// Signing up with credentials and an image
const signUp = (formData) =>
  axios.post(`${apiUrl}/users/sign-up`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const accountInfo = () => axios.get(`${apiUrl}/users/account-info`);

const logOut = () => axios.get(`${apiUrl}/users/log-out`);

const checkIsEmailRegistered = (email) =>
  axios.post(`${apiUrl}/users/exists`, { email });

const update = (data, _id) => axios.put(`/users/${_id}`, data);

const changeDP = (formData, _id) =>
  axios.put(`${apiUrl}/users/${_id}/dp`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const addToCart = (userId, mobile) =>
  axios.put(`${apiUrl}/users/${userId}/cart`, mobile);

const increaseOrDecreaseCartItemQuantity = (userId, cartItemId, action) =>
  axios.put(`${apiUrl}/users/${userId}/cart/item/${cartItemId}`, { action });

const deleteCartItem = (userId, cartItemId) =>
  axios.delete(`${apiUrl}/users/${userId}/cart/item/${cartItemId}`);

const removeAllCartItems = (userId) =>
  axios.delete(`${apiUrl}/users/${userId}/cart/items`);

const saveDeliveryAddress = (userId, deliveryAddress) =>
  axios.put(`${apiUrl}/users/${userId}/deliveryAddress`, deliveryAddress);

const saveUserOrders = (userId, cart) =>
  axios.put(`${apiUrl}/users/${userId}/orders`, cart);

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
