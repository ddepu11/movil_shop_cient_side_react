import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import DashboardAllMobilesScreen from './DashboardAllMobilesScreen';
import DashboardAddMobileScreen from './DashboardAddMobileScreen';
import NavigationScreen from '../DashboardNavigationScreen';

const DashboardMainScreen = () => (
  <Wrapper className="card">
    <NavigationScreen />
    <Route exact path="/dashboard/all-mobiles">
      <DashboardAllMobilesScreen />
    </Route>

    <Route exact path="/dashboard/add-mobile">
      <DashboardAddMobileScreen />
    </Route>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 12px 8px;
  grid-area: s;
`;

export default DashboardMainScreen;
