import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ImCancelCircle } from 'react-icons/im';
import {
  changeDisplayPicture,
  getAccountInfo,
  sendNotification,
  updateUser,
} from '../actions/user_actions';
import Loading from './Loading';
import formValidation from '../utils/formValidation';

const Account = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { hasUserError, hasUserLoggedIn, userInfo, userLoading } = useSelector(
    (state) => state.user
  );

  const setTimeOutRefId = useRef();

  // Clears all the set timeouts
  const clearAllSetTimeOut = () => {
    let id = setTimeOutRefId.current;
    while (id) {
      clearTimeout(id);
      id -= 1;
    }
  };
  const [dpSRC, setDpSRC] = useState({ preview: '', file: '' });

  useEffect(() => {
    const isUserObjEmpty = Object.keys(userInfo).length === 0;

    if (hasUserError || (!hasUserLoggedIn && isUserObjEmpty)) {
      history.push('/log-in');
    }

    isUserObjEmpty && dispatch(getAccountInfo());

    setDpSRC({ ...dpSRC, preview: `dp/${userInfo.displayPicture}` });

    return () => {
      clearAllSetTimeOut();
    };

    // eslint-disable-next-line
  }, [hasUserLoggedIn]);

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
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // Update User Information
  const updateInfo = () => {
    const errorFlag = formValidation(info, setTimeOutRefId, {
      firstNameRef,
      lastNameRef,
      passwordRef,
      phoneNumberRef,
      emailRef,
      confirmPasswordRef,
    });

    if (!errorFlag) {
      clearAllSetTimeOut();

      // If info is same dont update
      if (
        info.password === userInfo.password &&
        info.firstName === userInfo.firstName &&
        info.lastName === userInfo.lastName &&
        info.email === userInfo.email &&
        info.phoneNumber === userInfo.phoneNumber
      ) {
        dispatch(sendNotification('Sorry there is nothing to update!!!'));
      } else {
        dispatch(
          updateUser({
            firstName: info.firstName,
            lastName: info.lastName,
            phoneNumber: info.phoneNumber,
            email: info.email,
            password: info.password,
          })
        );
        setWannaEdit(true);
      }
    }
  };

  const [wannaChangeDP, setWannaChangeDP] = useState(false);

  const handleChangeDP = (e) => {
    setWannaChangeDP(true);
    const file = e.target.files[0];

    if (file.size < 5242880) {
      const fileSRC = URL.createObjectURL(file);
      setDpSRC({ ...dpSRC, preview: fileSRC, file });
    } else {
      dispatch(sendNotification('Image size should not be geater then 5mb!!!'));
    }
  };

  const changeDP = () => {
    const { file } = dpSRC;
    if (file) {
      const formData = new FormData();
      formData.append('dp', file);
      dispatch(changeDisplayPicture(formData));
    }
  };

  const cancelChangeDP = () => {
    setWannaChangeDP(false);
    setDpSRC({ ...dpSRC, preview: `dp/${userInfo.displayPicture}` });
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

          <aside className="flex">
            <div className="dp">
              <img src={dpSRC.preview} alt={`${firstName} ${lastName}`} />

              <div className="change_dp_div flex">
                <label htmlFor="change_dp">Change DP</label>

                <input
                  type="file"
                  name="newDP"
                  id="change_dp"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleChangeDP}
                />

                {wannaChangeDP && (
                  <>
                    <button
                      onClick={changeDP}
                      type="button"
                      className="upload_btn"
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      onClick={cancelChangeDP}
                      className="cancel_upload_btn flex"
                    >
                      Cancel Upload
                      <ImCancelCircle />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* <p>
              {firstName} {lastName}
            </p> */}
          </aside>

          <main>
            <div className="row flex">
              <h4>First Name:</h4>
              {wannaEdit ? (
                <div className="flex">
                  <input
                    value={info.firstName}
                    type="text"
                    name="firstName"
                    onChange={handleInput}
                  />
                  <p ref={firstNameRef} className="message" />
                </div>
              ) : (
                <span>{firstName}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Last Name:</h4>
              {wannaEdit ? (
                <div className="flex">
                  <input
                    value={info.lastName}
                    type="text"
                    name="lastName"
                    onChange={handleInput}
                  />
                  <p ref={lastNameRef} className="message" />
                </div>
              ) : (
                <span>{lastName}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Gender:</h4>
              <span>{gender}</span>
            </div>

            <div className="row flex">
              <h4>Email:</h4>
              {wannaEdit ? (
                <div className="flex">
                  <input
                    value={info.email}
                    type="text"
                    name="email"
                    onChange={handleInput}
                  />
                  <p ref={emailRef} className="message" />
                </div>
              ) : (
                <span>{email}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Phone Number:</h4>
              {wannaEdit ? (
                <div className="flex">
                  <input
                    value={info.phoneNumber}
                    type="text"
                    name="phoneNumber"
                    onChange={handleInput}
                  />
                  <p ref={phoneNumberRef} className="message" />
                </div>
              ) : (
                <span>{phoneNumber}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Password:</h4>
              {wannaEdit ? (
                <div className="flex">
                  <input
                    value={info.password}
                    type="password"
                    name="password"
                    onChange={handleInput}
                  />
                  <p ref={passwordRef} className="message" />
                </div>
              ) : (
                <span>*************</span>
              )}
            </div>

            {/* Buttons */}
            {wannaEdit && (
              <div className="row flex">
                <h4>Confirm Password:</h4>
                <div className="flex">
                  <input
                    value={info.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    onChange={handleInput}
                  />
                  <p ref={confirmPasswordRef} className="message" />
                </div>
              </div>
            )}

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

  aside {
    grid-area: as;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    z-index: 0;
    .dp {
      width: 180px;
      height: 180px;
      transform: translateX(-15%);
      position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        box-shadow: -5px 6px 8px 1px #252525;
      }
      .change_dp_div {
        margin-top: 20px;
        text-align: center;
        flex-direction: column;
        gap: 8px 0;
        label {
          font-size: 1em;
          padding: 5px 10px;
          background: #1e6adb;
          border-radius: 2px;
          color: white;
          width: 100%;
        }
        .upload_btn {
          font-size: 1em;
          padding: 5px 10px;
          background: #1c8f0d;
          color: white;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
          width: 100%;
        }
        .cancel_upload_btn {
          color: red;
          width: 100%;
          font-size: 1.1em;
          background: #b9b7b7;
          justify-content: space-between;
          padding: 5px 10px;
        }
        label,
        .cancel_upload_btn,
        .upload_btn {
          transition: transform 0.5s ease;
        }
        label:hover,
        .cancel_upload_btn:hover,
        .upload_btn:hover {
          transform: scale(1.15);
          cursor: pointer;
        }

        input {
          display: none;
        }
      }
    }

    .dp::before {
      content: '';
      background: #1e6adb;
      width: 100%;
      height: 100%;
      position: absolute;
      top: -10px;
      left: 12px;
      z-index: -1;
      box-shadow: 5px -2px 8px #252525;
    }
    .dp::after {
      font-family: 'Font Awesome 5 Free';
      content: '\f083';
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #1e6adb;
      position: absolute;
      top: 0;
      left: -20px;
      color: white;
      font-size: 1.1em;
      font-weight: bold;
      display: grid;
      place-content: center;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    /* p {
      margin-top: 60px;
      font-size: 1.2em;
      color: #333;
      letter-spacing: 1px;
    } */
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
        justify-self: start;
        letter-spacing: 1px;
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
