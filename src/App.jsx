import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import {
  Navbar,
  Home,
  Footer,
  About,
  Products,
  LogIn,
  Loading,
  SignUp,
  Account,
} from './components';
import Notification from './components/Notification';

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
              msg={userMsg}
              color={hasUserError ? '#c52525' : '#25c555'}
            />
          )}
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/log-in">
              <LogIn />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/account">
              <Account />
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
