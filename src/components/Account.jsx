import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAccountInfo } from "../actions/user_actions";
import { useHistory } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { hasUserError } = useSelector((state) => state.user);

  if (hasUserError) {
    history.push("/log-in");
  }

  useEffect(() => {
    dispatch(getAccountInfo());
  }, []);

  return <Wrapper className="w-960">Hello</Wrapper>;
};

const Wrapper = styled.main``;

export default Account;
