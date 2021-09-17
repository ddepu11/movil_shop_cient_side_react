import React from 'react';
import styled from 'styled-components';

const ErrorScreen = () => (
  <Wrapper className="w-960 flex">
    <h2>Error 404 ! Sorry the page you have requested doesn&apos;t exists.</h2>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 5px 5px;
  height: 50vh;
  color: #222;
`;

export default ErrorScreen;
