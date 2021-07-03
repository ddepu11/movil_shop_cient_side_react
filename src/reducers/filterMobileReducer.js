import {
  FILTER_MOBILE_BY_BRAND,
  FILTER_MOBILE_BY_PRICE,
  FILTER_MOBILE_BY_RAM,
  FILTER_MOBILE_BY_STAR,
  FILTER_MOBILE_GET_ALL,
  FILTER_MOBILE_SET,
  FILTER_MOBILE_SORT,
} from '../constants/filterMobileConstants';

const initialState = {
  mobiles: [],
  filteredMobile: [],
  filters: {
    view: 'grid',
    sortBy: 'lowest',
    search: '',
    brand: 'all',
    star: 'all',
    price: '8000',
    ram: 'all',
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
        filteredMobile: action.payload,
      };

    case FILTER_MOBILE_SET:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case FILTER_MOBILE_SORT:
      switch (state.filters.sortBy) {
        case 'lowest':
          return {
            ...state,
            filteredMobile: state.mobiles.sort((a, b) => a.price - b.price),
          };
        case 'highest':
          return {
            ...state,
            filteredMobile: state.mobiles.sort((a, b) => b.price - a.price),
          };

        case 'a-z':
          return {
            ...state,
            filteredMobile: state.mobiles.sort((a, b) =>
              a.title.toString().localeCompare(b.title.toString())
            ),
          };

        case 'z-a':
          return {
            ...state,
            filteredMobile: state.mobiles.sort((a, b) =>
              b.title.toString().localeCompare(a.title.toString())
            ),
          };

        default:
          return { ...state };
      }

    case FILTER_MOBILE_BY_BRAND:
      if (state.filters.brand === 'all') {
        return {
          ...state,
          filteredMobile: state.mobiles,
        };
      }

      return {
        ...state,
        filteredMobile: state.mobiles.filter(
          (m) => m.brand === state.filters.brand
        ),
      };

    case FILTER_MOBILE_BY_STAR:
      if (state.filters.star === 'all') {
        return {
          ...state,
          filteredMobile: state.mobiles,
        };
      }

      return {
        ...state,
        filteredMobile: state.mobiles.filter(
          (m) => m.stars.toString() === state.filters.star
        ),
      };

    case FILTER_MOBILE_BY_PRICE:
      return {
        ...state,
        filteredMobile: state.mobiles.filter(
          (m) => m.price < state.filters.price
        ),
      };

    case FILTER_MOBILE_BY_RAM:
      if (state.filters.ram === 'all') {
        return {
          ...state,
          filteredMobile: state.mobiles,
        };
      }

      return {
        ...state,
        filteredMobile: state.mobiles.filter(
          (m) => m.ram === state.filters.ram
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default filterMobile;
