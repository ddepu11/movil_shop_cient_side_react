import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/Notification';
import Loading from './components/Loading';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import AboutScreen from './screens/AboutScreen';
import SignUpScreen from './screens/signup/SignUpScreen';
import SignInScreen from './screens/signin/SignInScreen';
import Footer from './components/Footer';
import AccountScreen from './screens/account/AccountScreen';
import ProductsScreen from './screens/products/ProductsScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';
import { authenticateUser } from './actions/userActions';

const App = () => {
  const { isLoading } = useAuth0();

  const { notificationMessage, danger } = useSelector(
    (state) => state.notification
  );

  const dispatch = useDispatch();

  const { hasUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    !hasUserLoggedIn && dispatch(authenticateUser());
  }, [hasUserLoggedIn, dispatch]);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          {notificationMessage && (
            <Notification
              msg={notificationMessage.toString()}
              color={danger ? '#c52525' : '#25c555'}
            />
          )}

          <Navbar />

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

            <Route exact path="/products">
              <ProductsScreen />
            </Route>

            <Route exact path="/account">
              <AccountScreen />
            </Route>

            <Route path="/dashboard">
              <DashboardScreen />
            </Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`;

export default App;
