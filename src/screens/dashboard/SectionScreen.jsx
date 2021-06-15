import React from 'react';
import styled from 'styled-components';

const SectionScreen = () => (
  <Wrapper>
    <h1>SectionScreen</h1>
  </Wrapper>
);

const Wrapper = styled.section`
  grid-area: s;
  border: 1px solid #855;
`;

export default SectionScreen;
