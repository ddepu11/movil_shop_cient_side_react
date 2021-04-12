import React from "react";
import { Navbar } from "./components";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Navbar />
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
