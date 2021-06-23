import axios from 'axios';

export const create = (mobileInfo) => axios.post('/mobiles/create', mobileInfo);

export const fetchAll = () => {};
