import React from 'react';
import styled from 'styled-components';

const ListViewScreen = () => {
  console.log('List View');

  return (
    <Wrapper>
      <h1>List View</h1>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  border: 1px solid red;
`;

export default ListViewScreen;
