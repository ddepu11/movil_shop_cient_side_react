import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendNotification } from '../../../actions/notificationActions';

import {
  clearUserSignUpSuccess,
  customUserSignIn,
} from '../../../actions/userActions';

import clearAllSetTimeOut from '../../../utils/clearAllSetTimeOut';

import validateForm from '../../../utils/validateForm';

const SignInScreenLogic = () => {
  const { hasUserLoggedIn, userLoading, userSignUpSuccess, userInfo } =
    useSelector((state) => state.user);

  const { googleAuth, googleAuthLoading } = useSelector(
    (state) => state.signInViaGoogle
  );

  const emailValidationMessageTag = useRef(null);
  const passwordValidationMessageTag = useRef(null);

  const setTimeOutId = useRef();

  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  useEffect(() => {
    userSignUpSuccess && dispatch(clearUserSignUpSuccess());

    hasUserLoggedIn &&
      userInfo.role === 'ADMIN' &&
      history.push('/admin-dashboard');

    hasUserLoggedIn && userInfo.role !== 'ADMIN' && history.push('/account');

    // Clearing all the setTimeouts while unmounting the components
    return () => clearAllSetTimeOut(setTimeOutId);
  }, [hasUserLoggedIn, userSignUpSuccess, dispatch, history, userInfo]);

  const handleInput = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();

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

  const handleLoginViaGoogle = () => {
    googleAuth
      .signIn()
      .then(() => {})
      .catch((err) => {
        if (err.error === 'popup_closed_by_user') {
          dispatch(sendNotification(err.error, true));
        } else {
          dispatch(sendNotification(err.message, true));
        }
      });
  };

  const loginAsRanomUser = () => {
    const users = [
      { email: 'ayush11@gmail.com', password: '111111' },
      { email: 'abhinav11@gmail.com', password: '111111' },
    ];

    const randomUser = users[Math.floor(Math.random() * users.length)];

    dispatch(customUserSignIn(randomUser.email, randomUser.password));
    setUserCredentials({ password: '', email: '' });
  };

  const loginAsRandomSeller = () => {
    const users = [
      { email: 'ddepu11@gmail.com', password: '111111' },
      { email: 'mohan11@gmail.com', password: '111111' },
    ];

    const randomUser = users[Math.floor(Math.random() * users.length)];

    dispatch(customUserSignIn(randomUser.email, randomUser.password));

    dispatch(customUserSignIn('', ''));
    setUserCredentials({ password: '', email: '' });
  };

  return {
    userLoading,
    handleSubmit,
    handleInput,
    userCredentials,
    emailValidationMessageTag,
    passwordValidationMessageTag,
    handleLoginViaGoogle,
    googleAuthLoading,
    loginAsRanomUser,
    loginAsRandomSeller,
  };
};

export default SignInScreenLogic;
