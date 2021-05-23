import {
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
} from "../actions/constant";

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
  userLoading: false,
  hasUserError: false,
  userErrorMsg: {},
};

const user = (user = initialUser, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return {
        ...user,
        hasUserLoggedIn: true,
        userInfo: action.payload,
      };
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
        userErrorMsg: action.payload,
      };
    default:
      return user;
  }
};

export default user;
