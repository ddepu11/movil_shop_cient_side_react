import {
  CLEAR_USER_MESSAGE,
  CLEAR_USER_SIGNUP_SUCCESS,
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_LOG_IN_SUCCESS,
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
};

const user = (user = initialUser, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return {
        ...user,
        hasUserLoggedIn: true,
        userInfo: action.payload,
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
    default:
      return user;
  }
};

export default user;
