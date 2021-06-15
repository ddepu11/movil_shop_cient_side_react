import React from 'react';
import styled from 'styled-components';
import AsideScreen from './AsideScreen';
import SectionScreen from './SectionScreen';

const DashboardScreen = () => (
  <Wrapper className="w-960">
    <AsideScreen />
    <SectionScreen />
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 20px 0;
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 1.5rem;
  grid-template-areas: 'a s s s';
`;

export default DashboardScreen;
