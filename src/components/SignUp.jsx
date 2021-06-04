import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { signUpUser } from '../actions/user_actions';

const SignUp = () => {
  const { userSignUpSuccess } = useSelector((state) => state.user);
  const setTORefId = useRef();
  const dispatch = useDispatch();

  useEffect(
    () =>
      // Clearing all the setTimeouts while unmounting the components
      () => {
        let refId = setTORefId.current;
        clearTimeout(refId);
        refId -= 1;
        while (refId) {
          clearTimeout(setTORefId.current);
        }
      },
    []
  );

  const { userLoading } = useSelector((state) => state.user);

  // Referene for messages
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  let erroFlag = false;

  const handleInput = (e) => {
    const { value, name } = e.target;
    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  };

  // Shows error or success message
  const showMessage = (ref, message, className) => {
    ref.current.innerText = message;
    ref.current.classList.add(className);

    setTORefId.current = setTimeout(() => {
      ref.current.innerText = '';
      ref.current.classList.remove(className);
    }, 4000);
  };

  // Form validation
  const formValidation = () => {
    // First name validation
    const { firstName } = signUpCredentials;

    if (firstName.length > 20) {
      showMessage(firstNameRef, 'first name is too lengthy', 'error');
      erroFlag = true;
    }

    if (firstName.length < 2) {
      showMessage(firstNameRef, 'first name is too short', 'error');
      erroFlag = true;
    }

    if (firstName === '') {
      showMessage(firstNameRef, 'first name cannot be empty', 'error');
      erroFlag = true;
    }

    // **************** FN Validation ends  **********************

    // lastName validation
    const { lastName } = signUpCredentials;

    if (lastName.length > 20) {
      showMessage(lastNameRef, 'last name is too lengthy', 'error');
      erroFlag = true;
    }

    if (lastName.length < 2) {
      showMessage(lastNameRef, 'last name is too short', 'error');
      erroFlag = true;
    }

    if (lastName === '') {
      showMessage(lastNameRef, 'last name cannot be empty', 'error');
      erroFlag = true;
    }

    // **************** LN Validation ends  **********************

    // Phone Number Validation
    const { phoneNumber } = signUpCredentials;

    if (phoneNumber.length > 10 || phoneNumber.length < 10) {
      showMessage(phoneNumberRef, 'Min and Maximum 10 digits allowed', 'error');
      erroFlag = true;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      showMessage(phoneNumberRef, 'Only numeric values allowed', 'error');
      erroFlag = true;
    }

    if (phoneNumber === '') {
      showMessage(phoneNumberRef, 'phone number cannot be empty', 'error');
      erroFlag = true;
    }

    // **************** PN Validation ends  **********************

    // Email address validation

    const { email } = signUpCredentials;

    function validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (email === '') {
      showMessage(emailRef, 'email cannot be empty', 'error');
      erroFlag = true;
    }

    if (!validateEmail(email)) {
      showMessage(emailRef, 'Invalid email address', 'error');
      erroFlag = true;
    }

    // **************** Email Validation ends  **********************

    // Password  validation
    const { password } = signUpCredentials;

    if (password.length > 20) {
      showMessage(
        passwordRef,
        "password's length cant be greater then 20 ",
        'error'
      );
      erroFlag = true;
    }

    if (password.length < 6) {
      showMessage(
        passwordRef,
        "password's length cant be less then 6 ",
        'error'
      );
      erroFlag = true;
    }

    if (password === '') {
      showMessage(passwordRef, 'password cannot be empty', 'error');
      erroFlag = true;
    }
    // **************** Password Validation ends  **********************

    // Confirm Password  validation
    const { confirmPassword } = signUpCredentials;

    if (confirmPassword !== password) {
      showMessage(confirmPasswordRef, 'Password did not match', 'error');
      erroFlag = true;
    }

    if (
      confirmPassword === password &&
      confirmPassword !== '' &&
      confirmPassword.length <= 20 &&
      confirmPassword.length >= 6
    ) {
      showMessage(confirmPasswordRef, 'Password match successfully', 'success');
    }

    if (confirmPassword.length > 20) {
      showMessage(
        confirmPasswordRef,
        "password's length cant be greater then 20 ",
        'error'
      );
      erroFlag = true;
    }

    if (confirmPassword.length < 6) {
      showMessage(
        confirmPasswordRef,
        "password's length cant be less then 6 ",
        'error'
      );
      erroFlag = true;
    }

    if (confirmPassword === '') {
      showMessage(
        confirmPasswordRef,
        'confirm password cannot be empty',
        'error'
      );
      erroFlag = true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation();

    if (!erroFlag) {
      dispatch(signUpUser(signUpCredentials));
    }
  };

  return (
    <>
      {userLoading ? (
        <Loading />
      ) : userSignUpSuccess ? (
        <Redirect to="/log-in" />
      ) : (
        <Wrapper className="w-960">
          <h1>Get your free MovilShop account now</h1>
          <form onSubmit={handleSubmit}>
            <div className="row flex">
              <div className="form-control ">
                <label htmlFor="first_name">First Name</label>
                <input
                  value={signUpCredentials.firstName}
                  onChange={handleInput}
                  type="text"
                  id="first_name"
                  name="firstName"
                />
                <p ref={firstNameRef} className="message"></p>
              </div>
              <div className="form-control">
                <label htmlFor="last_name">Last Name</label>
                <input
                  value={signUpCredentials.lastName}
                  onChange={handleInput}
                  type="text"
                  id="last_name"
                  name="lastName"
                />
                <p ref={lastNameRef} className="message"></p>
              </div>
            </div>

            <div className="row flex">
              <div className="form-control">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  value={signUpCredentials.phoneNumber}
                  onChange={handleInput}
                  type="text"
                  id="phone_number"
                  name="phoneNumber"
                />
                <p ref={phoneNumberRef} className="message"></p>
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input
                  value={signUpCredentials.email}
                  onChange={handleInput}
                  type="text"
                  id="email"
                  name="email"
                />
                <p ref={emailRef} className="message"></p>
              </div>
            </div>

            <div className="row flex">
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  value={signUpCredentials.password}
                  onChange={handleInput}
                  type="password"
                  id="password"
                  name="password"
                />
                <p ref={passwordRef} className="message"></p>
              </div>

              <div className="form-control">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  value={signUpCredentials.confirmPassword}
                  onChange={handleInput}
                  type="password"
                  id="confirm_password"
                  name="confirmPassword"
                />
                <p ref={confirmPasswordRef} className="message"></p>
              </div>
            </div>
            <button className="sign-up-btn">Create Account</button>
          </form>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  padding: 40px 0;
  h1 {
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
    font-size: 2em;
  }
  form {
    .row {
      justify-content: space-between;
      margin: 20px 0;
      .form-control {
        display: flex;
        flex-direction: column;
        width: 100%;
        label {
          font-size: 1.3em;
          padding: 8px 0;
          color: #222;
        }
        input {
          background: #e2dcdc;
          padding: 10px 5px;
          border-radius: 5px;
          font-size: 1.1em;
          width: 65%;
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
    }
    .sign-up-btn {
      padding: 8px 10px;
      font-size: 1.2em;
      background-color: #2a5be2;
      color: white;
      margin-top: 12px;
      width: 30%;
    }
  }
`;

export default SignUp;
