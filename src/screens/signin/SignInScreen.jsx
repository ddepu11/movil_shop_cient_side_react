import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearUserSignUpSuccess,
  customUserSignIn,
} from '../../actions/userActions';
import Loading from '../../components/Loading';
import clearAllSetTimeOut from '../../utils/clearAllSetTimeOut';
import validateForm from '../../utils/validateForm';
import FormControl from '../../components/FormControl';
import Button from '../../components/Button';

const SignInScreen = () => {
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
      dispatch(customUserSignIn(email, password));
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
            <Button
              bgColor="var(--tertiary-color)"
              pt="10px"
              pr="60px"
              pb="10px"
              pl="12px"
              width="100%"
              borderRadius="5px"
              fs="1.1em"
              handleClick={() => loginWithRedirect()}
            >
              <AiOutlineGoogle className="google" />
              <span>Log in with Google</span>
            </Button>
            <div className="or flex">
              <div className="left" />
              <span>Or</span>
              <div className="right" />
            </div>

            <form>
              <FormControl
                inputValue={userCredentials.email}
                handleInput={handleInput}
                id="username"
                placeholder="Please enter your email address."
                refObj={emailValidationMessageTag}
                type="text"
                name="email"
                label="Email Address"
              />

              <FormControl
                inputValue={userCredentials.password}
                handleInput={handleInput}
                id="password"
                placeholder="Please enter your email address."
                refObj={passwordValidationMessageTag}
                type="password"
                name="password"
                label="Password"
              />

              <Button
                pt="10px"
                pb="10px"
                pl="40px"
                pr="40px"
                mt="12px"
                fs="1.2em"
                width="100%"
                bgColor="var(--medium-dark-color)"
                bSh=""
                tr=""
                handleClick={handleSubmit}
              >
                Log In
              </Button>
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

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .google {
      font-size: 1.8em;
    }
    span {
      font-size: 1.2em;
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

  .sign-up-btn {
    padding: 10px 40px;
    font-size: 1.2em;
    background-color: var(--tertiary-color);
    color: var(--light-color);
    margin-top: 12px;
    width: 100%;
  }
`;

export default SignInScreen;
