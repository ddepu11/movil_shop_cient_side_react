import {
  SET_AUTH_LOADING,
  SET_USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from "../actions/constant";

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
  authenticationLoading: false,
};

export default (user = initialUser, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...user,
        authenticationLoading: true,
      };
    case SET_USER_LOGGED_IN:
      return {
        ...user,
        authenticationLoading: false,
        hasUserLoggedIn: true,
        userInfo: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...user,
        authenticationLoading: false,
        hasUserLoggedIn: false,
        userInfo: {},
      };
    default:
      return user;
  }
};
