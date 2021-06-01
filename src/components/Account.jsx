import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Account = () => {
  const { userInfo } = useSelector((state) => state.user);

  console.log(userInfo);

  return <Wrapper className="w-960">Hello</Wrapper>;
};

const Wrapper = styled.main``;

export default Account;
