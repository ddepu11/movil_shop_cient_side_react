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
  const { displayPicture, firstName, lastName, email, phoneNumber } = userInfo;
  return (
    <>
      <Wrapper className="w-960">
        <aside>
          <img
            src={`dp/${displayPicture}`}
            alt={`${firstName} ${lastName}`}
            className="dp"
          />
          <p>{email}</p>
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
            <h4>Email</h4>
            <span>{email}</span>
          </div>
          <div className="row flex">
            <h4>Phone Number</h4>
            <span>{phoneNumber}</span>
          </div>
          <div className="row flex">
            <h4>Password</h4>
            <span>*********</span>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 20px 0;
  display: grid;
  gap: 1.3rem;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  grid-template-rows: minmax(180px, auto);
  grid-template-areas: 'as m m';

  aside {
    grid-area: 'as';
    .dp {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  main {
    grid-area: 'm';
  }
`;

export default Account;
