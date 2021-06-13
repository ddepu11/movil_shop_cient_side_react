import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getAccountInfo,
  sendNotification,
  updateUser,
} from '../../actions/user_actions';
import Loading from '../Loading';
import validateForm from '../../utils/validateForm';
import clearAllSetTimeOut from '../../utils/clearAllSetTimeOut';
import Aside from './Aside';
import FormField from './FormField';

const Account = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { hasUserError, hasUserLoggedIn, userInfo, userLoading } = useSelector(
    (state) => state.user
  );

  const setTimeOutId = useRef();

  useEffect(() => {
    const isUserObjEmpty = Object.keys(userInfo).length === 0;

    if (hasUserError || (!hasUserLoggedIn && isUserObjEmpty)) {
      history.push('/log-in');
    }

    isUserObjEmpty && dispatch(getAccountInfo());

    return () => clearAllSetTimeOut(setTimeOutId);

    // eslint-disable-next-line
  }, [hasUserLoggedIn, userInfo]);

  const { firstName, lastName, email, phoneNumber, gender, password } =
    userInfo;

  const [wannaEdit, setWannaEdit] = useState(false);

  const [info, setInfo] = useState({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword: '*************************************************',
  });

  const initiateUpdateProcess = () => {
    setWannaEdit(true);
    setInfo({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword: password,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  // Cancel update process
  const cancelUpdate = () => {
    clearAllSetTimeOut(setTimeOutId);
    setWannaEdit(false);
    setInfo({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword: password,
    });
  };

  // Reference to diff message paragraph
  const firstNameValidationMessageTag = useRef(null);
  const lastNameValidationMessageTag = useRef(null);
  const passwordValidationMessageTag = useRef(null);
  const phoneNumberValidationMessageTag = useRef(null);
  const emailValidationMessageTag = useRef(null);
  const confirmPasswordValidationMessageTag = useRef(null);

  // Update User Information
  const updateInfo = () => {
    const errorFlag = validateForm(
      {
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        phoneNumber: info.phoneNumber,
        password: info.password,
        confirmPassword: info.confirmPassword,
      },
      setTimeOutId,
      {
        firstNameValidationMessageTag,
        lastNameValidationMessageTag,
        passwordValidationMessageTag,
        phoneNumberValidationMessageTag,
        emailValidationMessageTag,
        confirmPasswordValidationMessageTag,
      }
    );

    if (!errorFlag) {
      // If info is same dont update
      if (
        info.password === userInfo.password &&
        info.firstName === userInfo.firstName &&
        info.lastName === userInfo.lastName &&
        info.email === userInfo.email &&
        info.phoneNumber === userInfo.phoneNumber
      ) {
        dispatch(sendNotification('Sorry there is nothing to update!!!'));
        setWannaEdit(false);
      } else {
        // if email same and phone no isn't dont sent email
        if (
          info.email === userInfo.email &&
          info.phoneNumber !== userInfo.phoneNumber
        ) {
          dispatch(
            updateUser({
              firstName: info.firstName,
              lastName: info.lastName,
              phoneNumber: info.phoneNumber,
              password: info.password,
            })
          );
          // if phone no same and email isn't dont sent phone no
        } else if (
          info.phoneNumber === userInfo.phoneNumber &&
          info.email !== userInfo.email
        ) {
          dispatch(
            updateUser({
              firstName: info.firstName,
              lastName: info.lastName,
              email: info.email,
              password: info.password,
            })
          );
          // if email and phone number same don't sent them
        } else if (
          info.phoneNumber === userInfo.phoneNumber &&
          info.email === userInfo.email
        ) {
          dispatch(
            updateUser({
              firstName: info.firstName,
              lastName: info.lastName,
              password: info.password,
            })
          );
        }

        setWannaEdit(false);
      }
    }
  };

  return (
    <>
      {userLoading ? (
        <Loading />
      ) : (
        <Wrapper className="w-960">
          <header>
            <h1>
              Hello {firstName} {lastName}
            </h1>
          </header>

          <Aside />

          <main>
            <FormField
              heading="First Name:"
              wannaEdit={wannaEdit}
              inputValue={info.firstName}
              type="text"
              inputName="firstName"
              handleInput={handleInput}
              refObj={firstNameValidationMessageTag}
              spanInnerText={firstName}
            />

            <FormField
              heading="Last Name:"
              wannaEdit={wannaEdit}
              inputValue={info.lastName}
              type="text"
              inputName="lastName"
              handleInput={handleInput}
              refObj={lastNameValidationMessageTag}
              spanInnerText={lastName}
            />

            <div className="row flex">
              <h4>Gender:</h4>
              <span>{gender}</span>
            </div>

            <FormField
              heading="Email:"
              wannaEdit={wannaEdit}
              inputValue={info.email}
              type="email"
              inputName="email"
              handleInput={handleInput}
              refObj={emailValidationMessageTag}
              spanInnerText={email}
            />

            <FormField
              heading="Phone Number:"
              wannaEdit={wannaEdit}
              inputValue={String(info.phoneNumber)}
              type="text"
              inputName="phoneNumber"
              handleInput={handleInput}
              refObj={phoneNumberValidationMessageTag}
              spanInnerText={String(phoneNumber)}
            />

            <FormField
              heading="Password:"
              wannaEdit={wannaEdit}
              inputValue={info.password}
              type="password"
              inputName="password"
              handleInput={handleInput}
              refObj={passwordValidationMessageTag}
              spanInnerText="*************"
            />

            {/* Buttons */}
            {wannaEdit && (
              <FormField
                heading="Confirm Password:"
                wannaEdit={wannaEdit}
                inputValue={info.confirmPassword}
                type="password"
                inputName="confirmPassword"
                handleInput={handleInput}
                refObj={confirmPasswordValidationMessageTag}
                spanInnerText="*************"
              />
            )}

            {/* Buttons */}
            {!wannaEdit ? (
              <button
                type="button"
                className="update_btn"
                onClick={initiateUpdateProcess}
              >
                Wanna Update your information??
              </button>
            ) : (
              <>
                <button
                  className="update_btn"
                  type="button"
                  onClick={updateInfo}
                >
                  Update!!!
                </button>
                <button
                  type="button"
                  className="cancel_btn"
                  onClick={cancelUpdate}
                >
                  Cancel
                </button>
              </>
            )}
          </main>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  padding: 25px 0 40px;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, auto));
  grid-template-rows: minmax(50px, auto);
  grid-template-areas: 'h h h' 'as m m';

  header {
    grid-area: h;
    padding: 0px 0 50px;

    h1 {
      font-size: 2.5em;
      color: #444;
      letter-spacing: 4px;
      text-transform: capitalize;
    }
  }

  main {
    grid-area: m;

    .row {
      justify-content: space-between;
      padding: 0px 0 30px;

      h4 {
        font-size: 1.2em;
        color: #444;
        letter-spacing: 2px;
      }
      div {
        flex-direction: column;
        width: 38%;
        align-items: flex-start;
        p {
          transition: all 0.5s ease;
          height: 0;
          width: 0;
          overflow: hidden;
        }
      }

      span {
        font-size: 1em;
        color: #333;
        letter-spacing: 1px;
        display: block;
        width: 38%;
      }

      input {
        padding: 10px 0px 10px 5px;
        font-size: 1em;
        border-radius: 2px;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      }

      .message.error {
        color: red;
        font-size: 1.1em;
      }

      .message.success {
        color: green;
        font-size: 1.1em;
      }

      .message.success,
      .message.error {
        height: auto;
        width: auto;
      }
    }

    .update_btn,
    .cancel_btn {
      font-size: 1em;
      padding: 10px 20px;
      background: #1e6adb;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
      transition: transform 0.5s ease;
      margin-right: 30px;
    }

    .cancel_btn {
      background: #e00926;
    }

    .update_btn:hover,
    .cancel_btn:hover {
      transform: scale(1.1);
    }
  }
`;

export default Account;
