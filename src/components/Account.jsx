import React, { useEffect } from "react";
import styled from "styled-components";
import { accountInfo } from "../api/user_api";

const Account = () => {
  const getData = async () => {
    try {
      const { data } = await accountInfo();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <Wrapper className="w-960">Hello</Wrapper>;
};

const Wrapper = styled.main``;

export default Account;
