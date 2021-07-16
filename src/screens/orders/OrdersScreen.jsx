import React from 'react';
import styled from 'styled-components';

const OrdersScreen = () => {
  console.log('Orders');
  return (
    <Wrapper className="w-960">
      <h1>Your Orders</h1>
      <div className="orders">
        <div className="order flex">
          <div className="pic">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>

          <div className="info">
            <h2>Realme 2</h2>
            <span>Color: </span>
            <span>Seller: Sonam Kumar</span>
          </div>
          <h3 className="price">12457</h3>

          <h4>Deliverd on Friday 12 2021</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 15px 10px;

  h1 {
    color: var(--little-dark-color);
    font-size: 2em;
    letter-spacing: 1px;
  }
  .orders {
    padding: 15px 0;

    .order {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      justify-content: space-between;
      align-items: flex-start;
      padding: 12px 5px;
      .pic {
        width: 180px;
        height: 180px;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default OrdersScreen;
