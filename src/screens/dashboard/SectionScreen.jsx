import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import AllMobilesScreen from './AllMobilesScreen';
import AddMobileScreen from './AddMobileScreen';

const SectionScreen = () => (
  <Wrapper className="card">
    <Route exact path="/dashboard/all-mobiles">
      <AllMobilesScreen />
    </Route>

    <Route exact path="/dashboard/add-mobile">
      <AddMobileScreen />
    </Route>
  </Wrapper>
);

const Wrapper = styled.section`
  padding: 12px 10px;
  grid-area: s;
`;

export default SectionScreen;
