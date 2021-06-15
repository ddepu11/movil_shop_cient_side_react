import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import Notification from './components/Notification';
import Loading from './components/Loading';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import AboutScreen from './screens/AboutScreen';
import SignUpScreen from './screens/signup/SignUpScreen';
import SignInScreen from './screens/signin/SignInScreen';
import Footer from './components/Footer';
import AccountScreen from './screens/account/AccountScreen';
import Products from './components/products/Products';
import DashboardScreen from './screens/dashboard/DashboardScreen';

const App = () => {
  const { isLoading } = useAuth0();
  const { userMsg, hasUserError } = useSelector((state) => state.user);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          {userMsg && (
            <Notification
              msg={userMsg.toString()}
              color={hasUserError ? '#c52525' : '#25c555'}
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
              <Products />
            </Route>

            <Route exact path="/account">
              <AccountScreen />
            </Route>

            <Route exact path="/dashboard">
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
`;

export default App;
