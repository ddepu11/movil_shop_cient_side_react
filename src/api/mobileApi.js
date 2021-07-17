import axios from 'axios';
import apiUrl, { options } from './apiUrl';

export const create = (formData) =>
  axios.post(`${apiUrl}/mobiles`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...options,
  });

export const listAll = () => axios.get(`${apiUrl}/mobiles`, { ...options });

export const getMobile = (id) =>
  axios.get(`${apiUrl}/mobiles/${id}`, { ...options });

export const review = (id, stars) =>
  axios.post(`${apiUrl}/mobiles/review`, { id, stars }, { ...options });

export const updateReview = (mobileId, stars, reviewId) =>
  axios.put(
    `${apiUrl}/mobiles/review`,
    { mobileId, stars, reviewId },
    { ...options }
  );
