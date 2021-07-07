import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <Wrapper className="w-960">
      {console.log(cart)}
      <h2>Hello Cart</h2>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default CartScreen;
