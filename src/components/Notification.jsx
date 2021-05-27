import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearUserMessage } from "../actions/user_actions";

const Notification = ({ msg }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const removeNotification = setTimeout(() => {
      dispatch(clearUserMessage());
    }, 4000);

    return () => {
      clearTimeout(removeNotification);
    };
  }, [msg]);

  return (
    <Wrapper>
      <h2>{msg}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 29%;
  left: 0;
  width: auto;
  margin: 0 auto;
  background: #757e86;
  color: black;
  text-align: center;
  padding: 6px 20px;
  letter-spacing: 2px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 1s ease-in;
`;
export default Notification;
