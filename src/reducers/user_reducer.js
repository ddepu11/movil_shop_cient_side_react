import {
  ACCOUNT_INFO_BEGIN,
  ACCOUNT_INFO_ERROR,
  ACCOUNT_INFO_SUCCESS,
  CLEAR_USER_MESSAGE,
  CLEAR_USER_SIGNUP_SUCCESS,
  IS_EMAIL_REGISTERED_BEGIN,
  IS_EMAIL_REGISTERED_ERROR,
  IS_EMAIL_REGISTERED_SUCCESS,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_LOG_IN_SUCCESS,
  USER_LOG_OUT_BEGIN,
  USER_LOG_OUT_ERROR,
  USER_LOG_OUT_SUCCESS,
  USER_SIGN_UP_BEGIN,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAIL,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  SEND_NOTIFICATION,
  CHANGE_DP_BEGIN,
  CHANGE_DP_ERROR,
  CHANGE_DP_SUCCESS,
} from '../constants/constant';

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
  userLoading: false,
  hasUserError: false,
  userMsg: '',
  userSignUpSuccess: false,
};

const user = (userState = initialUser, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...userState,
        hasUserLoggedIn: true,
        userMsg: action.payload,
        hasUserError: false,
      };

    case AUTHENTICATE_USER_FAIL:
      return {
        ...userState,
        hasUserLoggedIn: false,
        hasUserError: true,
      };

    case IS_EMAIL_REGISTERED_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case IS_EMAIL_REGISTERED_SUCCESS:
      return {
        ...userState,
        hasUserLoggedIn: true,
        userInfo: action.payload.user,
        userMsg: action.payload.msg,
        userLoading: false,
        hasUserError: false,
      };

    case IS_EMAIL_REGISTERED_ERROR:
      return {
        ...userState,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };

    // Login State handling
    case USER_LOG_IN_BEGIN:
      return {
        ...userState,
        userLoading: true,
        hasUserError: false,
      };

    case USER_LOG_IN_SUCCESS:
      return {
        ...userState,
        userMsg: action.payload.msg,
        hasUserLoggedIn: true,
        userLoading: false,
        hasUserError: false,
      };

    case USER_LOG_IN_ERROR:
      return {
        ...userState,
        hasUserError: true,
        userMsg: action.payload,
        userLoading: false,
      };

    // Sign-Up State handling
    case USER_SIGN_UP_BEGIN:
      return {
        ...userState,
        userLoading: true,
        hasUserError: false,
      };

    case USER_SIGN_UP_SUCCESS:
      return {
        ...userState,
        userSignUpSuccess: true,
        userLoading: false,
        userMsg: action.payload,
        hasUserError: false,
      };

    case USER_SIGN_UP_ERROR:
      return {
        ...userState,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };

    case CLEAR_USER_MESSAGE:
      return {
        ...userState,
        userMsg: '',
        hasUserError: false,
      };

    case CLEAR_USER_SIGNUP_SUCCESS:
      return {
        ...userState,
        userSignUpSuccess: false,
        hasUserError: false,
      };

    case ACCOUNT_INFO_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case ACCOUNT_INFO_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userInfo: action.payload,
        hasUserLoggedIn: true,
        hasUserError: false,
      };

    case ACCOUNT_INFO_ERROR:
      return {
        ...userState,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };

    case USER_LOG_OUT_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case USER_LOG_OUT_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userMsg: action.payload,
        hasUserLoggedIn: false,
        userInfo: {},
        hasUserError: false,
      };

    case USER_LOG_OUT_ERROR:
      return {
        ...userState,
        hasUserError: true,
        userMsg: action.payload,
        userLoading: false,
      };

    case UPDATE_USER_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userInfo: action.payload.user,
        userMsg: action.payload.msg,
        hasUserError: false,
      };

    case UPDATE_USER_ERROR:
      return {
        ...userState,
        userLoading: false,
        userMsg: action.payload,
      };

    case SEND_NOTIFICATION:
      return {
        ...userState,
        userMsg: action.payload,
      };

    // Changing DP
    case CHANGE_DP_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case CHANGE_DP_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userMsg: action.payload.msg,
        userInfo: action.payload.user,
        hasUserError: false,
      };

    case CHANGE_DP_ERROR:
      return {
        ...userState,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };

    default:
      return userState;
  }
};

export default user;
