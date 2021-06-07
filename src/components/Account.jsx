import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAccountInfo } from '../actions/user_actions';
import Loading from './Loading';

const Account = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { hasUserError, hasUserLoggedIn, userInfo, userLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const isUserObjEmpty = Object.keys(userInfo).length === 0;

    if (hasUserError || (!hasUserLoggedIn && isUserObjEmpty)) {
      history.push('/log-in');
    }

    isUserObjEmpty && dispatch(getAccountInfo());

    // eslint-disable-next-line
  }, [hasUserLoggedIn]);

  const { displayPicture, firstName, lastName, email, phoneNumber, gender } =
    userInfo;
  const [wannaEdit, setWannaEdit] = useState(false);

  const [info, setInfo] = useState({
    firstName,
    lastName,
    email,
    phoneNumber,
    password: '**********',
    confirmPassword: '**********',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
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
              <img
                src={`dp/${displayPicture}`}
                alt={`${firstName} ${lastName}`}
              />
            </div>
            <p>
              {firstName} {lastName}
            </p>
          </aside>

          <main>
            <div className="row flex">
              <h4>First Name:</h4>
              {wannaEdit ? (
                <input
                  value={info.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleInput}
                />
              ) : (
                <span>{firstName}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Last Name:</h4>
              {wannaEdit ? (
                <input
                  value={info.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleInput}
                />
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
                <input
                  value={info.email}
                  type="text"
                  name="email"
                  onChange={handleInput}
                />
              ) : (
                <span>{email}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Phone Number:</h4>
              {wannaEdit ? (
                <input
                  value={info.phoneNumber}
                  type="text"
                  name="phoneNumber"
                  onChange={handleInput}
                />
              ) : (
                <span>{phoneNumber}</span>
              )}
            </div>

            <div className="row flex">
              <h4>Password:</h4>
              {wannaEdit ? (
                <input
                  value={info.password}
                  type="text"
                  name="password"
                  onChange={handleInput}
                />
              ) : (
                <span>*************</span>
              )}
            </div>
            {wannaEdit && (
              <div className="row flex">
                <h4>Confirm Password:</h4>
                <input
                  value={info.password}
                  type="text"
                  name="password"
                  onChange={handleInput}
                />
              </div>
            )}
            {!wannaEdit ? (
              <button
                type="button"
                className="update_btn"
                onClick={() => setWannaEdit(true)}
              >
                Wanna Update the info??
              </button>
            ) : (
              <button
                className="update_btn"
                type="button"
                onClick={() => setWannaEdit(false)}
              >
                Update!!!
              </button>
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
  gap: 1rem;
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

    p {
      padding: 20px 0px;
      font-size: 1em;
      color: #333;
      letter-spacing: 1px;
    }
  }

  main {
    grid-area: m;

    .row {
      justify-content: space-between;
      padding: 0px 0 40px;

      h4 {
        font-size: 1.2em;
        color: #444;
        letter-spacing: 2px;
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
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
          rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
          rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
      }
    }
    .update_btn {
      font-size: 1em;
      padding: 10px 20px;
      background: #1e6adb;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
      transition: transform 0.5s ease;
    }
    .update_btn:hover {
      transform: scale(1.1);
    }
  }
`;

export default Account;
