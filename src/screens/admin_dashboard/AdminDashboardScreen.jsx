import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import AdminDashboardMobilesScreen from './mobiles/AdminDashboardMobilesScreen';
import AdminDashboardNavigationScreen from './AdminDashboardNavigationScreen';
import AdminDashboardSellersScreen from './sellers/AdminDashboardSellersScreen';
import AdminDashboardUsersScreen from './users/AdminDashboardUsersScreen';

const AdminDashboardScreen = () => (
  <Wrapper className="w-960">
    <AdminDashboardNavigationScreen />

    <Route exact path="/admin-dashboard/mobiles">
      <AdminDashboardMobilesScreen />
    </Route>

    <Route exact path="/admin-dashboard/users">
      <AdminDashboardUsersScreen />
    </Route>

    <Route exact path="/admin-dashboard/sellers">
      <AdminDashboardSellersScreen />
    </Route>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 10px 8px;
`;

export default AdminDashboardScreen;
