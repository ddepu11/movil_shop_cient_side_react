import axios from 'axios';

const apiUrl = 'https://movil-shop.herokuapp.com';

export const create = (formData) =>
  axios.post(`${apiUrl}/mobiles`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const listAll = () => axios.get(`${apiUrl}/mobiles`);

export const getMobile = (id) => axios.get(`${apiUrl}/mobiles/${id}`);

export const review = (id, stars) =>
  axios.post(`${apiUrl}/mobiles/review`, { id, stars });

export const updateReview = (mobileId, stars, reviewId) =>
  axios.put(`${apiUrl}/mobiles/review`, { mobileId, stars, reviewId });
