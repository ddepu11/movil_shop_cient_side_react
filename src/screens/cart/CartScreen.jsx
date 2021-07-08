import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const { localStorageCart } = useSelector((state) => state.cart);
  const { hasUserLoggedIn, userInfo } = useSelector((state) => state.user);

  const isUserInfoEmpty = Object.keys(userInfo).length === 0;

  return (
    <Wrapper className="w-960">
      <div className="cart_items">
        {/* Shows when user has logged in */}
        {!isUserInfoEmpty && hasUserLoggedIn && (
          <>
            <h1>My Cart ({userInfo.cart.length})</h1>
            {userInfo.cart.map((m) => (
              <h2 key={Math.floor(Math.random() * Date.now())}>{m.title}</h2>
            ))}
          </>
        )}

        {/* Shows when user has not logged in */}
        {localStorageCart && !hasUserLoggedIn && (
          <>
            <h1>My Cart ({localStorageCart.length})</h1>
            {localStorageCart.map((m) => (
              <h2 key={Math.floor(Math.random() * Date.now())}>{m.title}</h2>
            ))}
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 10px 0;
`;

export default CartScreen;
