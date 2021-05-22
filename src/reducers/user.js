import { SET_LOADING } from "../actions/constant";

const initialUser = {
  hasUserLoggedIn: false,
};

export default (user = initialUser, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...user,
      };
    default:
      return user;
  }
};
