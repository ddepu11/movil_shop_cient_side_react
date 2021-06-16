import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { clearNotification } from '../actions/userActions';

const Notification = ({ msg, color }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  });

  return (
    <Wrapper style={{ background: color }}>
      <h2>{msg}</h2>
    </Wrapper>
  );
};

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 29%;
  left: 0;
  width: auto;
  margin: 0 auto;
  color: #fdfdfd;
  text-align: center;
  padding: 6px 20px;
  letter-spacing: 3px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  h2 {
    font-size: 1.2em;
  }
`;

export default Notification;
