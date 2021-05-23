import { SET_USER_LOGGED_IN } from "../actions/constant";

const initialUser = {
  userInfo: {},
  hasUserLoggedIn: false,
};

const user = (user = initialUser, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return {
        ...user,
        hasUserLoggedIn: true,
        userInfo: action.payload,
      };

    default:
      return user;
  }
};

export default user;
