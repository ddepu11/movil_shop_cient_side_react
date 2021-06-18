import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import AllProductsScreen from './AllProductsScreen';
import AddProductScreen from './AddProductScreen';

const SectionScreen = () => (
  <Wrapper>
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
  grid-area: s;
`;

export default SectionScreen;
