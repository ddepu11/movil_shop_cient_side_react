import {
  SET_AUTH_LOADING,
  SET_USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from "../actions/constant";

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
};

export default (user = initialUser, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return {
        ...user,
        hasUserLoggedIn: true,
        userInfo: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...user,
        hasUserLoggedIn: false,
        userInfo: {},
      };
    default:
      return user;
  }
};
