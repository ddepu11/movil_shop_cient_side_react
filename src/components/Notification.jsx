import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Notification = ({ msg }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch();
    }, 4000);

    return () => {
      clearTimeout(setTimeout);
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
`;
export default Notification;
