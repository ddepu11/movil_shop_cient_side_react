import axios from 'axios';

export const create = (mobileInfo) => axios.post('/mobile/create', mobileInfo);

export const fetchAll = () => {};
