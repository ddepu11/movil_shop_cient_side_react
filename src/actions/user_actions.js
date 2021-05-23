import {
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
} from "./constant";

const userAuthLoggedIn = (user) => (dispatch) => {
  dispatch({ type: SET_USER_LOGGED_IN, payload: user });
};

const customUserLogin = (email, password) => (dispatch) => {
  dispatch({ type: USER_LOG_IN_BEGIN });
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_LOG_IN_ERROR, payload: err.message });
  }
};

export { userAuthLoggedIn, customUserLogin };
