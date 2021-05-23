import React from "react";
import {
  Navbar,
  Home,
  Footer,
  About,
  Products,
  LogIn,
  Loading,
} from "./components";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { authenticationLoading } = useSelector((state) => state.user);

  console.log(authenticationLoading);

  return (
    <Wrapper>
      {authenticationLoading ? (
        <Loading />
      ) : (
        <Router>
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
            <Route exact path="/products">
              <Products />
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
