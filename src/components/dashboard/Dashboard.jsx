import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Section from './Section';

const Dashboard = () => (
  <Wrapper className="w-960">
    <Aside />

    <Section />
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 20px 0;
`;

export default Dashboard;
