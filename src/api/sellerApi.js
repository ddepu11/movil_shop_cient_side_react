import axios from 'axios';
import apiUrl from './apiUrl';

axios.defaults.withCredentials = true;

export const mobiles = (sellerId) =>
  axios.get(`${apiUrl}/sellers/${sellerId}/mobiles/list`);

export const remove = (id) => axios.delete(`${apiUrl}/sellers/mobiles/${id}`);

export const update = (mobileInfo, mobileId) =>
  axios.put(`${apiUrl}/sellers/mobiles/${mobileId}`, mobileInfo);
