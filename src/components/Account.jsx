import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getAccountInfo } from "../actions/user_actions";

const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountInfo());
  }, []);

  return <Wrapper className="w-960">Hello</Wrapper>;
};

const Wrapper = styled.main``;

export default Account;
