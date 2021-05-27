import {
  CLEAR_USER_MESSAGE,
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
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
        userLoading: false,
        userMsg: action.payload.msg,
        userInfo: action.payload.user,
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

    default:
      return user;
  }
};

export default user;
