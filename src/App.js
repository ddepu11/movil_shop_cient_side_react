import React from "react";
import {
  Navbar,
  Home,
  Footer,
  About,
  Products,
  LogIn,
  Loading,
  SignUp,
} from "./components";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isLoading } = useAuth0();

  return (
    <Wrapper>
      {isLoading ? (
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
            <Route exact path="/sign-up">
              <SignUp />
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
