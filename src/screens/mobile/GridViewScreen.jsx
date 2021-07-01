import React from 'react';
import styled from 'styled-components';

const GridViewScreen = () => {
  console.log('Grid View');

  return (
    <Wrapper>
      <h1>Grid View</h1>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border: 1px solid black;
`;

export default GridViewScreen;
