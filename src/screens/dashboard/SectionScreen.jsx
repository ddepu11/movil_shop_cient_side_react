import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import AllProductsScreen from './AllProductsScreen';
import AddProductScreen from './AddProductScreen';

const SectionScreen = () => (
  <Wrapper className="card">
    <h1>Hello</h1>

    <Route exact path="/dashboard/add-product">
      <AddProductScreen />
    </Route>

    <Route exact path="/dashboard/all-product">
      <AllProductsScreen />
    </Route>
  </Wrapper>
);

const Wrapper = styled.section`
  padding: 12px 10px;
  grid-area: s;
`;

export default SectionScreen;
