import {
  USER_INFO_BEGIN,
  USER_INFO_ERROR,
  USER_INFO_SUCCESS,
  USER_CLEAR_SIGNUP_STATUS,
  USER_REGISTER_CHECK_BEGIN,
  USER_REGISTER_CHECK_SUCCESS,
  USER_REGISTER_CHECK_ERROR,
  USER_SIGN_IN_BEGIN,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_ERROR,
  USER_LOG_OUT_BEGIN,
  USER_LOG_OUT_ERROR,
  USER_LOG_OUT_SUCCESS,
  USER_SIGN_UP_BEGIN,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
  USER_AUTHENTICATION_SUCCESS,
  USER_AUTHENTICATION_FAIL,
  USER_UPDATE_BEGIN,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  USER_CHANGE_DP_BEGIN,
  USER_CHANGE_DP_ERROR,
  USER_CHANGE_DP_SUCCESS,
} from '../constants/userConstants';

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
  userLoading: false,
  hasUserError: false,
  userMsg: '',
  userSignUpSuccess: false,
  role: '',
};

const user = (userState = initialUser, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION_SUCCESS:
      return {
        ...userState,
        hasUserLoggedIn: true,
        role: action.payload,
        hasUserError: false,
      };

    case USER_AUTHENTICATION_FAIL:
      return {
        ...userState,
        hasUserLoggedIn: false,
        hasUserError: true,
      };

    case USER_REGISTER_CHECK_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case USER_REGISTER_CHECK_SUCCESS:
      return {
        ...userState,
        hasUserLoggedIn: true,
        userInfo: action.payload.user,
        userMsg: action.payload.msg,
        userLoading: false,
        hasUserError: false,
      };

    case USER_REGISTER_CHECK_ERROR:
      return {
        ...userState,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };

    // Login State handling
    case USER_SIGN_IN_BEGIN:
      return {
        ...userState,
        userLoading: true,
        hasUserError: false,
      };

    case USER_SIGN_IN_SUCCESS:
      return {
        ...userState,
        userMsg: action.payload.msg,
        hasUserLoggedIn: true,
        userLoading: false,
        hasUserError: false,
      };

    case USER_SIGN_IN_ERROR:
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

    case USER_CLEAR_SIGNUP_STATUS:
      return {
        ...userState,
        userSignUpSuccess: false,
        hasUserError: false,
      };

    case USER_INFO_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case USER_INFO_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userInfo: action.payload,
        hasUserLoggedIn: true,
        hasUserError: false,
      };

    case USER_INFO_ERROR:
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
        role: '',
      };

    case USER_LOG_OUT_ERROR:
      return {
        ...userState,
        hasUserError: true,
        userMsg: action.payload,
        userLoading: false,
      };

    case USER_UPDATE_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case USER_UPDATE_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userInfo: action.payload.user,
        userMsg: action.payload.msg,
        hasUserError: false,
      };

    case USER_UPDATE_ERROR:
      return {
        ...userState,
        userLoading: false,
        userMsg: action.payload,
      };

    // Changing DP
    case USER_CHANGE_DP_BEGIN:
      return {
        ...userState,
        userLoading: true,
      };

    case USER_CHANGE_DP_SUCCESS:
      return {
        ...userState,
        userLoading: false,
        userMsg: action.payload.msg,
        userInfo: action.payload.user,
        hasUserError: false,
      };

    case USER_CHANGE_DP_ERROR:
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
