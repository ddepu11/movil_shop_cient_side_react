import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ref, deleteObject } from 'firebase/storage';
import { storageInstance } from '../../../config/firebase';
import { listUsers, deleteUser } from '../../../actions/adminActions';
import CircleLoader from '../../../components/CircleLoader';
import User from '../../../components/User';
import {
  ADMIN_DELETE_USER_BEGIN,
  ADMIN_DELETE_USER_ERROR,
} from '../../../constants/adminConstants';
import { sendNotification } from '../../../actions/notificationActions';

const AdminDashboardUsersScreen = () => {
  const dispatch = useDispatch();

  const { users, adminLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  if (adminLoading) {
    return (
      <CircleLoader
        bgColor="var(--secondary-color)"
        wrapperH="80vh"
        spW="90px"
        spH="90px"
        cirW="90px"
        cirH="90px"
      />
    );
  }

  const deleteDp = async (userId, userEmail, fileName) => {
    const userPicRef = ref(
      storageInstance,
      `displayPictures/${userEmail}/${fileName}`
    );

    try {
      await deleteObject(userPicRef);

      dispatch(deleteUser(userId));
    } catch (err) {
      dispatch({ type: ADMIN_DELETE_USER_ERROR });

      dispatch(sendNotification(err.code, true));
    }
  };

  const handleDelete = (e) => {
    const { value } = e.target.dataset;

    const {
      displayPicture: { url, fileName },
      email,
    } = users.filter((item) => item._id === value)[0];

    if (url) {
      dispatch({ type: ADMIN_DELETE_USER_BEGIN });

      deleteDp(value, email, fileName);
    } else {
      dispatch(deleteUser(value));
    }
  };

  return (
    <Wrapper>
      {users.length !== 0 ? (
        <h2>All The users in the system</h2>
      ) : (
        <div className="no_user">
          <h2>Sorry There are no users registered</h2>
        </div>
      )}

      {users.length !== 0 &&
        users.map((i) => (
          <User key={i._id} i={i} handleDelete={handleDelete} isSeller="NO" />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 10px 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  h2 {
    color: var(--little-dark-color);
    padding: 8px 0 15px;
  }

  .no_user {
    display: grid;
    place-items: center;
    text-align: center;
    height: 40vh;
    font-size: 1.2em;
    text-transform: capitalize;
  }
`;

export default AdminDashboardUsersScreen;
