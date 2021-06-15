import React from 'react';
import styled from 'styled-components';

const AsideScreen = () => (
  <Wrapper>
    <div className="a">
      <h1>skk</h1>
    </div>
  </Wrapper>
);

const Wrapper = styled.aside`
  grid-area: a;
  border: 1px solid #111;
`;

export default AsideScreen;
