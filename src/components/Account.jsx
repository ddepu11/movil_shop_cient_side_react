import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAccountInfo } from '../actions/user_actions';

const Account = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { hasUserError, hasUserLoggedIn, userInfo } = useSelector(
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

  return (
    <>
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
            <span>{firstName}</span>
          </div>

          <div className="row flex">
            <h4>Last Name:</h4>
            <span>{lastName}</span>
          </div>

          <div className="row flex">
            <h4>Gender:</h4>
            <span>{gender}</span>
          </div>

          <div className="row flex">
            <h4>Email:</h4>
            <span>{email}</span>
          </div>

          <div className="row flex">
            <h4>Phone Number:</h4>
            <span>{phoneNumber}</span>
          </div>

          <div className="row flex">
            <h4>Password:</h4>
            <span>*********</span>
          </div>
        </main>
      </Wrapper>
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
        border-radius: 50%;
      }
    }

    .dp::before {
      content: '';
      background: #9c4ddd;
      width: 100%;
      height: 100%;
      position: absolute;
      top: -5px;
      left: 12px;
      z-index: -1;
      border-radius: 50%;
    }
    .dp::after {
      
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
    }
  }
`;

export default Account;
