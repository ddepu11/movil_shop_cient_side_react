import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import Notification from './components/Notification';
import Loading from './components/Loading';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Account from './components/Account';
import Products from './components/products/Products';

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
