import axios from 'axios';
import apiUrl from './apiUrl';

export const listMobiles = () => axios.get(`${apiUrl}/mobiles`);

export const listUsers = () => axios.get(`${apiUrl}/users/role=USER`);

export const deleteMobile = (mobileId) =>
  axios.delete(`${apiUrl}/mobiles/${mobileId}`);

export const listSellers = () => axios.get(`${apiUrl}/users/role=SELLER`);

export const deleteUser = (userId) =>
  axios.delete(`${apiUrl}/users/${userId}/role=USER`);

export const deleteSeller = (userId) =>
  axios.delete(`${apiUrl}/users/${userId}/role=SELLER`);
