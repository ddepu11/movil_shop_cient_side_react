import { SET_USER_LOGGED_IN } from "./constant";

const userAuthLoggedIn = (user) => (dispatch) => {
  dispatch({ type: SET_USER_LOGGED_IN, payload: user });
};

export { userAuthLoggedIn };
