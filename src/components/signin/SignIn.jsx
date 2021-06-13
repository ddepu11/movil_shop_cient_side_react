import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearUserSignUpSuccess,
  customUserLogin,
} from '../../actions/user_actions';
import Loading from '../Loading';
import clearAllSetTimeOut from '../../utils/clearAllSetTimeOut';
import validateForm from '../../utils/validateForm';

const SignIn = () => {
  const { hasUserLoggedIn, userLoading, userSignUpSuccess } = useSelector(
    (state) => state.user
  );

  const emailValidationMessageTag = useRef(null);
  const passwordValidationMessageTag = useRef(null);

  const setTimeOutId = useRef();

  const { loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  useEffect(() => {
    userSignUpSuccess && dispatch(clearUserSignUpSuccess());

    hasUserLoggedIn && history.push('/account');

    // Clearing all the setTimeouts while unmounting the components
    return () => clearAllSetTimeOut(setTimeOutId);
  }, [hasUserLoggedIn, userSignUpSuccess, dispatch, history]);

  const handleInput = (e) => {
    const { value, name } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = userCredentials;
    const error = validateForm(
      userCredentials,
      setTimeOutId,
      {
        emailValidationMessageTag,
        passwordValidationMessageTag,
      },
      'SIGN_IN'
    );

    if (!error) {
      dispatch(customUserLogin(email, password));
      setUserCredentials({ password: '', email: '' });
    }
  };

  return (
    <>
      {userLoading ? (
        <Loading />
      ) : (
        <Wrapper className="w-960 flex">
          <div>
            <h2>Sign In in to Movil Shop</h2>
            <button
              type="button"
              onClick={() => loginWithRedirect()}
              className="google-btn flex"
            >
              <AiOutlineGoogle className="google" />
              <span>Log in with Google</span>
            </button>
            <div className="or flex">
              <div className="left" />
              <span>Or</span>
              <div className="right" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="username">Email Address</label>
                <input
                  value={userCredentials.email}
                  onChange={handleInput}
                  type="text"
                  name="email"
                  id="username"
                  placeholder="Please enter your email address."
                />
                <p ref={emailValidationMessageTag} className="message" />
              </div>
              <div className="form-control">
                <div className="pwd-label flex">
                  <label htmlFor="password">Password</label>
                  <Link to="/forget-password">Forget Password?</Link>
                </div>
                <input
                  value={userCredentials.password}
                  onChange={handleInput}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Please enter your password."
                />
                <p ref={passwordValidationMessageTag} className="message" />
              </div>
              <button type="submit" className="sign-in-btn">
                Log In
              </button>
            </form>
            <div className="or flex">
              <div className="left" />
              <span>Or</span>
              <div className="right" />
            </div>
            <Link className="sign-up-btn" to="/sign-up">
              Don&apos;t have an account? Sign Up Now !
            </Link>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  padding: 10px 0 40px 0;
  h2 {
    font-size: 2.2em;
    padding: 15px 0;
  }
  .google-btn {
    font-size: 1em;
    background: #3284ff;
    color: white;
    padding: 10px 60px 10px 12px;
    border-radius: 5px;
    .google {
      font-size: 1.8em;
    }
    span {
      margin-left: 25px;
    }
  }
  .or {
    padding: 15px 0;
    color: #555;
    justify-content: space-between;
    .left,
    .right {
      height: 1.6px;
      width: 44%;
      background-color: #888;
      border-radius: 5px;
    }
  }
  form {
    .form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      label {
        font-size: 1.3em;
        padding: 8px 0;
      }
      input {
        background: #e2dcdc;
        padding: 10px 5px;
        border-radius: 5px;
        font-size: 1.2em;
      }
      .pwd-label {
        justify-content: space-between;
      }
      .message.error {
        color: red;
        font-size: 1.2em;
      }
      .message.success {
        color: green;
        font-size: 1.2em;
      }
    }
    .sign-in-btn {
      padding: 10px 40px;
      font-size: 1.2em;
      background-color: #222222;
      color: white;
      margin-top: 12px;
      width: 100%;
    }
  }
  .sign-up-btn {
    padding: 10px 40px;
    font-size: 1.2em;
    background-color: #2a5be2;
    color: #ffffff;
    margin-top: 12px;
    width: 100%;
  }
`;

export default SignIn;
