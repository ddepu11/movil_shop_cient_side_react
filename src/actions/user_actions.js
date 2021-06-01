import {
  ACCOUNT_INFO_BEGIN,
  ACCOUNT_INFO_ERROR,
  ACCOUNT_INFO_SUCCESS,
  CLEAR_USER_MESSAGE,
  CLEAR_USER_SIGNUP_SUCCESS,
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_LOG_IN_SUCCESS,
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
    dispatch({ type: USER_LOG_IN_SUCCESS, payload: data });
  } catch (err) {
    const { msg } = err.response.data;
    dispatch({ type: USER_LOG_IN_ERROR, payload: msg });
  }
};

// Sign Up Action
const signUpUser = (userCredentials) => async (dispatch) => {
  dispatch({ type: USER_SIGN_UP_BEGIN });

  try {
    const { data } = await user.signUp(userCredentials);

    if (data) {
      dispatch({
        type: USER_SIGN_UP_SUCCESS,
        payload: data.msg,
      });
    }
  } catch (err) {
    const { msg } = err.response.data;
    console.log(msg);
    dispatch({ type: USER_SIGN_UP_ERROR, payload: msg });
  }
};

// Clears users messages
const clearUserMessage = () => (dispatch) => {
  dispatch({ type: CLEAR_USER_MESSAGE });
};

// assigns false to hasUseSignedUp flag
const clearUserSignUpSuccess = () => (dispatch) => {
  dispatch({ type: CLEAR_USER_SIGNUP_SUCCESS });
};

const getAccountInfo = () => async (dispatch) => {
  dispatch({ type: ACCOUNT_INFO_BEGIN });

  try {
    const { data } = await user.accountInfo();

    console.log(data);
    dispatch({ type: ACCOUNT_INFO_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ACCOUNT_INFO_ERROR, msg: err.message });
  }
};

export {
  userAuthLoggedIn,
  customUserLogin,
  signUpUser,
  clearUserMessage,
  clearUserSignUpSuccess,
  getAccountInfo,
};
