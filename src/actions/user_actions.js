import {
  ACCOUNT_INFO_BEGIN,
  ACCOUNT_INFO_ERROR,
  ACCOUNT_INFO_SUCCESS,
  CLEAR_USER_MESSAGE,
  CLEAR_USER_SIGNUP_SUCCESS,
  IS_EMAIL_REGISTERED_BEGIN,
  IS_EMAIL_REGISTERED_ERROR,
  IS_EMAIL_REGISTERED_SUCCESS,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
  USER_LOG_IN_SUCCESS,
  USER_LOG_OUT_BEGIN,
  USER_LOG_OUT_ERROR,
  USER_LOG_OUT_SUCCESS,
  USER_SIGN_UP_BEGIN,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_SUCCESS,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAIL,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  SEND_NOTIFICATION,
  CHANGE_DP_BEGIN,
  CHANGE_DP_ERROR,
  CHANGE_DP_SUCCESS,
} from '../constants/constant';
import * as user from '../api/user_api';

// Authenticate User
const authenticateUser = () => async (dispatch) => {
  try {
    const { data } = await user.authenticate();

    dispatch({
      type: AUTHENTICATE_USER_SUCCESS,
      payload: `Welcome back ${data.user.firstName} ${data.user.lastName}.`,
    });
  } catch (err) {
    dispatch({ type: AUTHENTICATE_USER_FAIL, payload: err.message });
  }
};

//  check if given email is registered while loggijng in using google??
const isUserRegisteredWithThisEmail = (email) => async (dispatch) => {
  dispatch({ type: IS_EMAIL_REGISTERED_BEGIN });

  try {
    const { data } = await user.checkIsEmailRegistered(email);

    dispatch({
      type: IS_EMAIL_REGISTERED_SUCCESS,
      payload: { user: data.user, msg: 'User Logged In Successfully!!!' },
    });
  } catch (error) {
    dispatch({
      type: IS_EMAIL_REGISTERED_ERROR,
      payload: 'User was not registered!!!',
    });
  }
};

// Custom User Login
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
      payload: 'Unautherized user,please log in !!!',
    });
  }
};

const logOutUser = () => async (dispatch) => {
  dispatch({ type: USER_LOG_OUT_BEGIN });

  try {
    await user.logOut();

    dispatch({
      type: USER_LOG_OUT_SUCCESS,
      payload: 'User logged out successfully!!!',
    });
  } catch (error) {
    dispatch({ type: USER_LOG_OUT_ERROR, payload: 'An error occured!!!' });
  }
};

const updateUser = (userInfo) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_BEGIN });

  try {
    const { data } = await user.update(userInfo);

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: { user: data.user, msg: 'User updated Successfully!!!' },
    });
  } catch (err) {
    dispatch({ type: UPDATE_USER_ERROR, payload: err.message });
  }
};

const sendNotification = (msg) => (dispatch) => {
  dispatch({ type: SEND_NOTIFICATION, payload: msg });
};

const changeDisplayPicture = (formData) => async (dispatch) => {
  dispatch({ type: CHANGE_DP_BEGIN });

  try {
    const { data } = await user.changeDP(formData);

    console.log(data);
    dispatch({ type: CHANGE_DP_SUCCESS });
  } catch (err) {
    dispatch({ type: CHANGE_DP_ERROR, payload: err.msg });
  }
};

export {
  customUserLogin,
  signUpUser,
  clearUserMessage,
  clearUserSignUpSuccess,
  getAccountInfo,
  logOutUser,
  isUserRegisteredWithThisEmail,
  authenticateUser,
  updateUser,
  sendNotification,
  changeDisplayPicture,
};
