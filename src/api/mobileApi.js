import axios from 'axios';

export const create = (formData) =>
  axios.post('/mobiles/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const fetchAll = () => {};
