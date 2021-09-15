import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listAllMobiles } from './actions/mobileActions';
import {
  authenticateUser,
  isUserRegisteredWithThisEmail,
} from './actions/userActions';
import Notification from './components/Notification';
import HomeScreen from './screens/HomeScreen';
import NavbarScreen from './screens/NavbarScreen';
import AboutScreen from './screens/AboutScreen';
import SignUpScreen from './screens/signup/SignUpScreen';
import SignInScreen from './screens/signin/SignInScreen';
import FooterScreen from './screens/FooterScreen';
import AccountScreen from './screens/account/AccountScreen';
import MobilesScreen from './screens/mobiles/MobilesScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';
import MobileScreen from './screens/mobile/MobileScreen';
import CartScreen from './screens/cart/CartScreen';
import CheckOutScreen from './screens/checkout/CheckOutScreen';
import OrdersScreen from './screens/orders/OrdersScreen';
import loadGoogleAPILibrary from './actions/signInViaGoogleActions';
import AdminDashboardScreen from './screens/admin_dashboard/AdminDashboardScreen';

const App = () => {
  const { notificationMessage, danger } = useSelector(
    (state) => state.notification
  );

  const dispatch = useDispatch();

  const { hasUserLoggedIn, role, id, userInfo } = useSelector(
    (state) => state.user
  );

  const { mobileSaved } = useSelector((state) => state.mobile);

  const { googleAuth, googleAuthLoading } = useSelector(
    (state) => state.signInViaGoogle
  );

  useEffect(() => {
    // If seller logs in he will only be able to see other sellers mobiles not his

    if (role === 'SELLER') {
      dispatch(listAllMobiles(userInfo.email));
    } else if (role !== 'ADMIN' && role !== 'SELLER') {
      dispatch(listAllMobiles());
    }

    !hasUserLoggedIn && dispatch(loadGoogleAPILibrary());

    !hasUserLoggedIn && dispatch(authenticateUser());
  }, [hasUserLoggedIn, dispatch, mobileSaved, role, id, userInfo]);

  useEffect(() => {
    if (!googleAuthLoading && googleAuth) {
      googleAuth.currentUser.listen((user) => {
        const userEmail = user.getBasicProfile().getEmail();

        dispatch(isUserRegisteredWithThisEmail(userEmail, googleAuth));
      });
    }
  }, [googleAuth, googleAuthLoading, dispatch]);

  return (
    <Wrapper>
      <Router>
        {notificationMessage && (
          <Notification
            msg={notificationMessage.toString()}
            color={danger ? 'var(--danger-color)' : 'var(--success-color)'}
          />
        )}

        <NavbarScreen />

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>

          <Route exact path="/about">
            <AboutScreen />
          </Route>

          <Route exact path="/sign-in">
            <SignInScreen />
          </Route>

          <Route exact path="/sign-up">
            <SignUpScreen />
          </Route>

          <Route exact path="/mobiles">
            <MobilesScreen />
          </Route>

          <Route exact path="/account">
            <AccountScreen />
          </Route>

          <Route path="/dashboard">
            <DashboardScreen />
          </Route>

          <Route path="/mobiles/:mobileId">
            <MobileScreen />
          </Route>

          <Route path="/cart">
            <CartScreen />
          </Route>

          <Route path="/checkout">
            <CheckOutScreen />
          </Route>

          <Route path="/orders">
            <OrdersScreen />
          </Route>

          <Route path="/admin-dashboard">
            <AdminDashboardScreen />
          </Route>
        </Switch>
        <FooterScreen />
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`;

export default App;
