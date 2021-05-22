import {
  SET_AUTH_LOADING,
  SET_USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from "./constant";

const setAuthLoading = () => (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING });
};

const userLoggedIn = (user) => (dispatch) => {
  dispatch({ type: SET_USER_LOGGED_IN, payload: user });
};

const userLoggedOut = () => (dispatch) => {
  dispatch({ type: USER_LOGGED_OUT });
};

export { userLoggedIn, userLoggedOut, setAuthLoading };
