import {
  ADMIN_DELETE_MOBILE_BEGIN,
  ADMIN_DELETE_MOBILE_ERROR,
  ADMIN_DELETE_MOBILE_SUCCESS,
  ADMIN_LIST_MOBILE_BEGIN,
  ADMIN_LIST_MOBILE_ERROR,
  ADMIN_LIST_MOBILE_SUCCESS,
  ADMIN_LIST_USERS_BEGIN,
  ADMIN_LIST_USERS_ERROR,
  ADMIN_LIST_USERS_SUCCESS,
} from '../constants/adminConstants';

const initialState = {
  adminLoading: false,
  adminError: false,
  users: [],
  sellers: [],
  mobiles: [],
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LIST_USERS_BEGIN:
      return {
        ...state,
        adminLoading: true,
      };

    case ADMIN_LIST_USERS_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        users: action.payload,
      };

    case ADMIN_LIST_USERS_ERROR:
      return {
        ...state,
        adminLoading: false,
        adminError: true,
      };

    // List Mobiles
    case ADMIN_LIST_MOBILE_BEGIN:
      return {
        ...state,
        adminLoading: true,
      };

    case ADMIN_LIST_MOBILE_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        mobiles: action.payload,
      };

    case ADMIN_LIST_MOBILE_ERROR:
      return {
        ...state,
        adminLoading: false,
        adminError: true,
      };

    // Delete Mobile
    case ADMIN_DELETE_MOBILE_BEGIN:
      return {
        ...state,
        adminLoading: true,
      };

    case ADMIN_DELETE_MOBILE_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        mobiles: state.mobiles.filter((i) => i._id !== action.payload),
      };

    case ADMIN_DELETE_MOBILE_ERROR:
      return {
        ...state,
        adminLoading: false,
        adminError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default admin;
