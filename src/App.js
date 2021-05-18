import React from "react";
import { Navbar, Home, Footer, About, Products, LogIn } from "./components";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export default App;
