import {
  SET_USER_LOGGED_IN,
  USER_LOG_IN_BEGIN,
  USER_LOG_IN_ERROR,
} from "./constant";
import * as user from "../api/user_api.js";

const userAuthLoggedIn = (user) => (dispatch) => {
  dispatch({ type: SET_USER_LOGGED_IN, payload: user });
};

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

const signUpUser =
  ({ firstName, lastName, phoneNumber, email, password, confirmPassword }) =>
  async (dispatch) => {
    
    
    console.log({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
    });
  };

export { userAuthLoggedIn, customUserLogin, signUpUser };
