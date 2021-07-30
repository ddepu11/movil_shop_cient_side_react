import {
  ADMIN_DELETE_MOBILE_BEGIN,
  ADMIN_DELETE_MOBILE_ERROR,
  ADMIN_DELETE_MOBILE_SUCCESS,
  ADMIN_DELETE_USER_BEGIN,
  ADMIN_DELETE_USER_ERROR,
  ADMIN_DELETE_USER_SUCCESS,
  ADMIN_LIST_MOBILE_BEGIN,
  ADMIN_LIST_MOBILE_ERROR,
  ADMIN_LIST_MOBILE_SUCCESS,
  ADMIN_LIST_SELLER_BEGIN,
  ADMIN_LIST_SELLER_ERROR,
  ADMIN_LIST_SELLER_SUCCESS,
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

    // List Seller
    case ADMIN_LIST_SELLER_BEGIN:
      return {
        ...state,
        adminLoading: true,
      };

    case ADMIN_LIST_SELLER_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        sellers: action.payload,
      };

    case ADMIN_LIST_SELLER_ERROR:
      return {
        ...state,
        adminLoading: false,
        adminError: false,
      };

    // Delete user
    case ADMIN_DELETE_USER_BEGIN:
      return {
        ...state,
        adminLoading: true,
      };

    case ADMIN_DELETE_USER_SUCCESS:
      return {
        ...state,
        adminLoading: false,
        users: state.users.filter((i) => i._id !== action.payload),
      };

    case ADMIN_DELETE_USER_ERROR:
      return {
        ...state,
        adminError: false,
        adminLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default admin;
