import {
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_SIGN_UP_BEGIN,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
} from "./constant";
import * as user from "../api/user_api.js";

//Auth0  User Login
const userAuthLoggedIn = (user) => (dispatch) => {
  dispatch({ type: SET_USER_LOGGED_IN, payload: user });
};

//Custom User Login
const customUserLogin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOG_IN_BEGIN });

  try {
    const { data } = await user.logIn(email, password);

    console.log(data);

    // Handle this
    // dispatch({type:USER_LOG_IN_SUCCESS})
  } catch (err) {
    console.log(err);
    dispatch({ type: USER_LOG_IN_ERROR, payload: err.message });
  }
};

// Sign Up Action
const signUpUser = (userCredentials) => async (dispatch) => {
  dispatch({ type: USER_SIGN_UP_BEGIN });

  try {
    const { data } = await user.signUp(userCredentials);
    console.log(data);
    dispatch({ type: USER_SIGN_UP_SUCCESS });
  } catch (error) {
    console.log(error);

    dispatch({ type: USER_SIGN_UP_ERROR });
  }
};

export { userAuthLoggedIn, customUserLogin, signUpUser };
