import axios from 'axios';
import apiUrl from './apiUrl';

export const listMobiles = () => axios.get(`${apiUrl}/mobiles`);

export const listUsers = () => axios.get(`${apiUrl}/users`);

export const deleteMobile = (mobileId) =>
  axios.delete(`${apiUrl}/mobiles/${mobileId}`);

export const listSellers = () => axios.get(`${apiUrl}/users/role=seller`);
