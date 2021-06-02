import {
  ACCOUNT_INFO_BEGIN,
  ACCOUNT_INFO_ERROR,
  ACCOUNT_INFO_SUCCESS,
  CLEAR_USER_MESSAGE,
  CLEAR_USER_SIGNUP_SUCCESS,
  IS_EMAIL_REGISTERED_BEGIN,
  IS_EMAIL_REGISTERED_ERROR,
  IS_EMAIL_REGISTERED_SUCCESS,
  USER_LOGGED_IN_USING_AUTH,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_LOG_IN_SUCCESS,
  USER_LOG_OUT_BEGIN,
  USER_LOG_OUT_ERROR,
  USER_LOG_OUT_SUCCESS,
  USER_SIGN_UP_BEGIN,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
} from "../actions/constant";

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
  userLoading: false,
  hasUserError: false,
  userMsg: "",
  userSignUpSuccess: false,
  // For Loggin In Using Auth
  authLogin: false,
  authUserInfo: {},
};

const user = (user = initialUser, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_USING_AUTH:
      return {
        ...user,
        authLogin: true,
        authUserInfo: action.payload,
        userLoading: false,
        hasUserError: false,
      };
    case IS_EMAIL_REGISTERED_BEGIN:
      return {
        ...user,
        userLoading: true,
      };
    case IS_EMAIL_REGISTERED_SUCCESS:
      return {
        ...user,
        authLogin: true,
        authUserInfo: action.payload.user,
        userLoading: false,
        hasUserError: false,
      };
    case IS_EMAIL_REGISTERED_ERROR:
      return {
        ...user,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };

    //Login State handling
    case USER_LOG_IN_BEGIN:
      return {
        ...user,
        userLoading: true,
        hasUserError: false,
      };
    case USER_LOG_IN_SUCCESS:
      return {
        ...user,
        userMsg: action.payload.msg,
        hasUserLoggedIn: true,
        userLoading: false,
      };
    case USER_LOG_IN_ERROR:
      return {
        ...user,
        hasUserError: true,
        userMsg: action.payload,
        userLoading: false,
      };
    //Sign-Up State handling
    case USER_SIGN_UP_BEGIN:
      return {
        ...user,
        userLoading: true,
        hasUserError: false,
      };
    case USER_SIGN_UP_SUCCESS:
      return {
        ...user,
        userSignUpSuccess: true,
        userLoading: false,
        userMsg: action.payload,
      };
    case USER_SIGN_UP_ERROR:
      return {
        ...user,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };
    case CLEAR_USER_MESSAGE:
      return {
        ...user,
        userMsg: "",
        hasUserError: false,
      };
    case CLEAR_USER_SIGNUP_SUCCESS:
      return {
        ...user,
        userSignUpSuccess: false,
      };

    case ACCOUNT_INFO_BEGIN:
      return {
        ...user,
        userLoading: true,
      };
    case ACCOUNT_INFO_SUCCESS:
      return {
        ...user,
        userLoading: false,
        userInfo: action.payload,
        hasUserLoggedIn: true,
      };
    case ACCOUNT_INFO_ERROR:
      return {
        ...user,
        userLoading: false,
        hasUserError: true,
        userMsg: action.payload,
      };
    case USER_LOG_OUT_BEGIN:
      return {
        ...user,
        userLoading: true,
      };
    case USER_LOG_OUT_SUCCESS:
      return {
        ...user,
        userLoading: false,
        userMsg: action.payload,
        hasUserLoggedIn: false,
        userInfo: {},
      };
    case USER_LOG_OUT_ERROR:
      return {
        ...user,
        hasUserError: true,
        userMsg: action.payload,
        userLoading: false,
      };

    default:
      return user;
  }
};

export default user;
