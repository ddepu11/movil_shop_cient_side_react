import {
  FILTER_MOBILE_GET_ALL,
  FILTER_MOBILE_SET,
} from '../constants/filterMobileConstants';

const initialState = {
  mobiles: [],

  filters: {
    view: 'grid',
    sortBy: 'lowest',
    search: '',
    brand: 'all',
    star: 'all',
    price: '8000',
    internalMemory: 'all',
    color: 'all',
    movilShopAssured: false,
  },
};

const filterMobile = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOBILE_GET_ALL:
      return {
        ...state,
        mobiles: action.payload,
      };

    case FILTER_MOBILE_SET:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default filterMobile;
