import axios from 'axios';
import apiUrl, { options } from './apiUrl';

export const mobiles = (sellerId) =>
  axios.get(`${apiUrl}/sellers/${sellerId}/mobiles/list`, { ...options });

export const remove = (id) =>
  axios.delete(`${apiUrl}/sellers/mobiles/${id}`, { ...options });

export const update = (mobileInfo, mobileId) =>
  axios.put(`${apiUrl}/sellers/mobiles/${mobileId}`, mobileInfo, {
    ...options,
  });
