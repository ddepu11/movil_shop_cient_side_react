import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAccountInfo, updateUser } from '../../actions/userActions';
import Loading from '../../components/Loading';
import validateForm from '../../utils/validateForm';
import clearAllSetTimeOut from '../../utils/clearAllSetTimeOut';
import AsideScreen from './AsideScreen';
import FormFieldScreen from './FormFieldScreen';
import Button from '../../components/Button';
import { sendNotification } from '../../actions/notificationActions';

const AccountScreen = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { hasUserError, hasUserLoggedIn, userInfo, userLoading } = useSelector(
    (state) => state.user
  );

  const setTimeOutId = useRef();

  useEffect(() => {
    const isUserObjEmpty = Object.keys(userInfo).length === 0;

    if (hasUserError || (!hasUserLoggedIn && isUserObjEmpty)) {
      history.push('/sign-in');
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
        dispatch(sendNotification('Sorry there is nothing to update!!!', true));
        setWannaEdit(false);
        clearAllSetTimeOut(setTimeOutId);
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

          <AsideScreen />

          <main className="card">
            <FormFieldScreen
              heading="First Name:"
              wannaEdit={wannaEdit}
              inputValue={info.firstName}
              type="text"
              inputName="firstName"
              handleInput={handleInput}
              refObj={firstNameValidationMessageTag}
              spanInnerText={firstName}
            />

            <FormFieldScreen
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

            <FormFieldScreen
              heading="Email:"
              wannaEdit={wannaEdit}
              inputValue={info.email}
              type="email"
              inputName="email"
              handleInput={handleInput}
              refObj={emailValidationMessageTag}
              spanInnerText={email}
            />

            <FormFieldScreen
              heading="Phone Number:"
              wannaEdit={wannaEdit}
              inputValue={String(info.phoneNumber)}
              type="text"
              inputName="phoneNumber"
              handleInput={handleInput}
              refObj={phoneNumberValidationMessageTag}
              spanInnerText={String(phoneNumber)}
            />

            <FormFieldScreen
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
              <FormFieldScreen
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
              <Button
                pt="10px"
                pb="10px"
                pl="20px"
                pr="20px"
                onClick={initiateUpdateProcess}
                bgColor="#1e6adb"
                color="white"
                handleClick={initiateUpdateProcess}
                bSh="rgba(0, 0, 0, 0.3) 0px 10px 20px, rgba(0, 0, 0, 0.22) 0px 10px 12px"
              >
                Wanna Update your information??
              </Button>
            ) : (
              <>
                <Button
                  pt="10px"
                  pb="10px"
                  pl="20px"
                  pr="20px"
                  mr="10px"
                  handleClick={updateInfo}
                  bgColor="#20913c"
                >
                  Update!!!
                </Button>
                <Button
                  pt="10px"
                  pb="10px"
                  pl="20px"
                  pr="20px"
                  mr="10px"
                  handleClick={cancelUpdate}
                  bgColor="#e00926"
                >
                  Cancel
                </Button>
              </>
            )}
            {/* Button Ends */}
          </main>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.main`
  padding: 25px 0 40px;
  display: grid;
  grid-template-columns: repeat(3, minmax(50px, auto));
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
    padding: 5px 15px 20px;

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

    .update_btn:hover,
    .cancel_btn:hover {
      transform: scale(1.1);
    }
  }
`;

export default AccountScreen;
