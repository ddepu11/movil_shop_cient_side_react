import {
  ACCOUNT_INFO_BEGIN,
  ACCOUNT_INFO_ERROR,
  ACCOUNT_INFO_SUCCESS,
  CLEAR_USER_MESSAGE,
  CLEAR_USER_SIGNUP_SUCCESS,
  USER_LOGGED_IN_USING_AUTH,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_LOG_IN_SUCCESS,
  USER_LOG_OUT_BEGIN,
  USER_LOG_OUT_ERROR,
  USER_LOG_OUT_SUCCESS,
  USER_SIGN_UP_BEGIN,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
} from "./constant";
import * as user from "../api/user_api.js";

//Auth0  User Login
const loggedInUsingAuth = (user) => (dispatch) => {
  dispatch({ type: USER_LOGGED_IN_USING_AUTH, payload: user });
};

//Custom User Login
const customUserLogin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOG_IN_BEGIN });

  try {
    const { data } = await user.logIn(email, password);

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

    dispatch({ type: ACCOUNT_INFO_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ACCOUNT_INFO_ERROR,
      payload: "Unautherized user,please log in !!!",
    });
  }
};

const logOutUser = () => async (dispatch) => {
  dispatch({ type: USER_LOG_OUT_BEGIN });

  try {
    await user.logOut();

    dispatch({
      type: USER_LOG_OUT_SUCCESS,
      payload: "User logged out successfully!!!",
    });
  } catch (error) {
    dispatch({ type: USER_LOG_OUT_ERROR, payload: "An error occured!!!" });
  }
};

export {
  loggedInUsingAuth,
  customUserLogin,
  signUpUser,
  clearUserMessage,
  clearUserSignUpSuccess,
  getAccountInfo,
  logOutUser,
};
