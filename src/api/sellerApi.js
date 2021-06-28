import axios from 'axios';

export const mobiles = (sellerId) =>
  axios.get(`/sellers/${sellerId}/mobiles/list`);

export const deleteS = () => {};
