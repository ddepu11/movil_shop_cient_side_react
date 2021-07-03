import {
  FILTER_MOBILE_GET_ALL,
  FILTER_MOBILE_SET,
} from '../constants/filterMobileConstants';

export const loadMobiles = (mobiles) => (dispatch) => {
  dispatch({ type: FILTER_MOBILE_GET_ALL, payload: mobiles });
};

export const setFilters =
  ({ name, value }) =>
  (dispatch) =>
    dispatch({ type: FILTER_MOBILE_SET, payload: { name, value } });

export const some = () => () => {};
