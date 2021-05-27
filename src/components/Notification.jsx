import React from "react";
import styled from "styled-components";

const Notification = ({ msg }) => {
  return (
    <Wrapper>
      <h2>{msg}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  width: auto;
  margin: 0 auto;
  background: #757e86;
  color: black;
  text-align: center;
  padding: 5px 0;
  letter-spacing: 1px;
`;
export default Notification;
