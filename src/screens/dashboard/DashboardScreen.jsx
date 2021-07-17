import React from 'react';
import styled from 'styled-components';
import HeaderScreen from './HeaderScreen';
import SectionScreen from './SectionScreen';
import Hero from '../../components/Hero';
import DashboardScreenLogic from './logic/DashboardScreenLogic';
import CircleLoader from '../../components/CircleLoader';

const DashboardScreen = () => {
  const { mobileLoading } = DashboardScreenLogic();

  if (mobileLoading) {
    return (
      <CircleLoader
        bgColor="var(--secondary-color)"
        wrapperH="80vh"
        spW="90px"
        spH="90px"
        cirW="90px"
        cirH="90px"
      />
    );
  }

  return (
    <>
      <Hero title="dashboard" />
      <Wrapper className="w-960">
        <HeaderScreen />
        <SectionScreen />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  grid-template-rows: minmax(200px, auto);
  gap: 1.5rem;
  grid-template-areas:
    'h h h h'
    's s s s';
`;

export default DashboardScreen;
