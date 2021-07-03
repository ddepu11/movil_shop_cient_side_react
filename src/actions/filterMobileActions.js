import {
  FILTER_MOBILE_GET_ALL,
  FILTER_MOBILE_SET,
  FILTER_MOBILE_SORT,
} from '../constants/filterMobileConstants';

export const loadMobiles = (mobiles) => (dispatch) => {
  dispatch({
    type: FILTER_MOBILE_GET_ALL,
    payload: mobiles.sort((a, b) => a.price - b.price),
  });
};

export const setFilters =
  ({ name, value }) =>
  (dispatch) =>
    dispatch({ type: FILTER_MOBILE_SET, payload: { name, value } });

export const sort = () => (dispatch) => dispatch({ type: FILTER_MOBILE_SORT });
